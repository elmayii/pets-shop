const multer = require('multer')

const storage = multer.memoryStorage()
const fileUpload = multer({storage:storage}).single('photo')

module.exports = fileUpload