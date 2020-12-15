const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");

//retriveing dataa
router.get("/contacts", (req, res, next) => {
  res.send("retrieving the contactlist");
  Contact.find(function (err, contacts) {
    res.json(contacts);
  });
});

//adding data
router.post("/contact", (req, res, next) => {
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });
  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "failed to add contact" });
    } else {
      res.json({ msg: "contact added" });
    }
  });
});
//deleting data
router.delete("/contact/:id", (req, res, next) => {
  Contact.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else res.json(result);
  });
});

module.exports = router;
