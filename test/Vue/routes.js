//---------------------------------------------------------
// modules
//---------------------------------------------------------
const models = require('./models')
const path = require('path')

//---------------------------------------------------------
// define
//---------------------------------------------------------
const PORT = 3000
const DOCUMENT_ROOT = path.join(__dirname, 'public')

//---------------------------------------------------------
// express
//---------------------------------------------------------
//-----------------
// サーバー設定
//-----------------
const express = require('express')
const app  = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(DOCUMENT_ROOT))

//-----------------
// API準備
//-----------------

// Ansテーブルのデータをlocalhost:3000で表示
app.get("/", async (req, res) => {
  const ans = await models.Ans.findAll()
  // const ans = await models.Ans.findByPk(2)
  res.json(ans)
  console.log(ans)
})

// QuestionとAnsを紐づけ&～3000/1で表示
app.get("/1", async(req, res) => {
  const ques = await models.Ans.getAns()
  res.json(ques)
  console.log(ques)
})

//-----------------
// サーバー起動
//-----------------
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});