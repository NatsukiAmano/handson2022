const express = require("express");
const app  = express();
const port = 3000;

// POSTのクエリーを良い感じに処理する
// app.use(express.urlencoded({extended: true}));

// 5，POSTの場合
// app.post("/", (req, res) =>{
//   const name = req.body.name;
//   res.send(`君の名は ${name}`);
//   console.log("/ へアクセスがありました");
// });

// 6，JSONを返却
app.get("/", (req, res) =>{
  // データ準備
  const data = {
    "message": "Hello world",
    "date": "2020-06-29"
  };
  res.json(data); // メソッド
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});