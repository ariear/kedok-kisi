import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    subject: String,
    class: String,
    major: String,
    pdf: String
})

const exam = mongoose.models.exams || mongoose.model('exams', examSchema) 

export default exam