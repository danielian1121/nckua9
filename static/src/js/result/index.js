const query = location.search

const content = require('../../pug/common/result/content.pug')

const target = document.getElementsByClassName('content')

fetch(`${location.protocol}//${location.host}/api${query}`)
.then( res => res.json())
  .then( data => {
    const value = data.data
    console.log(value)
    target[0].innerHTML = content( {value} )
    clickEvent()
  })

function clickEvent () {
  const list = document.getElementsByClassName('tbody__rows')
  let listArray = []
  for (let i = 1; i < list.length; i++)
    listArray.push(list[i])
  listArray.map(value => {
    value.addEventListener('click', () => {
      const subList = []
      let temp = value.nextSibling
      while (temp.classList.contains('tbody__history')) {
        subList.push(temp)
        temp = temp.nextSibling
      }
      if (subList.length === 0){}
      else if (subList[0].classList.contains('tbody__history--active'))
        subList.map(value => {
          value.classList.remove('tbody__history--active')
        })
      else
        subList.map(value => {
          value.classList.add('tbody__history--active')
        })
    })
  })
}
