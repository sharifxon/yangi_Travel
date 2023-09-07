const mongoose = require('mongoose')

const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`connecting `)
}

module.exports = connectDB