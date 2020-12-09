const uploadFileToDB = require("../service/uploadService");

const router = require("express").Router();

router.get("/:filePath", (req, res) => {
  return uploadFileToDB(req.params.filePath)
    .then((data) => res.status(200).json({ data: data }))
    .catch((err) => res.status(400));
});

module.exports = router;
