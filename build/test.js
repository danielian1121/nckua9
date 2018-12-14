const fs = require('fs')
const cheerio = require('cheerio')
const array = []
let total = 0

const $ = cheerio.load(fs.readFileSync('./html/105-2.html'))
$('tr', '#lesson').each(function () {
  const json = {}
  $(this).children().each(function (i) {
    switch(i) {
      case 4:
        json['field'] = $(this).text()
        break
      case 5:
        json['class'] = $(this).text()
        break
      case 6:
        let temp = $(this).text().replace(/(^\s*)|(\s*$)/g,"")
        if (temp.includes('*')) {
          temp = temp.substring($(this).text().indexOf('*')-3, $(this).text().indexOf('*'))
        }
        json['teacher'] = temp
        break
      case 7:
        json['number'] = $(this).text()
        total += Number($(this).text())
        break
      default:
    }
  })
  if (!(json['teacher'] == '師姓名'))
    array.push(json)
})
//array.push(total)

array.map((value) => {
  value['persent'] = `${(value['number'] / total * 100).toFixed(5)}`
})

const content = JSON.stringify(array);
fs.writeFileSync('105-2.json', content)
