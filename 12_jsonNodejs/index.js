const fs = require('fs')
const bioData = {
    name: "harman",
    age: 19,
    gender: "Male"
};

// console.log(bioData.age)

// 1. Convert object to JSON
const jsonData = JSON.stringify(bioData)
// console.log(jsonData)

// JSON to object
// const objData = JSON.parse(jsonData)
// console.log(objData)

// 2. Add jsonData to another file
fs.writeFile('json1.json', jsonData, () => { })

// 3. Readfile

fs.readFile('json1.json', "utf-8", (err, data) => {
    console.log(data);
    const orgData = data;
    console.log(JSON.parse(orgData))
})
 

// // 4. convert json to obj

// const data = JSON.parse(readData)