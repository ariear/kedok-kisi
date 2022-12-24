import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 
async function UploadHandler(req, res) {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            var oldPath = files.file.filepath;
            var newPath = `./public/uploads/${files.file.originalFilename}`;
            mv(oldPath, newPath, function(err) {
            });
            return res.status(200).json({ fileName: files.file.originalFilename })
        })
    })
}

export default UploadHandler