const fs = require('fs')

const source = JSON.parse(fs.readFileSync('./107-2-2.json'))

let target = JSON.parse(fs.readFileSync('../config/107-2.json'))

let tLength = target.length

let sLength = source.length

let flag = 1

const temp = []

for (let i = 0 ; i < sLength ; i++) {
  if (!source[i].number)
    temp.push(source[i].class)
}

console.log(temp)

//const content = JSON.stringify(target);
//fs.writeFileSync('107-2-2.json', content)