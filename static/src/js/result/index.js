const query = location.search

const content = require('../../pug/common/result/content.pug')

const target = document.getElementsByClassName('content')

fetch(`${location.protocol}//${location.host}/api${query}`)
.then( res => res.json())
  .then( data => {
    const value = data.data
    console.log(value)
    target[0].innerHTML = content( {value} )
  })