const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = 8081

app.use(cors())
app.use(express.static(path.join(__dirname, './')))

// Rutas
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
