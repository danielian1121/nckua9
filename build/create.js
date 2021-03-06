const fs = require('fs')

const source = JSON.parse(fs.readFileSync('../config/107-2.json'))

let sLength = source.length

for (let i = 0 ; i < sLength ; i++) {
  let total = 0
  let count = 0
  source[i]['10501'].map((key, index) => {
    if (Object.keys(source[i]['10501'][index])[0] !== 'total') {
      total += Number(Object.values(source[i]['10501'][index])[0])
      count++
    }
  })
  source[i]['10502'].map((key, index) => {
    if (Object.keys(source[i]['10502'][index])[0] !== 'total') {
      total += Number(Object.values(source[i]['10502'][index])[0])
      count++
    }
  })
  source[i]['10601'].map((key, index) => {
    if (Object.keys(source[i]['10601'][index])[0] !== 'total') {
      total += Number(Object.values(source[i]['10601'][index])[0])
      count++
    }
  })
  source[i]['10602'].map((key, index) => {
    if (Object.keys(source[i]['10602'][index])[0] !== 'total') {
      total += Number(Object.values(source[i]['10602'][index])[0])
      count++
    }
  })
  source[i]['10701'].map((key, index) => {
    if (Object.keys(source[i]['10701'][index])[0] !== 'total') {
      total += Number(Object.values(source[i]['10701'][index])[0])
      count++
    }
  })
  if (count === 0)
    source[i]['total'] = 0
  else
    source[i]['total'] = Math.round(total / count)
}

const content = JSON.stringify(source);
fs.writeFileSync('107-2.json', content)
