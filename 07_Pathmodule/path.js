const path = require('path')

console.log(path.dirname('C:/Users/Virender/OneDrive - LNMIIT/Desktop/Web_development/5.Node JS/07_Pathmodule/path.js'))
// to know the extension of file
console.log(path.extname('C:/Users/Virender/OneDrive - LNMIIT/Desktop/Web_development/5.Node JS/07_Pathmodule/path.js'))
// to find the file name
console.log(path.basename('C:/Users/Virender/OneDrive - LNMIIT/Desktop/Web_development/5.Node JS/07_Pathmodule/path.js'))
// parse : return the object of some information
// console.log(path.parse('C:/Users/Virender/OneDrive - LNMIIT/Desktop/Web_development/5.Node JS/07_Pathmodule/path.js'))
const mypath = path.parse('C:/Users/Virender/OneDrive - LNMIIT/Desktop/Web_development/5.Node JS/07_Pathmodule/path.js')
console.log(mypath.name)
console.log(mypath.root)
console.log(mypath.base) 