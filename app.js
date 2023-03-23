const express = require('express')
const app = express

app.get('/', (req, res) => {
  res.send('App is created')
  console.log(req)
})
app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
