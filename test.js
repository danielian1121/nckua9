const fs = require('fs')
const cheerio = require('cheerio')
const array = []
let total = 0

const $ = cheerio.load(fs.readFileSync('./html/107-2.html'))
$('.course_y0').each(function (i) {
  const json = {}
  switch(i) {
    case 7:
      json['field'] = $(this).text()
      break
    case 10:
      json['class'] = $(this).text()
      break
    case 13:
      let temp = $(this).text().replace(/(^\s*)|(\s*$)/g,"")
      json['teacher'] = temp.split('* ')
      break
    case 16:
      json['time'] = $(this).text()
      total += Number($(this).text())
      break
    default:
  }
  array.push(json)
})
/* array.push(total)

array.map((value) => {
  value['persent'] = `${(value['number'] / total * 100).toFixed(5)}`
}) */

const content = JSON.stringify(array);
fs.writeFileSync('107-2.json', content)
