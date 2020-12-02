const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

const scissor = document.getElementById('scissor')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const r1 = document.getElementById('r1')
const r2 = document.getElementById('r2')
const r3 = document.getElementById('r3')

function judge(num) {
  if (num == 0) r3.innerHTML = '平手'
  if (num == 1 || num == -2) r3.innerHTML = '勝者為 電腦，你輸了'
  if (num == -1 || num == 2) r3.innerHTML = '勝者為 您'
}

start.addEventListener('click', function () {
  let p = Math.floor(Math.random() * 6) + 1
  const pointarray = ['one', 'two', 'three', 'four', 'five', 'six']

  dice.innerHTML = `<i class="fas fa-dice-${pointarray[p - 1]}"></i>`
  point.innerHTML = p + '點'
})
//剪刀=1  石頭=2  布=3
const textarray = ['剪刀', '石頭', '布']
let usernum = 0
scissor.addEventListener('click', function () {
  const comnum = Math.floor(Math.random() * 3) + 1
  usernum = 1
  r1.innerHTML = '我出了 ' + textarray[usernum - 1]
  r2.innerHTML = '電腦出了 ' + textarray[comnum - 1]
  const temp = comnum - usernum
  judge(temp)
})

rock.addEventListener('click', function () {
  const comnum = Math.floor(Math.random() * 3) + 1
  usernum = 2
  r1.innerHTML = '我出了 ' + textarray[usernum - 1]
  r2.innerHTML = '電腦出了 ' + textarray[comnum - 1]
  const temp = comnum - usernum
  judge(temp)
})

paper.addEventListener('click', function () {
  const comnum = Math.floor(Math.random() * 3) + 1
  usernum = 3
  r1.innerHTML = '我出了 ' + textarray[usernum - 1]
  r2.innerHTML = '電腦出了 ' + textarray[comnum - 1]
  const temp = comnum - usernum
  judge(temp)
})

const calender = document.getElementById('calender')
const today = document.getElementById('today')
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const totaldays = new Date(year, month + 1, 0).getDate()
const firstday = new Date(year, month, 1).getDay()
const calHeader = ['日', '一', '二', '三', '四', '五', '六']
today.innerHTML = `${year}/${month + 1}`
let tabHeader = ''
for (let i = 0; i < calHeader.length; i++) {
  tabHeader += `<th>${calHeader[i]}</th>`
}
calender.innerHTML = `<thead>${tabHeader}</thead>`
let calarray = []
let a = firstday
while (a != 0) {
  calarray.push('')
  a -= 1
}
for (let i = 0; i < totaldays; i++) {
  calarray.push(i + 1)
}
console.log(calarray)
let temp = ''
for (let i = 1; i < calarray.length + 1; i++) {
  temp += `<td>${calarray[i - 1]}</td>`
  if (i % 7 == 0) temp = '<tr>' + temp + '</tr>'
}
calender.innerHTML += `<tbody>${temp}</tbody>`
