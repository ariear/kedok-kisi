import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import connectMongo from "../../../database/connection"
import User from "../../../database/models/user"

const loginHandler = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()

    await connectMongo()
    const { email, password } = req.body
    const getUser = await User.findOne({ email })
    if (!getUser) return res.status(401).end()

    const pw = await bcrypt.compare(password, getUser.password)
    if (!pw) return res.status(401).end()
    if (pw) {
        const token = jwt.sign({
            _id: getUser._id,
            username: getUser.username,
            email: getUser.email
        },process.env.DB_SECRET_KEY, {
            expiresIn: '7d'
        })

        res.status(200).json({
            message: 'Login Sucessfully',
            token,
            data: getUser
        })
    }
}

export default loginHandler