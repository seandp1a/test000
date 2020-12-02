const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"林世能",0,6,7
"林世能二號",9,16,37
"林世能三號",69,69,69
"張大頭",80,75,60
"李一百",100,60,85`
const data = document.getElementById('data')
const searchtext = document.getElementById('searchtext')
const search = document.getElementById('search')

const DataArray = rawData.replaceAll('"', '').split('\n')
const TitleArray = DataArray[0].split(',')
const ContentArray = DataArray.slice(1)
console.log(DataArray, TitleArray, ContentArray)

let TD = ''
for (let i = 0; i < TitleArray.length; i++) {
  TD += `<th><button id="sort${i}}">${TitleArray[i]}▼</button></th>`
}
TD = `<tbody><tr>${TD}</tr></tbody>`
console.log(TD)

const studentArray = []

for (let i = 0; i < ContentArray.length; i++) {
  // 從每個陣列取得內部的陣列值
  const bodyArray = ContentArray[i].split(',')

  console.log('bodyArray', bodyArray)

  const student = {
    name: bodyArray[0],
    chinese: +bodyArray[1],
    math: +bodyArray[2],
    english: +bodyArray[3],
  }

  studentArray.push(student)
}

console.log(studentArray)

function Display(studentArray) {
  let Ctatal = 0
  let Mtatal = 0
  let Etatal = 0
  let CD = ''
  for (let i = 0; i < studentArray.length; i++) {
    CD += `<tr>
        <td>${studentArray[i].name}</td>
        <td class="rrr">${studentArray[i].chinese}</td>
        <td class="rrr">${studentArray[i].math}</td>
        <td class="rrr">${studentArray[i].english}</td>
        </tr>`
    Ctatal += studentArray[i].chinese

    Mtatal += studentArray[i].math
    Etatal += studentArray[i].english
  }
  console.log(
    (Ctatal / studentArray.length).toFixed(0),
    (Mtatal / studentArray.length).toFixed(0),
    (Etatal / studentArray.length).toFixed(0)
  )
  CD += `<tr>
      <td>各科總平均</td>
      <td class="rrr">
        ${(Ctatal / studentArray.length).toFixed(0)}
      </td>
      <td class="rrr">
        ${(Mtatal / studentArray.length).toFixed(0)}
      </td>
      <td class="rrr">
        ${(Etatal / studentArray.length).toFixed(0)}
      </td>
      <tr>`
  return CD
}
data.innerHTML = TD + `<tbody>${Display(studentArray)}</tbody>`

// let CD = ''
// for (let i = 0; i < ContentArray.length; i++) {
//   CD += '<tr>'
//   let temp = ContentArray[i].split(',')
//   for (let j = 0; j < temp.length; j++) {
//     CD += `<td>${temp[j]}</td>`
//   }
//   CD += '</tr>'
// }

// console.log(CD)

search.addEventListener('click', function () {
  //const keyword = searchtext.value
  const newarr = studentArray.filter(function (v) {
    return v.name.includes(searchtext.value)
  })
  data.innerHTML = TD + `<tbody>${Display(newarr)}</tbody>`
  console.log(newarr)
})
