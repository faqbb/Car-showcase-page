import express from "express"
import __dirname from "./utils.js"
import MongoStore from "connect-mongo"
import mongoose from "mongoose"
import session from "express-session"

const app = express()
const connection = mongoose.connect('mongodb+srv://facundobarberia1:facundobarberia1@data1.bwopaz9.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json())
app.use(session({
    store: MongoStore.create({
        mongoUrl:'mongodb+srv://facundobarberia1:facundobarberia1@data1.bwopaz9.mongodb.net/users?retryWrites=true&w=majority',
        ttl: 600
    }),
    secret: "users",
    resave: true,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`listening on ${PORT}`))

app.use('/', viewsRouter)
app.use('/api', sessionsRouter)