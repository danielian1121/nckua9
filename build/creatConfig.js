const fs = require('fs')
const cheerio = require('cheerio')
const array = []
let total = 0

const $ = cheerio.load(fs.readFileSync('../config/html/107-2-1.html'))
$('tr', '#lesson').each(function () {
  const json = {}
  let time = ''
  $(this).children().each(function (i) {
    switch(i) {
      case 1:
        time += $(this).text()
        break
      case 2:
        time += $(this).text()
        json['number'] = time
        break
      case 7:
        json['field'] = $(this).text()
        break
      case 10:
        json['class'] = $(this).text()
        break
      case 13:
        let temp = $(this).text().replace(/(^\s*)|(\s*$)/g,"")
        if (temp.includes('*')) {
          temp = temp.substring($(this).text().indexOf('*')-3, $(this).text().indexOf('*'))
        }
        json['teacher'] = temp
        break
      case 16:
        if ($(this).text().match('未定'))
          break
        json['time'] = $(this).text()
        break
      default:
    }
  })
  if (!(json['teacher'] == '師姓名'))
    array.push(json)
})
/* array.push(total)

array.map((value) => {
  value['persent'] = `${(value['number'] / total * 100).toFixed(5)}`
}) */

const content = JSON.stringify(array);
fs.writeFileSync('107-2-1.json', content)
