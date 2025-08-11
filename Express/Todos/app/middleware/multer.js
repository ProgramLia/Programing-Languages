const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    const unique = Date.now()
    cb(null, unique + '-' + file.originalname)
  }
})

function fileFilter(req, file, cb) {
     if(['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
          cb(null, true)
     } else {
          cb({message: 'unsupported file format'}, false)
     }
}

const upload = multer({ storage, fileFilter, limits: {fileSize: 2 * 1000000}})

module.exports = upload;