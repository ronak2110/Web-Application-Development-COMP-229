const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.get('/name', function(req, res)  {
    res.send('I am Ronak Barochia...')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})