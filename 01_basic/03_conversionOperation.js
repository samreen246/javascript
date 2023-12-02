let score = "33aab"
console.log(typeof score) // type -> string
//console.log(typeof (score))
let valueInNumber = Number(score) // converted in number
console.log(typeof valueInNumber) // type (after conversion) -> number
console.log(valueInNumber) //NaN -> "not a number" (not converted)

let num = null
console.log(typeof num) // type -> object
//console.log(typeof (num))
let valInNumber = Number(num) // converted in number
console.log(typeof valInNumber) // type (after conversion) -> number
console.log(valInNumber) // 0 (not converted)

let n = undefined
console.log(typeof n) // type -> undefined
//console.log(typeof (n))
let vlInNumber = Number(n) // converted in number
console.log(typeof vlInNumber) // type (after conversion) -> number
console.log(vlInNumber) // NaN (not converted)

let a = true
console.log(typeof a) // type -> boolean
//console.log(typeof (a))
let InNumber = Number(a) // converted in number
console.log(typeof InNumber) // type (after conversion) -> number
console.log(InNumber) // 1 (value was true)

let naam = "samreen"
console.log(typeof naam) // type -> string
//console.log(typeof (naam))
let valueNumber = Number(naam) // can not converted in number
console.log(typeof Number) // type (after conversion) -> number
console.log(Number) // NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
// 1 => true; 0 => false
// "" => false
// "samreen" => true

let someNumber = 4
let stringNumber = String(someNumber) 
console.log(stringNumber) // 33
console.log(typeof stringNumber) //string
