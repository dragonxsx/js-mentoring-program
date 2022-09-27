// SOLUTION #1
import { Transform } from "stream"

const reverse = new Transform({
    transform(chunk, _endcoding, callback) {
        const reversedString = chunk.toString().split("").reverse().join("")
        callback(null, `${reversedString}\n`)
    }
})

process.stdin.pipe(reverse).pipe(process.stdout)

// SOLUTION #2
// import readline from "readline"

// const rl = readline.createInterface({
//     input: process.stdin
// })

// rl.on("line", (line) => {
//     const reversedString = line.split("").reverse().join("")
//     process.stdout.write(reversedString + "\n")
// })