const { scheduleMessage } = require("../service/messageService");

const router = require("express").Router();

router.post("/", (req, res) => {
  scheduleMessage(req.body.message, req.body.scheduleDate);
  return res.status(200).json({ message: req.body.message });
});

module.exports = router;
