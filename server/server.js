const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const contactMess = require('./router/contact.router.js')


mongoose.connect(
    "mongodb+srv://paws:dog@paws.bcxko.mongodb.net/"
).then(() => {console.log('MONGOBD CONNECTED')}).catch((error)=>{console.log(error)})

const app = express()
const PORT = process.env.PORT || 8000;

// writing corrrsss
app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
)
app.use(cookieParser());
app.use(express.json());
app.use('/api/contact',contactMess);
//app.use("/api/admin/products",adminProductRouter)
//app.use("/api/shop/products",shopProductRouter)

app.listen(PORT,()=> console.log(`server is running on :${PORT}`))