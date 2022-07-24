const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/BMIcalculator', (req, res) => {
  res.sendFile(__dirname + '/calculator.html')
})

app.post('/BMIcalculator-result', (req, res) => {
  const weight = parseFloat(req.body.berat)
  const height = parseFloat(req.body.tinggi)
  const BMI = weight / (height * height)

  res.send(`<p>Your BMI is ${BMI}</p>`)
})

const port = 3000
app.listen(port, () => {
  console.log(`the server running well on port ${port}.`)
})
