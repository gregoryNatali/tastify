import express from 'express'

import { config } from 'dotenv'

config()

const app = express()

app.get('/test', (request, response) => {
  return response.json({
    'code': '200',
    'test': 'successful'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})