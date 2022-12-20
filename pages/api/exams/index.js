import connectMongo from "../../../database/connection"
import exam from "../../../database/models/schema"

const exams = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end()

    await connectMongo()
    const listExam = await exam.find({})

    res.status(200).json({
        message: 'Get Exams Successfully',
        data: listExam
    })
}

export default exams