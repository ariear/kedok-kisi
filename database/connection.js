import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect(process.env.DB_HOST)
}

export default connectMongo