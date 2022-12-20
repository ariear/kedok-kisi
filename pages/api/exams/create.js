import connectMongo from "../../../database/connection"
import exam from "../../../database/models/schema"

const createExam = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()

    await connectMongo()
    const { subject, classExam, major, pdf } = req.body
    const newExam = await exam.create({
        subject,
        class: classExam,
        major,
        pdf
    })

    res.status(200).json({
        message: 'Add Exam Successfully',
        data: newExam
    })
}

export default createExam