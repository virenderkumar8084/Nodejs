// Reading from a stream
// Create a readable stream
// Handle stream events -> data, end and error

const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) console.log(error)
    //     res.end(data.toString())
    // })

    // 2nd way

    const rStream = fs.createReadStream('input.txt');

    // rStream.on('data', (chunkData) => {
    //     res.write(chunkData)
    // })
    // rStream.on('end', () => {
    //     res.end()
    // })

    rStream.pipe(res)
})

server.listen(8000, '127.0.0.1')