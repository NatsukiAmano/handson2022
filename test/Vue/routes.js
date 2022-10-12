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
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static(DOCUMENT_ROOT))

//-----------------
// API準備
//-----------------
app.get("/", (req, res) => {
  res.send('Helo');
  console.log('OK')
});

/**
 * 問題を検索
 */
// app.get('/vue/question', async (req, res) =>{
//   const question = await models.Question.findAll()
//   res.json(question)
// })

/**
 * 答えを検索
 */
//  app.get('/vue/ans', async (req, res) =>{
//     res.json( await models.Ans.getAns() )
// })

//-----------------
// サーバー起動
//-----------------
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});