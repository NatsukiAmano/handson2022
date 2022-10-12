// 参照：https://blog.katsubemakito.net/nodejs/http-server-built-with-express
const express = require("express");
const app  = express();
const port = 3000;
// POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({extended: true}));

// ルーティングの設定
// app.get("/", (req, res) =>{
//   // res.send('Hello World!'); 1,初回メッセ

//   // 2，res.sendFileはブラウザに文字列を直接返却
//   // __dirnameは現在のディレクトリのパス
//   // res.sendFile(`${__dirname}/public/index.html`);

//   // 4,GET：URL末尾のクエリがreq.query.(クエリー名)で取得
//   // ～localhost:3000/?name=TAKIと最後追記すると表示
//   const name = req.query.name;
//   res.send(`君の名は ${name}`);

//   console.log("/ へアクセスがありました");
// });

// 5，POSTの場合
app.post("/", (req, res) =>{
  const name = req.body.name;
  res.send(`君の名は ${name}`);
  console.log("/ へアクセスがありました");
});

// 3，先頭が(:)の文字列は変数のような扱い。どの文字列(URL)でも入る
// app.get("/image/:file", (req, res) =>{
//   // 一致文字列はreq.params.(パラメーター名)で取得可
//   const file = req.params.file;
//   res.sendFile(`${__dirname}/public/image/${file}`);
//   console.log(`/image/${file} へアクセスがありました`);
// });

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});