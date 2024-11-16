const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage({}),
  limits: { fileSize: 500000 },
});

module.exports = upload;
