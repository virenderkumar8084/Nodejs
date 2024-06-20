const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}
const name = 'harman'
// module.exports = name;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// one liner
module.exports = {add, mult, sub}