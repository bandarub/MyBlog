const express = require("express");
const router = express.Router();

const profile = require("../../public/profile");

const Profile = require("../../models/profile");
// Profile.collection.insert(profile);

router.get("/", (req, res) => {
  Profile.find().then(doc => {
    res.json(doc);
  });
});

module.exports = router;
