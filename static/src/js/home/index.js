const course = document.getElementsByClassName('row__element--course')
const check = document.getElementById('checkbox')
const button = document.getElementById('submit')
const length = course.length

for (let i = 0; i < length; i++) {
  course[i].addEventListener('click', () => {
    if (!course[i].classList.contains('row__element--active'))
      course[i].classList.add('row__element--active')
    else
      course[i].classList.remove('row__element--active')
  })
}

check.addEventListener('click', () => {
  if (check.checked) {
    for (let i = 0; i < length; i++)
      course[i].classList.add('row__element--active')
  } else {
    for (let i = 0; i < length; i++)
      course[i].classList.remove('row__element--active')
  }
})

button.addEventListener('click', () => {
  let time = ['','','','','']
  let day = [1,2,3,4,5]
  const click = document.getElementsByClassName('row__element--active')
  const array = [...click]
  if (!array.length){
    Swal({
      type: 'error',
      title: 'Oops...',
      text: '你沒有選擇課程時段'
    })
  }else {
    array.map(value => {
      const data = String(value.cellIndex)
      const nowtime = value.parentElement.firstChild.textContent
      switch (data) {
        case '1':
          time[0] += nowtime
          break
        case '2':
          time[1] += nowtime
          break
        case '3':
          time[2] += nowtime
          break
        case '4':
          time[3] += nowtime
          break
        case '5':
          time[4] += nowtime
          break
      }
    })
    while (time.indexOf('') !== -1) {
      day.splice(time.indexOf(''),1)
      time.splice(time.indexOf(''),1)
    }
    let href = '/api?'
    let hrefTime = 'time=['
    let hrefDay = 'day=['
    for (let i = 0; i < day.length; i++) {
      hrefTime += `\"${time[i]}\",`
      hrefDay += `\"${day[i]}\",`
    }
    location.href = `${href}${hrefTime.slice(0,-1)}]&${hrefDay.slice(0,-1)}]`
  }
})
