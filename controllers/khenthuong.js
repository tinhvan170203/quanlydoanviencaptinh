const Chidoans = require("../models/Chidoans");
const Khenthuongcanhan = require("../models/Khenthuongcanhan");
const Khenthuongtapthe = require("../models/Khenthuongtapthe");
const Users = require("../models/Users");

module.exports = {

  getKhentapthes: async (req, res) => {
    let { soQD, nguoiky,
      nhomchidoanduockhenthuong, noidung,
      hinhthuc, capkhen, tungay, denngay }
      = req.query;

    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-99-99"
    };

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
        nhomchidoanduockhenthuong:{$in: chidoans}
      }

    try {
      let items = await Khenthuongtapthe.find(options).sort({ ngayky: -1 }).populate('nhomchidoanduockhenthuong');

      // items = items.filter(i => i.ngayky >= tungay && i.ngayky <= denngay)
      // console.log(items)
      res.status(200).json(items);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  addKhentapthe: async (req, res) => {
    let { soQD, ngayQD, nguoiky, ngayky, nhomchidoanduockhenthuong, noidung, hinhthuc, capkhen } = req.body;
    nhomchidoanduockhenthuong = nhomchidoanduockhenthuong.map(i => i.value);
    hinhthuc = hinhthuc.value;
    capkhen = capkhen.value;
    try {
      let item = new Khenthuongtapthe({
        soQD, ngayQD, nguoiky, ngayky, nhomchidoanduockhenthuong, noidung, hinhthuc, capkhen
      });
      await item.save();
      res.status(200).json({ message: "Thêm mới khen thưởng thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  updateKhentapthe: async (req, res) => {
    let { soQD, ngayQD, nguoiky, ngayky, nhomchidoanduockhenthuong, noidung, hinhthuc, capkhen } = req.body;
    nhomchidoanduockhenthuong = nhomchidoanduockhenthuong.map(i => i.value);

    hinhthuc = hinhthuc.value;
    capkhen = capkhen.value;
    let id = req.params.id;
    try {
      await Khenthuongtapthe.findByIdAndUpdate(id, {
        soQD, ngayQD, nguoiky, ngayky, nhomchidoanduockhenthuong,
        noidung, hinhthuc, capkhen
      });

      res.status(200).json({ message: "Update khen thưởng thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  deleteKhentapthe: async (req, res) => {
    let id = req.params.id;
    try {
      await Khenthuongtapthe.findByIdAndDelete(id);
      res.status(200).json({ message: "Xóa khen thưởng tập thể thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  getKhencanhan: async (req, res) => {
    let id = req.params.id;
    try {
      let items = await Khenthuongcanhan.find({
        canhanduockhenthuong: id
      }).sort({ ngayky: -1 });
      res.status(200).json(items)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  addKhencanhan: async (req, res) => {
    let id = req.body.id; //id cá nhân được khen
    try {
      let { soQD, ngayQD, nguoiky, ngayky, noidung, hinhthuc, capkhen } = req.body;
      hinhthuc = hinhthuc.value;
      capkhen = capkhen.value;
      let item = new Khenthuongcanhan({
        soQD, ngayQD, nguoiky, ngayky, noidung, hinhthuc, capkhen, canhanduockhenthuong: id
      });
      await item.save();
      res.status(200).json({ message: "Thêm mới khen thưởng thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  editKhencanhan: async (req, res) => {
    let id = req.params.id
    let { soQD, ngayQD, nguoiky, ngayky, noidung, hinhthuc, capkhen } = req.body;
    hinhthuc = hinhthuc.value;
    capkhen = capkhen.value;
    try {
      await Khenthuongcanhan.findByIdAndUpdate(id, {
        soQD, ngayQD, nguoiky, ngayky,
        noidung, hinhthuc, capkhen
      });

      res.status(200).json({ message: "Update khen thưởng thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  deleteKhencanhan: async (req, res) => {
    let id = req.params.id; // id khen cá nhân
    try {
      await Khenthuongcanhan.findByIdAndDelete(id);
      res.status(200).json({ message: "Xóa khen thưởng cá nhân thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  },

  searchKhencanhan: async (req, res) => {
    let { soQD, nguoiky, noidung,
      hinhthuc, capkhen, tungay, denngay }
      = req.query;

    if (tungay === "") {
      tungay = "1970-01-01"
    };
    if (denngay === "") {
      denngay = "9999-99-99"
    };
    try {
      let items = await Khenthuongcanhan.find({
        soQD: { $regex: soQD, $options: "i" },
        nguoiky: { $regex: nguoiky, $options: "i" },
        noidung: { $regex: noidung, $options: "i" },
        ngayky: {
          $gte: tungay,
          $lte: denngay,
        },
        hinhthuc: { $regex: hinhthuc, $options: "i" },
        capkhen: { $regex: capkhen, $options: "i" },
      }).sort({ ngayky: -1 });
      res.status(200).json(items)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị viên",
      });
    }
  }
};
