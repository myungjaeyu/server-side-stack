const multer = require('multer'),
      upload = multer({
          storage: multer.memoryStorage(),
          storage : multer.diskStorage({
              destination : (req, file, cb) => cb(null, '_storage/'),
              filename : (req, file, cb) => cb(null, `${ new Date().valueOf() }_${ file.originalname }`),
          })
      });

module.exports = {
    single : upload.single('upload_file'),
    callback : (req, res) => res.redirect('/')
};