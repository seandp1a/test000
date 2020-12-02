function getRandom(a, b) {
  let bignum = 0
  let smallnum = 0
  if (a > b) {
    bignum = a
    smallnum = b
  } else {
    bignum = b
    smallnum = a
  }

  let num = Math.floor(Math.random() * bignum) + smallnum
  return num
}
console.log(getRandom(1, 6))
console.log(getRandom(101, 5))
console.log(getRandom(1, 3))
