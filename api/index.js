const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Create express instance
const app = express()
app.use(cors()) // For cors env
app.use(express.json()) // for parsing application/json
app.use(
  express.urlencoded({
    extended: true
  })
) // for parsing application/

const mongoDB = 'mongodb://dora:doraralab@http://127.0.0.1/mottoDB'
mongoose.connect(mongoDB, {
  useNewUrlParser: true
})
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
  console.info('Database Connected.')
})

module.exports = {
  path: '/api',
  handler: app
}

app.get('/hello', (req, res) => {
  console.log('hello nuxt in text')
  const value = [{
      content: '一個人，如果沒空，那是因為他不想有空；一個人，如果走不開，那是因為不想走開；一個人，對你藉口太多，那是因為不想在乎。',
      id: '12533',
      author: '張愛玲',
      from: '紅玫瑰與白玫瑰'
    },
    {
      content: '當我真正開始愛自己，我才認識到，所有的痛苦和折磨，都只是在停醒我：活著，就是不要違背自己的心。今天我明白了。這就叫真實。',
      id: '1253',
      author: '卓别林',
      from: '紅玫瑰與白玫瑰'
    }
  ]
  res.send(value)
})
