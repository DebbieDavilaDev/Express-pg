import express from "express"
import cors from "cors"

import { client } from "./src/connectDb.js"
import { getAllMenuItems } from "./src/menu.js"

const app = express()
const port = 3008

app.use(cors())
app.use(express.json())

// Add some routes
app.get ("/", (req, res) => {
    res.send('hello')
})

app.get("/menu", getAllMenuItems)

app.listen(port, () => console.log(`Listening on port ${port}`))
