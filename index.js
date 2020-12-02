const datable = document.getElementById('datable')
const data = [
  { name: '張小花', tel: '02-29879998' },
  { name: '吳阿寶', tel: '02-29871172' },
  { name: '陳天才', tel: '02-29679991' },
  { name: '陳天才', tel: '02-29679991' },
  { name: '陳天才', tel: '02-29679991' },
  { name: '陳天才', tel: '02-29679991' },
]
console.log(data)
let datatext = ''
for (let i = 0; i < data.length; i++) {
  datatext += `<tr><td>${data[i].name}</td><td>${data[i].tel}</td></tr>`
}
datable.innerHTML = `<thead><th>姓名</th><th>電話</th></thead><tbody>${datatext}</tbody>`
