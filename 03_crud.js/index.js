const fs = require("fs");

// 1: Create a folder named it chlng
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder?

// creating the folder
// fs.mkdirSync("chlng");

// Create a file in it named bio.txt and data into it.
// fs.writeFileSync('chlng/bio.txt', "Welcome")

// Add more data into the file at the end of the existing data.
// fs.appendFileSync('chlng/bio.txt', " you")

// Read the data without getting the buffer data at first.
// const data = fs.readFileSync('chlng/bio.txt', "utf8");
// console.log(data)

// Rename the file name to mybio.txt
// fs.renameSync("chlng/bio.txt", "chlng/Bio.txt")


// now delete both the file and the folder?
// fs.unlinkSync('chlng/Bio.txt')
// fs.rmdirSync('chlng')