const fs = require("fs");

// create a new file
// fs.writeFileSync('read.txt', "welcome");
// fs.writeFileSync('read.txt', "welcome again");

// fs.appendFileSync('read.txt', ' again')

const buffer_data = fs.readFileSync('read.txt')
// console.log(buffer_data);
{/* <Buffer 77 65 6c 63 6f 6d 65 20 61 67 61 69 6e 20 61 67 61 69 6e > */ }

const original_data = buffer_data.toString();
// console.log(original_data)

// to rename the file
fs.renameSync('read.txt', 'read_write.txt')