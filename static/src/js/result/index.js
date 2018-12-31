const query = location.search

const content = require('../../pug/common/result/content.pug')

const target = document.getElementsByClassName('content')

let width = innerWidth

fetch(`${location.protocol}//${location.host}/api${query}`)
.then( res => res.json())
  .then( data => {
    const value = data.data
    target[0].innerHTML = content( {value} )
    if (width > 720)
      clickEvent()
  })

window.onresize = () => {
  if (width <= 720 && innerWidth > 720) {
    width = innerWidth
    clickEvent()
  }
  else if (width > 720 && innerWidth <= 720) {
    width = innerWidth
    const list = document.getElementsByClassName('tbody__rows')
    let listArray = [...list]
    listArray.map(value => {
      value.removeEventListener('click', click)
    })
  }
}

function clickEvent () {
  const list = document.getElementsByClassName('tbody__rows')
  let listArray = [...list]
  listArray.map(value => {
    value.addEventListener('click', click)
    value.argument = value
  })
}

function click (evt) {
  const subList = []
  let temp = evt.target.parentNode.argument.nextSibling
  while (temp && temp.classList.contains('tbody__history')) {
    subList.push(temp)
    temp = temp.nextSibling
  }
  console.log()
  if (subList.length === 0){}
  else if (subList[0].classList.contains('tbody__history--active'))
    subList.map(value => {
      value.classList.remove('tbody__history--active')
    })
  else
    subList.map(value => {
      value.classList.add('tbody__history--active')
    })
}
