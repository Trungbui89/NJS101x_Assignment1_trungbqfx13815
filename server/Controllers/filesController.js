const formidable = require('formidable')
const fs = require('fs')

exports.uploadImages = (req, res, next) => {
    const form = formidable({
        uploadDir: './assets/images',
        keepExtensions: true,
        maxFieldSize: 10 * 1024 * 1024,
        multiples: false,
    })
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.json({
                result: 'failed',
                data: [],
                messege: `Cant upload file: ${err}`
            })
        }
        let arrayOfFiles = files[""]
        console.log(arrayOfFiles)
        if(arrayOfFiles) {
            // let fileNames = []
            // arrayOfFiles.forEach(file => {
            //     fileNames.push(file.newFilename)
            // })
            return res.json({
                result: 'ok',
                data: arrayOfFiles.newFilename,
                // numberOfImages: fileNames.length,
                messege: 'Upload image successfully'
            })
        } else {
            return res.json({
                result: 'failed',
                data: [],
                // numberOfImages: 0,
                messege: 'No image to upload'
            })
        }
    })
}

exports.getImages = (req, res, next) => {
    const imageName = 'assets/images/' + req.query.image_name
    fs.readFile(imageName, (err, imageData) => {
        if(err) {
            res.json({
                result: 'failed',
                messege: `Cant read image: ${err}`
            })
            return
        }
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        res.end(imageData)
    })
}