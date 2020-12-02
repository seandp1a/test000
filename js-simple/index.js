//抓 ID為total的資料

const total = document.getElementById('total')
const add = document.getElementById('add')
const sub = document.getElementById('sub')

const text = document.getElementById('text')
const cr = document.getElementById('cr')
const cg = document.getElementById('cg')
const cb = document.getElementById('cb')
const apply = document.getElementById('apply')

const money = document.getElementById('money')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const d_money = document.getElementById('d_money')

const tall = document.getElementById('tall')
const weight = document.getElementById('weight')
const bmicalc = document.getElementById('bmicalc')
const bmivalue = document.getElementById('bmivalue')
console.log(tall, weight, bmicalc, bmivalue)
//對 total 掛一個事件監聽器('事件類型',函式(){要做的事情})
add.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
  //HTML抓的資料型態都是字串，所以+total.innerHTML可以把資料型態轉成number
})
sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
  //HTML抓的資料型態都是字串，所以+total.innerHTML可以把資料型態轉成number
})
//(+cr.value).toString(16) 把cr字串轉成數字，再將數字轉成16進制的字串(表單要用value)

function decimaHex(num) {
  return num.toString(16).length < 2 ? '0' + num.toString(16) : num.toString(16)
}

apply.addEventListener('click', function () {
  text.style.color =
    '#' + decimaHex(+cr.value) + decimaHex(+cg.value) + decimaHex(+cb.value)
})
//台美幣值轉換
usd2twd.addEventListener('click', function () {
  d_money.innerHTML = +money.value * 28.53 + ' (美金->台幣)'
})
twd2usd.addEventListener('click', function () {
  d_money.innerHTML = (+money.value / 28.53).toFixed(2) + ' (台幣->美金)'
})

//BMI = 體重(公斤) / 身高2(公尺平方)

bmicalc.addEventListener('click', function () {
  bmivalue.innerHTML =
    'your bmi' + (+weight.value / Math.pow(+tall.value / 100, 2)).toFixed(1)
})
