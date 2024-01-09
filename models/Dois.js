const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doiSchema = new Schema({
    tendoi: String,
    thutu: Number,
    status: Boolean,
    donvi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donvis"
    },
    donviString: String
},
{timestamps: true});

const Dois = mongoose.model('Dois', doiSchema);

module.exports = Dois;