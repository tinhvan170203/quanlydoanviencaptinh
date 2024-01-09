const Dois = require("../models/Dois");
const Canbos = require("../models/Canbo");

module.exports = {
  getDois: async (req, res) => {
    let { tendoi, donvi } = req.query;
    try {
      let dois = await Dois.find({
        tendoi: { $regex: tendoi, $options: "i" },
        donviString: { $regex: donvi, $options: "i" },
      }).sort({ thutu: 1 }).populate('donvi');
      res.status(200).json(dois);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy danh sách đội, công an cấp xã. Vui lòng liên hệ quản trị viên",
      });
    }
  },
  
  addDoi: async (req, res) => {
    let {tendoi, thutu, status, donvi} = req.body;
    donvi = donvi.value;
    let tendoiParam = req.body.queryParams.tendoi;
    let donviParam = req.body.queryParams.donvi;
    try { 
        let Doi = new Dois({tendoi, thutu, status, donvi, donviString: donvi});
        await Doi.save();

        let dois = await Dois.find({
          tendoi: { $regex: tendoiParam, $options: "i" },
          donviString: { $regex: donviParam, $options: "i" },
        }).sort({thutu: 1}).populate('donvi');
        res.status(200).json({dois, message: "Thêm mới đội, công an cấp xã thành công!"})
    } catch (error) {
        console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi thêm mới đội, công an cấp xã. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  updateDoi: async (req, res) => {
    let {tendoi, thutu, status, donvi} = req.body;
    donvi = donvi.value;
    let tendoiParam = req.body.queryParams.tendoi;
    let donviParam = req.body.queryParams.donvi;
    let id = req.params.id;
    try {
      await Dois.findByIdAndUpdate(id,{
        tendoi, thutu, status, donvi, donviString: donvi
      });

      let dois = await Dois.find({
        tendoi: { $regex: tendoiParam, $options: "i" },
        donviString: { $regex: donviParam, $options: "i" },
      }).sort({thutu: 1}).populate('donvi');

      res.status(200).json({dois, message: "Update đội, công an cấp xã thành công!"})
  } catch (error) {
      console.log("lỗi: ", error.message);
    res.status(401).json({
      status: "failed",
      message: "Có lỗi xảy ra khi update đội, công an cấp xã. Vui lòng liên hệ quản trị viên",
    });
  }
  },

  deleteDoi:  async (req, res) => {
    let id = req.params.id;
    let {tendoi, donvi} = req.query;
    try {
      let checked = await Canbos.findOne({
        "donvi.doi" : id
      });

      if(checked!== null){
        const error = new Error('Thao tác xóa thất bại do có đoàn viên đang thuộc đội bạn muốn xóa. Vui lòng kiểm tra lại hành động xóa');
        error.status = 401;
        throw error;
      };
      await Dois.findByIdAndDelete(id);
      let dois = await Dois.find({
        tendoi: { $regex: tendoi, $options: "i" },
        donviString: { $regex: donvi, $options: "i" },
      }).sort({thutu: 1}).populate('donvi');

      res.status(200).json({dois, message: "Xóa đội, công an cấp xã thành công!"})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  }

};
