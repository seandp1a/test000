const year = document.getElementById('year')
const monthh = document.getElementById('monthh')
const datee = document.getElementById('datee')
const checkage = document.getElementById('checkage')
const message = document.getElementById('message')

console.log(year.month, datee)
//  <option value="1910">1910</option>
let yearOption = '<option value="0">請選擇年分</option>'
for (let i = 2020; i > 1909; i--) {
  //yearOption += '  <option value="' + i + '">' + i + '</option>' 與下行程式等價

  yearOption += `  <option value="${i}">${i}年</option>`
}
year.innerHTML = yearOption

let monthOption = '<option value="0">請選擇月分</option>'
for (let i = 1; i < 13; i++) {
  monthOption += ` <option value="${i}">${i}月</option>} `
}
monthh.innerHTML = monthOption

let dateOption = '<option value="0">請選擇日期</option>'
for (let i = 1; i < 32; i++) {
  dateOption += ` <option value="${i}">${i}日</option>} `
}
datee.innerHTML = dateOption

let BY = 0
let BM = 0
let BD = 0
year.addEventListener('change', function () {
  BY = +year.value
  if (BY && BM) {
    const maxday = new Date(BY, BM, 0).getDate()
    let dateOption = '<option value="0">請選擇日期</option>}'
    for (let i = 1; i < maxday + 1; i++) {
      dateOption += ` <option value="${i}">${i}日</option>} `
    }
    datee.innerHTML = dateOption
  }
})
monthh.addEventListener('change', function () {
  BM = +monthh.value
  if (BY && BM) {
    const maxday = new Date(BY, BM, 0).getDate()
    let dateOption = '<option value="0">請選擇日期</option>}'
    for (let i = 1; i < maxday + 1; i++) {
      dateOption += ` <option value="${i}">${i}日</option>} `
    }
    datee.innerHTML = dateOption
  }
})
datee.addEventListener('change', function () {
  BD = +datee.value
})

checkage.addEventListener('click', function () {
  if (BY && BM && BD) {
    const now = new Date()

    const nd = now.getDate()
    const nm = now.getMonth() + 1
    const ny = now.getFullYear()
    let isOver18 = false
    if (ny - BY > 18) isOver18 = true
    if (ny - BY == 18 && nm > BM) isOver18 = true
    if (ny - BY == 18 && nm == BM && nd >= BD) isOver18 = true

    message.innerHTML = isOver18 ? '已滿十八' : '未滿18'
  }
})
