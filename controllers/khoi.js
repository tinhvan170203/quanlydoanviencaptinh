const Donvis = require("../models/Donvis");
const Khois = require("../models/Khois");

module.exports = {
  getKhois: async (req, res) => {
    try {
      let khois = await Khois.find().sort({ thutu: 1 });
      res.status(200).json(khois);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy danh sách khối, hệ, lực lượng. Vui lòng liên hệ quản trị viên",
      });
    }
  },
  
  addKhoi: async (req, res) => {
    let {tenkhoi, thutu, status} = req.body;
    try {
        let khoi = new Khois({tenkhoi, thutu, status});
        await khoi.save();

        let khois = await Khois.find().sort({thutu: 1})
        res.status(200).json({khois, message: "Thêm mới khối, hệ, lực lượng thành công!"})
    } catch (error) {
        console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi thêm mới khối, hệ, lực lượng. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  updateKhoi: async (req, res) => {
    let {tenkhoi, thutu, status} = req.body;
 
    let id = req.params.id;
    try {
      await Khois.findByIdAndUpdate(id,{
        tenkhoi, thutu, status
      });

      let khois = await Khois.find().sort({thutu: 1})

      res.status(200).json({khois, message: "Update khối, hệ, lực lượng thành công!"})
  } catch (error) {
      console.log("lỗi: ", error.message);
    res.status(401).json({
      status: "failed",
      message: "Có lỗi xảy ra khi update khối, hệ, lực lượng. Vui lòng liên hệ quản trị viên",
    });
  }
  },

  deleteKhoi:  async (req, res) => {
    let id = req.params.id;
    try {
      let checked = await Donvis.findOne({
        khoi : id
      });

      if(checked!== null){
        const error = new Error('Thao tác xóa thất bại do có đơn vị thuộc khối bạn muốn xóa. Vui lòng kiểm tra lại hành động xóa');
        error.status = 401;
        throw error;
      };
      await Khois.findByIdAndDelete(id);
      let khois = await Khois.find().sort({thutu: 1});

      res.status(200).json({khois, message: "Xóa khối, hệ, lực lượng thành công!"})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  }

};
