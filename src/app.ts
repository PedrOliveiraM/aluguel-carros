import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

dotenv.config()

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port ${port}`))
