const namee = document.getElementById('namee')
const tel = document.getElementById('tel')
const adress = document.getElementById('adress')
const username = document.getElementById('username')
const pw = document.getElementById('pw')
const pwck = document.getElementById('pwck')
const register = document.getElementById('register')
const messege = document.getElementById('messege')

register.addEventListener('click', function () {
  let err = ''
  if (!namee.value.trim()) {
    alert('請輸入姓名')
    return
  }
  if (!tel.value.trim()) {
    alert('請輸入電話')
    return
  }
  if (!adress.value.trim()) {
    alert('請輸入地址')
    return
  }
  if (!username.value.trim()) {
    alert('請輸入帳號')
    return
  }
  if (!pw.value.trim()) {
    alert('請輸入密碼')
    return
  }
  if (!pwck.value.trim()) {
    alert('請確認密碼')
    return
  }
  if (pw.value.length <= 6) {
    alert('密碼需大於六位')
    return
  }

  if (pw.value !== pwck.value) {
    alert('兩次密碼輸入不同')
    return
  }

  messege.innerHTML = err ? err : '表單無格式錯誤'
})
