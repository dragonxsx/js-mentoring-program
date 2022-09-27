const path = require("path")
const fs = require("fs")
const csv = require("csvtojson")
const { randomUUID } = require("crypto")

const filePath = path.join(__dirname, './csv', 'nodejs-hw1-ex1.csv')
const readStream = fs.createReadStream(filePath)
const csvTransformer = csv()
    .preFileLine((fileLine, idx) => {
        // lowercase header names
        if (idx === 0) { return fileLine.toLowerCase() }
        return fileLine;
    })
    .subscribe((object, _index) => {
        delete object['amount']
    })

const uuid = randomUUID()
const outputPath = path.join(__dirname, './output', `${uuid}-output.txt`)
const writeFileStream = fs.createWriteStream(outputPath)

readStream.pipe(csvTransformer).pipe(writeFileStream)

