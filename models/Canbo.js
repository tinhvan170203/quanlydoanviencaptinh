const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const canboSchema = new Schema({
  hoten: {
    type: String,
  },
  ngaysinh: String,
  gioitinh: String,
  trinhdo: String,
  ngayvaodang: String,
  lyluanchinhtri: String,
  quequan: String,
  dangvien: Boolean,
  CCCD: String,
  sohieuCAND: String,
  trangthai: String, //active, delete muc 1 ddang hoat dong, xoa boi nguoi dung chi admin moi co quyen xoa hoan toan
  truongthanhdoan: Boolean,
  ngaytruongthanhdoan: String,
  chuyencongtacngoaitinh: Boolean,
  donvidiaphuongkhac: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donvis",
  },
  ngaychuyendonvidiaphuongkhac: String,
  bacham: [
    {
      bacham: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bachams",
      },
      tungay: String,
      timeNumber: Number,
      bachamString: String,
      ghichu: String,
      date: { type: Date, default: Date.now },
    },
  ],
  chucvu: [
    {
      chucvu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chucvus",
      },
      tungay: String,
      ghichu: String,
      timeNumber: Number,
      chucvuString: String,
      date: { type: Date, default: Date.now },
    },
  ],
  donvi: [
    {
      donvi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donvis",
      },
      donviString: String,
      doi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dois",
      },
      tungay: String,
      timeNumber: Number,
      ghichu: String,
      doiString: String,
      date: { type: Date, default: Date.now }, 
    },
  ],
  thiduathang: [{
    thoigian: String, //2023-01-15
    result: String, //blue, red, yellow, null
    ghichu: String
  }],
  thiduanam: [{
    thoigian: String, //2023
    result: String, //
    ghichu: String
  }]
});

const Canbos = mongoose.model("Canbos", canboSchema);

module.exports = Canbos;
