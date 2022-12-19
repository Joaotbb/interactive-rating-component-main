let btns = document.querySelectorAll('[name=option]')
let btnSubmmit = document.getElementById('btnSubmmit')
let result = document.getElementById('result')
let btnValue = 4
let mainCard = document.getElementById('mainCard')
let thanksCard = document.getElementById('thanksCard')

// Run all buttons call the number clicked to variable
btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    btnValue = btn.value
  })
})

// Called an event and executed the following function's steps
btnSubmmit.addEventListener('click', function (e) {
  console.log(btnValue)
  result.textContent = btnValue
  mainCard.classList.add('hidden')
  thanksCard.classList.remove('hidden')
})
