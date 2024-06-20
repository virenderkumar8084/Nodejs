const fs = require("fs");


// fs.writeFile("bio.txt", "Welcome", (err) => {})

// fs.appendFile("bio.txt", " Welcome", (err) => {})

fs.readFile("bio.txt", "utf8", (err, data) => {console.log(data)});