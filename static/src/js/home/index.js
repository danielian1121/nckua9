const course = document.getElementsByClassName('row__element--course')
const check = document.getElementById('checkbox')
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
