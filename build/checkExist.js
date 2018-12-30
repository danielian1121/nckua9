const fs = require('fs')

const source = JSON.parse(fs.readFileSync('../config/107-2.json'))

let target = JSON.parse(fs.readFileSync('../config/105-2.json'))

let tLength = target.length

let sLength = source.length

for (let i = 0 ; i < sLength ; i++) {
  source[i]['10502'] = []
  for (let j = 0 ; j < tLength ; j++) {
    if (source[i].teacher.match( target[j].teacher ) && !target[j].class.match('通識教育生活實踐') && !target[j].persent.match('0.00000')) {
      let data = {
        [target[j].class]: target[j].number
      }
      source[i]['10502'].push(data)
      source[i]['10502'].push({
        total: '64809',
      })
    }
  }
}

const content = JSON.stringify(source);
fs.writeFileSync('107-2.json', content)