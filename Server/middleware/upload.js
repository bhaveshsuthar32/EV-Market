const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage({}),
  limits: { fileSize: 1000000 },
});

module.exports = upload;
