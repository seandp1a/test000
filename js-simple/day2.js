const namee = document.getElementById('namee')
const tel = document.getElementById('tel')
const adress = document.getElementById('adress')
const username = document.getElementById('username')
const pw = document.getElementById('pw')
const pwck = document.getElementById('pwck')
const register = document.getElementById('register')
const messege = document.getElementById('messege')

const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

console.log(namee, tel, adress, username, pw, pwck, register)

register.addEventListener('click', function () {
  let err = ''
  if (!namee.value.trim()) err += '請輸入姓名  '
  if (!tel.value.trim()) err += '請輸入電話  '
  if (!adress.value.trim()) err += '請輸入地址  '
  if (!username.value.trim()) err += '請輸入帳號  '
  if (!pw.value.trim()) err += '請輸入密碼  '
  if (!pwck.value.trim()) err += '請確認密碼  '
  if (pw.value.length <= 6) err += '密碼需大於六位  '

  if (pw.value !== pwck.value) err += '兩次密碼輸入不同'

  messege.innerHTML = err ? err : '表單無格式錯誤'
})

let pp = ''
start.addEventListener('click', function () {
  let p = Math.floor(Math.random() * 6) + 1
  switch (p) {
    case 1:
      pp = '<i class="fas fa-dice-one"></i>'
      break
    case 2:
      pp = '<i class="fas fa-dice-two"></i>'
      break
    case 3:
      pp = '<i class="fas fa-dice-three"></i>'
      break
    case 4:
      pp = '<i class="fas fa-dice-four"></i>'
      break
    case 5:
      pp = '<i class="fas fa-dice-five"></i>'
      break
    case 6:
      pp = '<i class="fas fa-dice-six"></i>'
      break
    default:
      pp = '<i class="fas fa-dice-one"></i>'
  }
  dice.innerHTML = pp
  point.innerHTML = p + '點'
})
