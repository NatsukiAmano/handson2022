const models = require('./models')
const path = require('path')

const PORT = 3000
const DOCUMENT_ROOT = path.join(__dirname, 'public')

const express = require("express");
const app  = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(DOCUMENT_ROOT))

// ルーティングの設定
app.get("/", (req, res) =>{
  res.send('Hello World!'); 
  console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});