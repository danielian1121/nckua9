const fs = require('fs')

let target = JSON.parse(fs.readFileSync('../config/107-2.json'))

let tLength = target.length

let flag = 1

const temp = []

let arr

let result

for (let i = 0 ; i < tLength ; i++) {
  arr = target[i]['10501']
  result = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
  target[i]['10501'] = result
  arr = target[i]['10502']
  result = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
  target[i]['10502'] = result
  arr = target[i]['10601']
  result = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
  target[i]['10601'] = result
  arr = target[i]['10602']
  result = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
  target[i]['10602'] = result
  arr = target[i]['10701']
  result = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
  target[i]['10701'] = result
}

const content = JSON.stringify(target);
fs.writeFileSync('107-2.json', content)