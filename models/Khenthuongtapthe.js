const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const khenthuongtaptheSchema = new Schema({
    soQD: String,
    ngayky: String,
    nguoiky: String,
    capkhen: String,
    hinhthuc: String,
    noidung: String,
    nhomchidoanduockhenthuong: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chidoans"
    }]
},
{timestamps: true});

const Khenthuongtapthe = mongoose.model('Khenthuongtapthe', khenthuongtaptheSchema);

module.exports = Khenthuongtapthe;