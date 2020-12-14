const mongoose = require("mongoose");
const ContactSchemaa = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
const Contact = (module.exports = mongoose.model("Contact", ContactSchemaa));
