import * as dotenv from 'dotenv'
import { Application, Request, Response } from 'express'
import express = require('express')

const app: Application = express()
dotenv.config()

app.get('/', (req: Request, res: Response) => {
  const amigo = 'test'

  if (amigo !== 'test') {
    console.log(amigo)
  }
  res.json({ message: 'Hello World' })
})

app.listen(process.env.PORT)
