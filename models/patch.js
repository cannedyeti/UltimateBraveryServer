var mongoose = require('mongoose');
const findOrCreate = require("mongoose-findorcreate");


const PatchSchema = mongoose.Schema({
    patchNumber: {
        type: String,
        required: true,
        unique: true
    }
});

PatchSchema.plugin(findOrCreate);
  
module.exports = mongoose.model('Patch', PatchSchema);