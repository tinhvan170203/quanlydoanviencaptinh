const Canbos = require("../models/Canbo");
const Chidoans = require("../models/Chidoans");
const Donvis = require("../models/Donvis");
const Khenthuongcanhan = require("../models/Khenthuongcanhan");
const Khenthuongtapthe = require("../models/Khenthuongtapthe");
const Kiluatcanhan = require("../models/Kiluatcanhan");
const Users = require("../models/Users");
const _ = require('lodash');
module.exports = {

  getKhenthuongs: async (req, res) => {
    let { soQD, nguoiky,
      nhomchidoanduockhenthuong, noidung,
      hinhthuc, capkhen, tungay, denngay, theloai } //thể loại là tập thể hay cá nhân hay tất cả
      = req.query;
    //phải lấy khen thưởng tập thể của chi đoàn hoặc tất cả các chi đoàn
    // đi tìm kiếm những đoàn viên thuộc chi đoàn đó tính đến thời điểm đến ngày
    // sau đó tìm kiếm khen thưởng cá nhân từ ngày đến đến ngày theo query

    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-01-01"
    };

    let toTimeNumber = new Date(denngay).getTime();
    let goTimeNumber = new Date(tungay).getTime();
    let userId = req.userId.userId;

    const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
    //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
    //gây ra tình trạng k đúng theo thực tế
    let chidoans = user.quantrinhomchidoan;

    // nhomchidoanduockhenthuong = nhomchidoanduockhenthuong.value;
    let options = nhomchidoanduockhenthuong !== "" ?
      {
        soQD: { $regex: soQD, $options: "i" },
        nguoiky: { $regex: nguoiky, $options: "i" },
        noidung: { $regex: noidung, $options: "i" },
        ngayky: {
          $gte: tungay,
          $lte: denngay,
        },
        hinhthuc: { $regex: hinhthuc, $options: "i" },
        capkhen: { $regex: capkhen, $options: "i" },
        nhomchidoanduockhenthuong
      } : {
        soQD: { $regex: soQD, $options: "i" },
        nguoiky: { $regex: nguoiky, $options: "i" },
        noidung: { $regex: noidung, $options: "i" },
        hinhthuc: { $regex: hinhthuc, $options: "i" },
        capkhen: { $regex: capkhen, $options: "i" },
        ngayky: {
          $gte: tungay,
          $lte: denngay,
        },
        nhomchidoanduockhenthuong: { $in: chidoans }
      }

    try {
      let giaykhentapthes = await Khenthuongtapthe.find(options).sort({ ngayky: -1 }).populate('nhomchidoanduockhenthuong');

      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (nhomchidoanduockhenthuong === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        // let chidoans = await Chidoans.find().populate('nhomdonvithuocchidoan');
        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau do cac chi doan co the chon 2, 3 don vi trung nhau
        };

      } else {
        let chidoans = await Chidoans.findById(nhomchidoanduockhenthuong).populate('nhomdonvithuocchidoan')
        donvis = chidoans.nhomdonvithuocchidoan;
      };

      let doanviens = [];
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          "donvi.timeNumber": {
            $lte: toTimeNumber
          },
          trangthai: "active",
        }, { hoten: 1, donvi: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;
          doanviens.push(i._id)
        };
      };
      // tìm khen thưởng cá nhân với từng cán bộ 
      let giaykhencanhans = await Khenthuongcanhan.find({
        soQD: { $regex: soQD, $options: "i" },
        nguoiky: { $regex: nguoiky, $options: "i" },
        noidung: { $regex: noidung, $options: "i" },
        ngayky: {
          $gte: tungay,
          $lte: denngay,
        },
        hinhthuc: { $regex: hinhthuc, $options: "i" },
        capkhen: { $regex: capkhen, $options: "i" },
        canhanduockhenthuong: { $in: doanviens }
      }).populate('canhanduockhenthuong', { hoten: 1 }).sort({ ngayky: -1 });

      // lấy ra arr các tập thể được khen thưởng sau đó loại bỏ những đơn vị giống nhau:
      let arrTapthe = [];
      let dataTapthe = [];
      giaykhentapthes.forEach(i => arrTapthe = arrTapthe.concat(i.nhomchidoanduockhenthuong));

      /*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
      function count_element_in_array(arr, result, x) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
        }
        result.push({ ...x._doc, soluotduockhen: count });
      }

      /*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
      let arrayWithNoDuplicates = arrTapthe.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
          accumulator.push(element)
        }
        return accumulator
      }, [])


      /*đếm số lần xuất hiện của các phần tử duy nhất*/
      for (let i = 0; i < arrayWithNoDuplicates.length; i++)
        count_element_in_array(arrTapthe, dataTapthe, arrayWithNoDuplicates[i]);
      // arrTapthe = _.uniqWith(arrTapthe, _.isEqual); // loại bỏ các phần tử giống nhau


      let arrCanhan = [];
      let dataCanhan = [];
      giaykhencanhans.forEach(i => {
        arrCanhan.push(i.canhanduockhenthuong)
      });
      // arrCanhan = _.uniqWith(arrCanhan, _.isEqual);

      let arrayWithNoDuplicatesCanhan = arrCanhan.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
          accumulator.push(element)
        }
        return accumulator
      }, []);

      /*đếm số lần xuất hiện của các phần tử duy nhất*/
      for (let i = 0; i < arrayWithNoDuplicatesCanhan.length; i++)
        count_element_in_array(arrCanhan, dataCanhan, arrayWithNoDuplicatesCanhan[i]);


      if (theloai === "Tập thể") {
        res.status(200).json({ data: giaykhentapthes, taptheduockhen: dataTapthe, canhanduockhen: [], message: "Tìm kiếm khen thưởng thành công" });
        return;
      };

      giaykhencanhans = giaykhencanhans.map(i => ({ ...i._doc, theloai: "Cá nhân" }))
      if (theloai === "Cá nhân") {
        res.status(200).json({ data: giaykhencanhans, taptheduockhen: [], canhanduockhen: dataCanhan, message: "Tìm kiếm khen thưởng thành công" });
        return;
      };

      let data = giaykhentapthes.concat(giaykhencanhans);
      data.sort((a, b) => {
        let x = new Date(b.ngayky).getTime()
        let y = new Date(a.ngayky).getTime()
        return x - y
      })
      // items = items.filter(i => i.ngayky >= tungay && i.ngayky <= denngay)
      // console.log(dataCanhan)
      // console.log(dataTapthe)
      res.status(200).json({ data, taptheduockhen: dataTapthe, canhanduockhen: dataCanhan, message: "Tìm kiếm khen thưởng thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },
  getKiluats: async (req, res) => {
    let { soQD, nguoiky,
      nhomchidoanduockhenthuong, noidung,
      hinhthuc, tungay, denngay } //thể loại là tập thể hay cá nhân hay tất cả
      = req.query;

    //phải lấy khen thưởng tập thể của chi đoàn hoặc tất cả các chi đoàn
    // đi tìm kiếm những đoàn viên thuộc chi đoàn đó tính đến thời điểm đến ngày
    // sau đó tìm kiếm khen thưởng cá nhân từ ngày đến đến ngày theo query

    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-01-01"
    };

    let toTimeNumber = new Date(denngay).getTime();
    let goTimeNumber = new Date(tungay).getTime();

    // nhomchidoanduockhenthuong = nhomchidoanduockhenthuong.value;

    try {


      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (nhomchidoanduockhenthuong === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoans = await Chidoans.findById(nhomchidoanduockhenthuong).populate('nhomdonvithuocchidoan')
        donvis = chidoans.nhomdonvithuocchidoan;
      };

      let doanviens = [];
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          "donvi.timeNumber": {
            $lte: toTimeNumber
          },
          trangthai: "active",
        }, { hoten: 1, donvi: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;
          doanviens.push(i._id.toString())
        };
      };

      let arrKiluatCanhan = [];
      let dataKiluat = [];
      let kiluatcanhans = await Kiluatcanhan.find({
        soQD: { $regex: soQD, $options: "i" },
        nguoiky: { $regex: nguoiky, $options: "i" },
        noidung: { $regex: noidung, $options: "i" },
        ngayky: {
          $gte: tungay,
          $lte: denngay,
        },
        hinhthuc: { $regex: hinhthuc, $options: "i" },
        canhanbikiluat: { $in: doanviens }
      }).populate('canhanbikiluat', { hoten: 1, canhanbikiluat: 1 }).sort({ ngayky: -1 });

      kiluatcanhans.forEach(i => {
        arrKiluatCanhan.push(i.canhanbikiluat)
      });

      /*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
      function count_element_in_array(arr, result, x) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
        }
        result.push({ ...x._doc, soluotkiluat: count });
      }

      /*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
      let arrayWithNoDuplicates = arrKiluatCanhan.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
          accumulator.push(element)
        }
        return accumulator
      }, [])


      /*đếm số lần xuất hiện của các phần tử duy nhất*/
      for (let i = 0; i < arrayWithNoDuplicates.length; i++)
        count_element_in_array(arrKiluatCanhan, dataKiluat, arrayWithNoDuplicates[i]);

      res.status(200).json({ data: kiluatcanhans, canhanbikiluats: dataKiluat, message: "Tìm kiếm các quyết định kỉ luật thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  getThiduathangs: async (req, res) => {
    let { tungay, denngay, chidoans, hoten } = req.query;
  
    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-01-01"
    };

    let toTimeNumber = new Date(denngay).getTime();
    let goTimeNumber = new Date(tungay).getTime();

    try {
      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (chidoans === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoan = await Chidoans.findById(chidoans).populate('nhomdonvithuocchidoan')
        donvis = chidoan.nhomdonvithuocchidoan;
      };
      // let doanviens = [];
      let data = []; //result return frontend
      let data_not_red = [] // co xanh vang
      let tongsocanbo = 0;
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          "donvi.timeNumber": {
            $lte: toTimeNumber
          },
          trangthai: "active",
         hoten: { $regex: hoten, $options: "i" },
        }, { hoten: 1, donvi: 1, thiduathang: 1 }).populate('donvi.donvi');

        tongsocanbo += doanvienOfDonvi.length;

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;
          // doanviens.push(i);

          let blue = 0;
          let yellow = 0;
          let thoigians_blue=[];
          let thoigians_yellow=[];

          i.thiduathang.forEach(e => {
            let compare = new Date(e.thoigian).getTime();
            if (compare >= goTimeNumber && compare <= toTimeNumber) {
              if (e.result === "blue") {
                blue += 1;
                thoigians_blue.push(e.thoigian)
              };
              if (e.result === "yellow") {
                yellow += 1;
                thoigians_yellow.push(e.thoigian)
              };
            }
          });
          
          //check dd tim ra danh sach can bo bi co xanh vang va bao luowt
           if(blue > 0 || yellow > 0){
            data_not_red.push({
              hoten: i.hoten,
              _id: i._id,
              blue, 
              thoigians_blue,
              yellow,
              thoigians_yellow
            })
           };

        };
      };


      let total_blue = 0;
      let total_yellow = 0;
      data_not_red.forEach(e=>{
        total_blue+=e.blue;
        total_yellow+=e.yellow;
      });

      res.status(200).json({message: "Tìm kiếm thi đua tháng thành công", tongsocanbo,data_not_red,  total_blue, total_yellow})

    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  getBangtheodoiThiduathang: async (req, res) => {
    let {year, chidoans} = req.query;
  

    let toTimeNumber = new Date(year+`-12-31`).getTime();
    let fromTimeNumber = new Date(year+`-01-01`).getTime();
    try {
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (chidoans === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoan = await Chidoans.findById(chidoans).populate('nhomdonvithuocchidoan')
        donvis = chidoan.nhomdonvithuocchidoan;
      };
      let data = []; //result return frontend
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          // "donvi.timeNumber": {
          //   $lte: toTimeNumber
          // },
          trangthai: "active",
        }, { hoten: 1, donvi: 1,ngaysinh: 1, thiduathang: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;

          let thiduathang = i.thiduathang.filter(e=>{
            let compare = new Date(e.thoigian).getTime();
            return fromTimeNumber <= compare && toTimeNumber >= compare
          });
          //vòng lặp 12 tháng trong năm để lấy ra xếp loại từng tháng
          let resultThiduathang = [];
          for(let month = 1; month <=12; month++){
            let index = thiduathang.findIndex(item => item.thoigian === `${year}-`+`${String("0" + month).slice(-2)}-15`);
            if(index === -1){ // TH chưa có thi đua tháng trong năm đó
              resultThiduathang.push({
                [`thang${month}`]: {
                  result: "null",
                  ghichu: ""
                }
              });
            }else{
              resultThiduathang.push({[`thang${month}`]: thiduathang[index]})
            }
          };
          
          data.push({
            _id: i._id,
            hoten: i.hoten,
            ngaysinh: i.ngaysinh,
            resultThiduathang
          });
      };
    };

    res.status(200).json(data)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  getThiduanams: async (req, res) => {
    let { tunam, dennam, chidoans, hoten } = req.query;
  
    let toTimeNumber = new Date(`${dennam}-12-31`).getTime();
    let goTimeNumber = new Date(`${tunam}-01-01`).getTime();

    try {
      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (chidoans === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoan = await Chidoans.findById(chidoans).populate('nhomdonvithuocchidoan')
        donvis = chidoan.nhomdonvithuocchidoan;
      };

      let dataKHTNV = [];
      let dataHTNV = [];
      let dataHTTNV = [];
      let dataHTXSNV = [];
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          "donvi.timeNumber": {
            $lte: toTimeNumber
          },
          trangthai: "active",
         hoten: { $regex: hoten, $options: "i" },
        }, { hoten: 1, donvi: 1,  thiduanam: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;

          let KHTNV = 0;
          let HTNV = 0;
          let HTTNV = 0;
          let HTXSNV = 0;
          let arrKHTNV = [];
          let arrHTNV = [];
          let arrHTTNV = [];
          let arrHTXSNV = [];

          i.thiduanam.forEach(e => {
            let compare = new Date(e.thoigian).getTime();
           
            if (compare >= goTimeNumber && compare <= toTimeNumber) {
              if (e.result === "Không hoàn thành nhiệm vụ") {
                KHTNV += 1;
                arrKHTNV.push(e.thoigian);
              };
              if (e.result === "Hoàn thành nhiệm vụ") {
                HTNV += 1;
                arrHTNV.push(e.thoigian)
              };
              if (e.result === "Hoàn thành tốt nhiệm vụ") {
                HTTNV += 1;
                arrHTTNV.push(e.thoigian)
              };
              if (e.result === "Hoàn thành xuất sắc nhiệm vụ") {
                HTXSNV += 1;
                arrHTXSNV.push(e.thoigian)
              };
            }
          });
          
          //check dd tim ra danh sach đoàn viên HTNV, KHTNV...
          if(KHTNV >= 1){
            dataKHTNV.push({
              _id: i._id,
              hoten: i.hoten,
              thoigians: arrKHTNV,
              soluot: KHTNV
            })
          };

          if(HTNV >= 1){
            dataHTNV.push({
              hoten: i.hoten,
              _id: i._id,
              thoigians: arrHTNV,
              soluot: HTNV
            })
          };

          if(HTTNV >= 1){
            dataHTTNV.push({
              _id: i._id,
              hoten: i.hoten,
              thoigians: arrHTTNV,
              soluot: HTTNV
            })
          };

          if(HTXSNV >= 1){
            dataHTXSNV.push({
              _id: i._id,
              hoten: i.hoten,
              thoigians: arrHTXSNV,
              soluot: HTXSNV
            })
          };
        
        };
      };


      res.status(200).json({message: "Tìm kiếm xếp loại đoàn viên năm thành công", dataHTNV, dataHTTNV, dataKHTNV, dataHTXSNV})

    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh bậc hàm cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  getBangThiduanam: async (req, res) => {
    let { year, chidoans} = req.query;
  
    let toTimeNumber = new Date(`${year}-12-31`).getTime();

    try {
      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (chidoans === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoan = await Chidoans.findById(chidoans).populate('nhomdonvithuocchidoan')
        donvis = chidoan.nhomdonvithuocchidoan;
      };

    let data = [];
      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          // "donvi.timeNumber": {
          //   $lte: toTimeNumber
          // },
          trangthai: "active",
        }, { hoten: 1, donvi: 1, ngaysinh: 1, thiduanam: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;

          let findYear = i.thiduanam.find(e =>e.thoigian.includes(year)); 
          if(findYear){
            data.push({
              _id: i._id,
              hoten: i.hoten,
              ngaysinh: i.ngaysinh,
              result: findYear.result,
              ghichu: findYear.ghichu
            });
          }else{
            data.push({
              _id: i._id,
              hoten: i.hoten,
              ngaysinh: i.ngaysinh,
              result: "",
              ghichu: ""
            });
          }
        };
      };


      res.status(200).json(data)

    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:error.message
      });
    }
  },
  getTruongthanhdoans: async (req, res) => {
    let { tungay, denngay, chidoans, hoten } = req.query;

  
    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-01-01"
    };

    let toTimeNumber = new Date(denngay).getTime();
    let goTimeNumber = new Date(tungay).getTime();

    try {
      //tìm kiếm đoàn viên tính đến thời điểm đến ngày
      let donvis = []; // danh sách các đơn vị thuộc chi đoàn cần tím kiếm
      if (chidoans === "") {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId }).populate('quantrinhomchidoan').populate('quantrinhomchidoan.nhomdonvithuocchidoan');
        //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
        //gây ra tình trạng k đúng theo thực tế
        let chidoans = user.quantrinhomchidoan;

        for (let e of chidoans) {
          donvis = donvis.concat(e.nhomdonvithuocchidoan)
          donvis = _.uniqWith(donvis, _.isEqual); // loại bỏ các phần tử giống nhau
        };
      } else {
        let chidoan = await Chidoans.findById(chidoans).populate('nhomdonvithuocchidoan')
        donvis = chidoan.nhomdonvithuocchidoan;
      };
      let data = []; //result return frontend

      for (let donvi of donvis) {
        let doanvienOfDonvi = await Canbos.find({
          "donvi.donviString": donvi._id,
          "donvi.timeNumber": {
            $lte: toTimeNumber
          },
          trangthai: "active",
          truongthanhdoan: true,
          ngaytruongthanhdoan: {
            $lte: denngay,
            $gte: tungay
          },
         hoten: { $regex: hoten, $options: "i" },
        }, { hoten: 1, donvi: 1, truongthanhdoan: 1, ngaytruongthanhdoan: 1 }).populate('donvi.donvi');

        for (let i of doanvienOfDonvi) {
          let findWithTimeNumber = i.donvi.filter(e => e.timeNumber <= toTimeNumber).sort((a, b) => b.timeNumber - a.timeNumber);
          let checked = findWithTimeNumber[findWithTimeNumber.length - 1].donviString === donvi._id.toString();
          if (!checked) return;

          data.push({
            _id:i._id,
            hoten: i.hoten,
            ngaysinh: i.ngaysinh,
            ngaytruongthanhdoan: i.ngaytruongthanhdoan,
            donvi: i.donvi[findWithTimeNumber.length - 1]
          })
        };
      };

      res.status(200).json(data)
     
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeStatusTruongthanhdoan: async (req, res) => {
    let id = req.params.id;
    try {
      await Canbos.findByIdAndUpdate(id,{
        truongthanhdoan: false,
        ngaytruongthanhdoan: ""
      });

      res.status(200).json({message: "Thay đổi trạng thái trưởng thành đoàn thành công"})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  }
};
