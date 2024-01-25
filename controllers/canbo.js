const Bachams = require("../models/Bachams");
const Chucvus = require("../models/Chucvus");
const Donvis = require("../models/Donvis");
const Dois = require("../models/Dois");
const Users = require("../models/Users");
const Canbos = require("../models/Canbo");
const Khenthuongcanhan = require("../models/Khenthuongcanhan");
const Kiluatcanhan = require("../models/Kiluatcanhan");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  dataForAddPerson: async (req, res) => {
    try {
      let userId = req.userId.userId;

      const user = await Users.findOne({ _id: userId }).populate('quantrinhomdonvi');
      //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
      //gây ra tình trạng k đúng theo thực tế
      let donvis = user.quantrinhomdonvi.filter(i => i.trangthai === true && i.status === true);
      let bachams = await Bachams.find().sort({ thutu: 1 });
      let chucvus = await Chucvus.find().sort({ thutu: 1 });

      res.status(200).json({ donvis, bachams, chucvus });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên",
      });
    }
  },
  getDoiWhenDonviChange: async (req, res) => {
    try {
      let id_donvi = req.query.id_donvi;
      // doi phai co status true tranh truong hop them vao doi da bi sat nhap hoac k con ton tai su dung
      let dois = await Dois.find({ donvi: id_donvi, status: true }).sort({ thutu: 1 })
      res.status(200).json(dois)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên",
      });
    }
  },
  addPerson: async (req, res) => {
    try {
      let { hoten, ngaysinh, gioitinh, trinhdo, ngayvaodang, lyluanchinhtri, dangvien,
        quequan, CCCD, sohieuCAND, bacham, chucvu, donvi, doi, ngaylenham, ngayvedonvi, ngaygiuchucvu
      } = req.body;

      dangvien = dangvien.value;
      gioitinh = gioitinh.value;
      lyluanchinhtri = lyluanchinhtri.value;
      trinhdo = trinhdo.value;
      bacham = bacham.value;
      chucvu = chucvu.value;
      donvi = donvi.value;
      doi = doi.value;

      if (!dangvien) {
        ngayvaodang = ""
      };

      let newItem = new Canbos({
        hoten, ngaysinh, gioitinh, trinhdo, ngayvaodang, lyluanchinhtri, dangvien,
        quequan, CCCD, sohieuCAND,
        trangthai: "active",
        truongthanhdoan: false,
        chuyencongtacngoaitinh: false,
        bacham: [
          {
            bacham: bacham,
            bachamString: bacham,
            tungay: ngaylenham,
            timeNumber: new Date(ngaylenham).getTime()
          },
        ],
        donvi: [
          {
            donvi: donvi,
            donviString: donvi,
            tungay: ngayvedonvi,
            doi: doi,
            timeNumber: new Date(ngayvedonvi).getTime(),
            doiString: doi,
            ghichu: ""
          },
        ],
        // doi: [
        //   {
        //     doi: doi,
        //     doiString: doi,
        //     tungay: ngayvedoi,
        //   },
        // ],
        chucvu: [
          {
            chucvu: chucvu,
            chucvuString: chucvu,
            tungay: ngaygiuchucvu,
            timeNumber: new Date(ngaygiuchucvu).getTime()
          },
        ],
        thiduathang: [],
        thiduanam: []
      });

      await newItem.save();
      res.status(200).json({ message: "Thêm mới đoàn viên thành công" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên",
      });
    }
  },

  getDoanvienList: async (req, res) => {
    try {
      let userId = req.userId.userId;

      let { donvi, hoten, sohieuCAND } = req.query;
      // console.log(req.query)
      const user = await Users.findOne({ _id: userId }).populate('quantrinhomdonvi');
      //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
      //gây ra tình trạng k đúng theo thực tế
      let donvis = user.quantrinhomdonvi.filter(i => i.trangthai === true && i.status === true);
      //lay ra cac item thuoc tung don vi tai thoi diem hien tai va co trang thai = "active" && chua truong thanh doan &&
      let quantrinhomdonvi = donvis.map(i => i._id.toString()); // chi lay ra mang _id cac don vi thoa man

      let items = await Canbos.aggregate([
        {
          $project: {
            donvi: {
              $arrayElemAt: [
                "$donvi",
                {
                  $indexOfArray: [
                    "$donvi.timeNumber", // tra ve array chi chua cac timeNumber
                    { $max: "$donvi.timeNumber" }, // laasy ra max timenumer
                  ],
                },
              ],
            },
            bacham: {
              $arrayElemAt: [
                "$bacham",
                {
                  $indexOfArray: [
                    "$bacham.timeNumber",
                    { $max: "$bacham.timeNumber" },
                  ],
                },
              ],
            },
            chucvu: {
              $arrayElemAt: [
                "$chucvu",
                {
                  $indexOfArray: [
                    "$chucvu.timeNumber",
                    { $max: "$chucvu.timeNumber" },
                  ],
                },
              ],
            },
            hoten: 1,
            CCCD: 1,
            sohieuCAND: 1,
            trangthai: 1,
            quequan: 1,
            trinhdo: 1,
            gioitinh: 1,
            dangvien: 1,
            ngayvaodang: 1,
            ngaysinh: 1,
            lyluanchinhtri: 1,
            truongthanhdoan: 1,
            ngaytruongthanhdoan: 1,
            chuyencongtacngoaitinh: 1,
          },
        },
        {
          $match: {
            $and: [
              { "donvi.donviString": { $regex: donvi, $options: "i" } },
              { "donvi.donviString": { $in: quantrinhomdonvi } },
              { hoten: { $regex: hoten, $options: "i" } },
              { sohieuCAND: { $regex: sohieuCAND, $options: "i" } },
              { trangthai: "active" },
              { truongthanhdoan: false },
              { chuyencongtacngoaitinh: false}
            ],
          },
        },
        {
          $lookup: {
            from: "bachams",
            localField: "bacham.bacham",
            foreignField: "_id",
            as: "bachamPopulate",
          },
        },
        {
          $lookup: {
            from: "chucvus",
            localField: "chucvu.chucvu",
            foreignField: "_id",
            as: "chucvuPopulate",
          },
        },
        {
          $lookup: {
            from: "donvis",
            localField: "donvi.donvi",
            foreignField: "_id",
            as: "donviPopulate",
          },
        },
        {
          $lookup: {
            from: "dois",
            localField: "donvi.doi",
            foreignField: "_id",
            as: "doiPopulate",
          },
        },
      ]).sort({ hoten: 1 });
      res.status(200).json(items);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên",
      });
    }
  },

  editPerson: async (req, res) => {
    let { hoten, ngaysinh, gioitinh, trinhdo, ngayvaodang, lyluanchinhtri, dangvien,
      quequan, CCCD, sohieuCAND
    } = req.body;
    let id_edit = req.body.id_edit;
    dangvien = dangvien.value;
    gioitinh = gioitinh.value;
    lyluanchinhtri = lyluanchinhtri.value;
    trinhdo = trinhdo.value;


    if (!dangvien) {
      ngayvaodang = ""
    };
    try {
      await Canbos.findByIdAndUpdate(id_edit, {
        hoten, ngaysinh, gioitinh, trinhdo,
        ngayvaodang, lyluanchinhtri, dangvien,
        quequan, CCCD, sohieuCAND
      });

      res.status(200).json({ message: 'Cập nhật thông tin đoàn viên thành công.' })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên",
      });
    }
  },

  changeBacham: async (req, res) => {
    let id = req.body.id_edit;
    let { bacham, ngaylenham, ghichu } = req.body;
    bacham = bacham.value;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            bacham: {
              bacham,
              bachamString: bacham,
              tungay: ngaylenham,
              ghichu,
              timeNumber: new Date(ngaylenham).getTime()
            },
          },
        }
      );
      res.status(200).json({ message: "Thay đổi cấp bậc hàm thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh bậc hàm cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  changeChucvu: async (req, res) => {
    let id = req.body.id_edit;
    let { chucvu, ngaygiuchucvu, ghichu } = req.body;
    chucvu = chucvu.value;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            chucvu: {
              chucvu,
              chucvuString: chucvu,
              tungay: ngaygiuchucvu,
              ghichu,
              timeNumber: new Date(ngaygiuchucvu).getTime()
            },
          },
        }
      );
      res.status(200).json({ message: "Cập nhật chức vụ công tác thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh chức vụ cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  deletePersonLevel1: async (req, res) => { // xóa mềm thực hiện bởi user chứ k phải admin tránh trường hợp xóa nhầm thì có thê khôi phục lại được
    let id = req.params.id;
    try {
      await Canbos.findByIdAndUpdate(id, {
        trangthai: "delete"
      })
      res.status(200).json({ message: "Xóa đoàn viên thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa đoàn viên. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  getChucvuPlus: async (req, res) => {
    let id = req.params.id;
    try {
      let item = await Canbos.findById(id)
        .populate("chucvu.chucvu")
      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      // console.log(new Date(item.chucvu[2].tungay).getTime())
      // console.log(new Date(item.chucvu[3].tungay).getTime())
      res.status(200).json(item.chucvu);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy thông tin chức vụ của cá nhân. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeChucvuAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { chucvu, ngaygiuchucvu, ghichu } = req.body;
    chucvu = chucvu.value;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "chucvu._id": id1 },
        {
          $set: {
            "chucvu.$.chucvu": chucvu,
            "chucvu.$.chucvuString": chucvu,
            "chucvu.$.ghichu": ghichu,
            "chucvu.$.tungay": ngaygiuchucvu,
            "chucvu.$.timeNumber": new Date(ngaygiuchucvu).getTime(),
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res
        .status(200)
        .json({ data: item.chucvu, message: "Cập nhật chức vụ nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi quá trình giữ các chức vụ công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  deleteChucvuAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    try {
      let item = await Canbos.findOneAndUpdate({ _id: id },
        {
          $pull: { chucvu: { _id: id1 } }
        }, { new: true })
        .populate("chucvu.chucvu")

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res
        .status(200)
        .json({ data: item.chucvu, message: "Xóa chức vụ nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa quá trình giữ các chức vụ công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  getBachamPlus: async (req, res) => {
    let id = req.params.id;
    try {
      let item = await Canbos.findById(id)
        .populate("bacham.bacham");
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res.status(200).json(item.bacham);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy thông tin bậc hàm của cá nhân. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeBachamAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { bacham, ngaylenham, ghichu } = req.body;
    bacham = bacham.value;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "bacham._id": id1 },
        {
          $set: {
            "bacham.$.bacham": bacham,
            "bacham.$.bachamString": bacham,
            "bacham.$.ghichu": ghichu,
            "bacham.$.tungay": ngaylenham,
            "bacham.$.timeNumber": new Date(ngaylenham).getTime(),
          },
        },
        { new: true }
      )
        .populate("bacham.bacham")

      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res
        .status(200)
        .json({ data: item.bacham, message: "Cập nhật bậc hàm nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi cấp bậc hàm. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  deleteBachamAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    try {
      let item = await Canbos.findOneAndUpdate({ _id: id },
        {
          $pull: { bacham: { _id: id1 } }
        }, { new: true })
        .populate("bacham.bacham")

      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res
        .status(200)
        .json({ data: item.bacham, message: "Xóa bậc hàm nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa cấp bậc hàm. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  getDonviPlus: async (req, res) => {
    let id = req.params.id;
    try {
      let item = await Canbos.findById(id)
        .populate("donvi.donvi")
        .populate("donvi.doi")
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res.status(200).json(item.donvi);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy thông tin đơn vị của cá nhân. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeDonviPlus: async (req, res) => {
    let { id, id1 } = req.params;
    let { donvi, ngayvedonvi, doi, ghichu } = req.body;
    donvi = donvi.value;
    doi = doi.value;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "donvi._id": id1 },
        {
          $set: {
            "donvi.$.donvi": donvi,
            "donvi.$.donviString": donvi,
            "donvi.$.ghichu": ghichu,
            "donvi.$.tungay": ngayvedonvi,
            "donvi.$.doi": doi,
            "donvi.$.doiString": doi,
            "donvi.$.timeNumber": new Date(ngayvedonvi).getTime(),
          },
        },
        { new: true }
      )
        .populate("donvi.donvi")
        .populate("donvi.doi")

      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.tungay).getTime() - new Date(a.tungay).getTime()
      );
      res
        .status(200)
        .json({ data: item.donvi, message: "Cập nhật đơn vị công tác nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi đơn vị công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  deleteDonviPlus: async (req, res) => {
    let { id, id1 } = req.params;
    try {
      let item = await Canbos.findOneAndUpdate({ _id: id },
        {
          $pull: { donvi: { _id: id1 } }
        }, { new: true })
      res
        .status(200)
        .json({ message: "Xóa đơn vị nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa cấp đơn vị. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  chuyenCongtac: async (req, res) => {
    let id = req.params.id;
    let { donvi, doi, ngayvedonvi, ghichu } = req.body;
    donvi = donvi.value;
    doi = doi.value;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            donvi: {
              donvi,
              donviString: donvi,
              tungay: ngayvedonvi,
              doi,
              doiString: doi,
              ghichu,
              timeNumber: new Date(ngayvedonvi).getTime()
            },
          },
        }
      );
      res.status(200).json({ message: "Chuyển công tác thành công." });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy thông tin đội công tác của cá nhân. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  uptoTruongthanhdoan: async (req, res) => {
    let id = req.params.id;
    let { ngaytruongthanhdoan } = req.body;
    try {
      await Canbos.findByIdAndUpdate(id, {
        truongthanhdoan: true,
        ngaytruongthanhdoan
      });

      res.status(200).json({ message: "Hoàn tất thủ tục trưởng thành đoàn" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  getYearMonth: async (req, res) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    res.status(200).json({ year, month })
  },

  fetchThiduathang: async (req, res) => {
    let { year, month } = req.query;
    try {
      let userId = req.userId.userId;
      const user = await Users.findOne({ _id: userId }).populate('quantrinhomdonvi');
      //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
      //gây ra tình trạng k đúng theo thực tế
      let donvis = user.quantrinhomdonvi.filter(i => i.trangthai === true && i.status === true);
      //lay ra cac item thuoc tung don vi tai thoi diem hien tai va co trang thai = "active" && chua truong thanh doan &&
      let quantrinhomdonvi = donvis.map(i => i._id.toString()); // chi lay ra mang _id cac don vi thoa man

      let items = await Canbos.aggregate([
        {
          $project: {
            donvi: {
              $arrayElemAt: [
                "$donvi",
                {
                  $indexOfArray: [
                    "$donvi.timeNumber", // tra ve array chi chua cac timeNumber
                    { $max: "$donvi.timeNumber" }, // laasy ra max timenumer
                  ],
                },
              ],
            },
            bacham: {
              $arrayElemAt: [
                "$bacham",
                {
                  $indexOfArray: [
                    "$bacham.timeNumber",
                    { $max: "$bacham.timeNumber" },
                  ],
                },
              ],
            },
            chucvu: {
              $arrayElemAt: [
                "$chucvu",
                {
                  $indexOfArray: [
                    "$chucvu.timeNumber",
                    { $max: "$chucvu.timeNumber" },
                  ],
                },
              ],
            },
            hoten: 1,
            trangthai: 1,
            truongthanhdoan: 1,
            thiduathang: 1,
            chuyencongtacngoaitinh: 1,
          },
        },
        {
          $match: {
            $and: [
              { "donvi.donviString": { $in: quantrinhomdonvi } },
              { trangthai: "active" },
              { truongthanhdoan: false },
              {chuyencongtacngoaitinh: false}
            ],
          },
        },
        {
          $lookup: {
            from: "bachams",
            localField: "bacham.bacham",
            foreignField: "_id",
            as: "bachamPopulate",
          },
        },
        {
          $lookup: {
            from: "chucvus",
            localField: "chucvu.chucvu",
            foreignField: "_id",
            as: "chucvuPopulate",
          },
        },
        {
          $lookup: {
            from: "donvis",
            localField: "donvi.donvi",
            foreignField: "_id",
            as: "donviPopulate",
          },
        },
        {
          $lookup: {
            from: "dois",
            localField: "donvi.doi",
            foreignField: "_id",
            as: "doiPopulate",
          },
        },
      ]).sort({ hoten: 1 });

      for (let item of items) {
        let checked = item.thiduathang.find(i => i.thoigian.includes(`${year}-` + `${String("0" + month).slice(-2)}`)
        );

        //TH1: checked !== undefined
        if (checked) {
          item.thiduathang = {
            result: checked.result,
            ghichu: checked.ghichu
          }
        } else {
          item.thiduathang = {
            result: "null",
            ghichu: ""
          }
        }
      };

      res.status(200).json(items)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  saveThiduathang: async (req, res) => {
    let { doanviens, month, year } = req.body;

    try {
      for (let doanvien of doanviens) {
        let item = await Canbos.findById(doanvien._id);
        let checked = item.thiduathang.find(i => i.thoigian.includes(`${year}-` + `${String("0" + month).slice(-2)}`));//check xem trong du lieu co chua
        // TH1: chua co === checked === undefined

        if (checked) {
          checked.result = doanvien.thiduathang.result;
          checked.ghichu = doanvien.thiduathang.ghichu;
        } else {
          item.thiduathang.push({
            result: doanvien.thiduathang.result,
            ghichu: doanvien.thiduathang.ghichu,
            thoigian: `${year}-` + `${String("0" + month).slice(-2)}-15`
          })
        };
        await item.save()
      };
      res.status(200).json({ message: "Lưu kết quả thi đua tháng thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  fetchThiduanam: async (req, res) => {
    let { year } = req.query;
    try {
      let userId = req.userId.userId;
      const user = await Users.findOne({ _id: userId }).populate('quantrinhomdonvi');
      //kiểm tra xem đơn vị nào active thì lấy ra tránh trường hợp đơn vị đã xác nhập rồi nhưng vẫn thêm vào 
      //gây ra tình trạng k đúng theo thực tế
      let donvis = user.quantrinhomdonvi.filter(i => i.trangthai === true && i.status === true);
      //lay ra cac item thuoc tung don vi tai thoi diem hien tai va co trang thai = "active" && chua truong thanh doan &&
      let quantrinhomdonvi = donvis.map(i => i._id.toString()); // chi lay ra mang _id cac don vi thoa man

      let items = await Canbos.aggregate([
        {
          $project: {
            donvi: {
              $arrayElemAt: [
                "$donvi",
                {
                  $indexOfArray: [
                    "$donvi.timeNumber", // tra ve array chi chua cac timeNumber
                    { $max: "$donvi.timeNumber" }, // laasy ra max timenumer
                  ],
                },
              ],
            },
            bacham: {
              $arrayElemAt: [
                "$bacham",
                {
                  $indexOfArray: [
                    "$bacham.timeNumber",
                    { $max: "$bacham.timeNumber" },
                  ],
                },
              ],
            },
            chucvu: {
              $arrayElemAt: [
                "$chucvu",
                {
                  $indexOfArray: [
                    "$chucvu.timeNumber",
                    { $max: "$chucvu.timeNumber" },
                  ],
                },
              ],
            },
            hoten: 1,
            trangthai: 1,
            truongthanhdoan: 1,
            thiduanam: 1,
            chuyencongtacngoaitinh: 1,
          },
        },
        {
          $match: {
            $and: [
              { "donvi.donviString": { $in: quantrinhomdonvi } },
              { trangthai: "active" },
              { truongthanhdoan: false },
              { chuyencongtacngoaitinh: false}
            ],
          },
        },
        {
          $lookup: {
            from: "bachams",
            localField: "bacham.bacham",
            foreignField: "_id",
            as: "bachamPopulate",
          },
        },
        {
          $lookup: {
            from: "chucvus",
            localField: "chucvu.chucvu",
            foreignField: "_id",
            as: "chucvuPopulate",
          },
        },
        {
          $lookup: {
            from: "donvis",
            localField: "donvi.donvi",
            foreignField: "_id",
            as: "donviPopulate",
          },
        },
        {
          $lookup: {
            from: "dois",
            localField: "donvi.doi",
            foreignField: "_id",
            as: "doiPopulate",
          },
        },
      ]).sort({ hoten: 1 });

      for (let item of items) {
        let checked = item.thiduanam.find(i => i.thoigian.includes(`${year}`)
        );

        //TH1: checked !== undefined
        if (checked) {
          item.thiduanam = {
            result: checked.result,
            ghichu: checked.ghichu
          }
        } else {
          item.thiduanam = {
            result: "null",
            ghichu: ""
          }
        }
      };

      res.status(200).json(items)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  saveThiduanam: async (req, res) => {
    let { doanviens, year } = req.body;
    try {
      for (let doanvien of doanviens) {
        let item = await Canbos.findById(doanvien._id);
        let checked = item.thiduanam.find(i => i.thoigian.includes(`${year}`));//check xem trong du lieu co chua
        // TH1: chua co === checked === undefined
        if (checked) {
          checked.result = doanvien.thiduanam.result;
          checked.ghichu = doanvien.thiduanam.ghichu;
        } else {
          item.thiduanam.push({
            result: doanvien.thiduanam.result,
            ghichu: doanvien.thiduanam.ghichu,
            thoigian: `${year}`
          })
        };
        await item.save()
      };
      res.status(200).json({ message: "Lưu kết quả thi đua năm thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra!!! Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  // xóa vĩnh viễn
  getCanboStatusDelete: async (req, res) => {
    try {
      let userId = req.userId.userId;

      let { hoten } = req.query;

      let items = await Canbos.aggregate([
        {
          $project: {
            donvi: {
              $arrayElemAt: [
                "$donvi",
                {
                  $indexOfArray: [
                    "$donvi.timeNumber", // tra ve array chi chua cac timeNumber
                    { $max: "$donvi.timeNumber" }, // laasy ra max timenumer
                  ],
                },
              ],
            },
            bacham: {
              $arrayElemAt: [
                "$bacham",
                {
                  $indexOfArray: [
                    "$bacham.timeNumber",
                    { $max: "$bacham.timeNumber" },
                  ],
                },
              ],
            },
            chucvu: {
              $arrayElemAt: [
                "$chucvu",
                {
                  $indexOfArray: [
                    "$chucvu.timeNumber",
                    { $max: "$chucvu.timeNumber" },
                  ],
                },
              ],
            },
            hoten: 1,
            CCCD: 1,
            sohieuCAND: 1,
            trangthai: 1,
            quequan: 1,
            trinhdo: 1,
            gioitinh: 1,
            dangvien: 1,
            ngayvaodang: 1,
            ngaysinh: 1,
            lyluanchinhtri: 1,
            truongthanhdoan: 1,
            ngaytruongthanhdoan: 1
          },
        },
        {
          $match: {
            $and: [
              { trangthai: "delete" },
              { hoten: { $regex: hoten, $options: "i" } },
            ],
          },
        },
        {
          $lookup: {
            from: "bachams",
            localField: "bacham.bacham",
            foreignField: "_id",
            as: "bachamPopulate",
          },
        },
        {
          $lookup: {
            from: "chucvus",
            localField: "chucvu.chucvu",
            foreignField: "_id",
            as: "chucvuPopulate",
          },
        },
        {
          $lookup: {
            from: "donvis",
            localField: "donvi.donvi",
            foreignField: "_id",
            as: "donviPopulate",
          },
        },
        {
          $lookup: {
            from: "dois",
            localField: "donvi.doi",
            foreignField: "_id",
            as: "doiPopulate",
          },
        },
      ]).sort({ hoten: 1 });
      res.status(200).json(items);

    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  deleteCanboPlus: async (req, res) => {
    let id = req.params.id;
    try {
      //xóa toàn bộ khen cá nhân của cá nhân
      await Khenthuongcanhan.deleteMany({
        canhanduockhenthuong: id
      });
      await Kiluatcanhan.deleteMany({
        canhanbikiluat: id
      });

      await Canbos.findByIdAndDelete(id);

      res.status(200).json({ message: "Xóa cán bộ nâng cao thành công" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          error.message,
      });
    }
  },

  changeActiveDoanvien: async (req, res) => {
    let id = req.params.id;
    try {
      await Canbos.findByIdAndUpdate(id, {
        trangthai: "active"
      });
      res.status(200).json({ message: "Khôi phục đoàn viên thành công." })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  detailDoanvien: async (req, res) => {
    let id = req.params.id;

    try {
      // let doanvien = await Canbos.aggregate([
      //   {
      //     $project: {
      //       donvis: {
      //         $arrayElemAt: [
      //           "$donvi",
      //           {
      //             $indexOfArray: [
      //               "$donvi.timeNumber", // tra ve array chi chua cac timeNumber
      //               { $max: "$donvi.timeNumber" }, // laasy ra max timenumer
      //             ],
      //           },
      //         ],
      //       },
      //       bachams: {
      //         $arrayElemAt: [
      //           "$bacham",
      //           {
      //             $indexOfArray: [
      //               "$bacham.timeNumber",
      //               { $max: "$bacham.timeNumber" },
      //             ],
      //           },
      //         ],
      //       },
      //       chucvus: {
      //         $arrayElemAt: [
      //           "$chucvu",
      //           {
      //             $indexOfArray: [
      //               "$chucvu.timeNumber",
      //               { $max: "$chucvu.timeNumber" },
      //             ],
      //           },
      //         ],
      //       },
      //       hoten: 1,
      //       CCCD: 1,
      //       sohieuCAND: 1,
      //       trangthai: 1,
      //       quequan: 1,
      //       trinhdo: 1,
      //       gioitinh: 1,
      //       dangvien: 1,
      //       ngayvaodang: 1,
      //       ngaysinh: 1,
      //       lyluanchinhtri: 1,
      //       truongthanhdoan: 1,
      //       ngaytruongthanhdoan: 1,
      //       thiduanam: 1,
      //       thiduathang: 1,
      //       donvidiaphuongkhac: 1,
      //       chuyencongtacngoaitinh: 1,
      //       donvi: 1,
      //       chucvu: 1,
      //       bacham: 1,
      //       _id: 1
      //     },
      //   },
      //   {
      //     $match: {
      //       _id: ObjectId(id)
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "bachams",
      //       localField: "bachams.bacham",
      //       foreignField: "_id",
      //       as: "bachamPopulate",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "chucvus",
      //       localField: "chucvus.chucvu",
      //       foreignField: "_id",
      //       as: "chucvuPopulate",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "donvis",
      //       localField: "donvis.donvi",
      //       foreignField: "_id",
      //       as: "donviPopulate",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "dois",
      //       localField: "donvis.doi",
      //       foreignField: "_id",
      //       as: "doiPopulate",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "donvis",
      //       localField: "donvidiaphuongkhac",
      //       foreignField: "_id",
      //       as: "donvidiaphuongkhac",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "donvis",
      //       localField: "donvi.donvi",
      //       foreignField: "_id",
      //       as: "donvi",
      //     },
      //   },
      // ]);
      let doanvien = await Canbos.find({_id: id}).populate('donvidiaphuongkhac').populate("donvi.donvi").populate('bacham.bacham').populate("chucvu.chucvu")

      let khenthuongs = await Khenthuongcanhan.find({ canhanduockhenthuong: id }).sort({ ngayky: -1 });
      let kiluats = await Kiluatcanhan.find({ canhanbikiluat: id }).sort({ ngayky: -1 });
   
      let thiduas = [];
      
      let date = new Date();
      let year = date.getFullYear();
      
      for (let i = year; i >= 2020; i--) {
        let toTimeNumber = new Date(i + `-12-31`).getTime();
        let fromTimeNumber = new Date(i + `-01-01`).getTime();
        
        let thiduathang = doanvien[0].thiduathang.filter(e => {
          let compare = new Date(e.thoigian).getTime();
          return fromTimeNumber <= compare && toTimeNumber >= compare
        });
        
        let thiduanam = null;
        let resultThiduathang = [];
        //vòng lặp 12 tháng trong năm để lấy ra xếp loại từng tháng
        for (let month = 1; month <= 12; month++) {
          let index = thiduathang.findIndex(item => item.thoigian === `${i}-` + `${String("0" + month).slice(-2)}-15`);
          if (index === -1) { // TH chưa có thi đua tháng trong năm đó
            resultThiduathang.push({
              [`thang${month}`]: {
                result: "null",
                ghichu: ""
              }
            });
          } else {
            resultThiduathang.push({ [`thang${month}`]: thiduathang[index] })
          }
        };

        let index_thiduanam = doanvien[0].thiduanam.findIndex(item => Number(item.thoigian) === i);
        
        if(index_thiduanam === -1){
          thiduanam = {
            result: "",
            ghchu: ""
          }
        }else{
          thiduanam = {
            result: doanvien[0].thiduanam[index_thiduanam].result,
            ghichu: doanvien[0].thiduanam[index_thiduanam].ghichu,
          }
        }

        thiduas.push({
          nam: i,
          resultThiduathang,
          thiduanam
        })
      };

      let bachamPopulate = [doanvien[0].bacham.sort((a, b) => b.timeNumber - a.timeNumber)[0].bacham];
      let chucvuPopulate = [doanvien[0].chucvu.sort((a, b) => b.timeNumber - a.timeNumber)[0].chucvu];
      let donviPopulate = [doanvien[0].donvi.sort((a, b) => b.timeNumber - a.timeNumber)[0].donvi];
      let quatrinhcongtac = doanvien[0].donvi.sort((a, b) => a.timeNumber - b.timeNumber);
      let quatrinhlenham = doanvien[0].bacham.sort((a, b) => a.timeNumber - b.timeNumber);
      let quatrinhchucvu = doanvien[0].chucvu.sort((a, b) => a.timeNumber - b.timeNumber);
      doanvien = [{...doanvien[0]._doc, bachamPopulate, chucvuPopulate, donviPopulate}]

      res.status(200).json({ doanvien, khenthuongs, kiluats, thiduas, quatrinhcongtac, quatrinhlenham, quatrinhchucvu })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },

  moveDiaphuongkhac: async (req, res) => {
    let id = req.params.id;
    let {donvi, ngayvedonvi} = req.body;
    try {
      donvi = donvi.value;
      await Canbos.findByIdAndUpdate(id, {
        chuyencongtacngoaitinh: true,
        donvidiaphuongkhac: donvi,
        ngaychuyendonvidiaphuongkhac: ngayvedonvi
      });
      res.status(200).json({ message: "Chuyển công tác đến địa phương khác thành công." })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
   getDonviNgoaitinh: async (req, res) => {
    let donvis = await Donvis.find({status: false});
    res.status(200).json(donvis)
   },

   getDoanvienChuyenKhactinh: async (req, res) => {
    let {hoten} = req.query;
    try {
      let items= await Canbos.find({
        hoten: { $regex: hoten, $options: "i" },
        chuyencongtacngoaitinh: true
      },{hoten: 1, ngaysinh: 1, donvidiaphuongkhac: 1, ngaychuyendonvidiaphuongkhac: 1, donvi: 1}).populate("donvidiaphuongkhac").populate("donvi.donvi").sort({ngaychuyendonvidiaphuongkhac: -1});

      let data = [];
      for(let item of items){
        let donvi_before = item.donvi.sort((a,b) => b.tungay - a.tungay);
        data.push({...item._doc, donvitruockhichuyen: donvi_before[0].donvi.tendonvi})
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

   backToCongantinh: async (req, res) => {
    let id = req.params.id;
    try {
      await Canbos.findByIdAndUpdate(id, {
        chuyencongtacngoaitinh: false,
        ngaychuyendonvidiaphuongkhac: ""
      });
      res.status(200).json({message: "Khôi phục trạng thái đang công tác tại công an tỉnh"})
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
