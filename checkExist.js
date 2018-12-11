const fs = require('fs')

const source = JSON.parse(fs.readFileSync('./config/107-2.json'))

let target = JSON.parse(fs.readFileSync('./config/105-1.json'))

let tLength = target.length

let sLength = source.length

for (let i = 0 ; i < sLength ; i++) {
  source[i]['10501'] = []
  for (let j = 0 ; j < tLength ; j++) {
    if (source[i].teacher.match( target[j].teacher )) {
      let data = {
        [target[j].class]: target[j].persent
      }
      source[i]['10501'].push(data)
    }
  }
}

const content = JSON.stringify(source);
fs.writeFileSync('107-2.json', content)