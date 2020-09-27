import express = require('express')
import * as dotenv from 'dotenv'
import { Application, Request, Response } from 'express'

const app: Application = express()

dotenv.config()

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.listen(process.env.PORT)
