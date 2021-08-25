const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8091;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 실행!`);
});
