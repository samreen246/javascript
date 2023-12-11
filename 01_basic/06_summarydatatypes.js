//on the bases of how data are stored in memory and how they are access, datatypes are divided in two categories: 1.Primitive & 2.Non-primitive
//Primitive datatype (7 categories & they are 'call by value") : string, number, boolean, null, undefined, symbol, BigInt(for very very big value)
const score = 100 //number
const scorevalue = 100.0 //number (no float or double datatype)
const isloggedin = false //boolean
const temp = null; //null
let email; //undefined -> you can't use undefined with const 
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid) //false
const bigNumber = 2222222222222222222222222222222n; //n -> bigInt
console.log(bigNumber)

//Non-primitive or reference or derived ("call by reference") datatype : array, objects, functions
const heros = ["shahrukh", "Akhsay", "Govinda"] //array
let myObj={
  name:"samreen",
  age:22
} //object
const myfunction = function(){
    console.log("hi ji")
}

console.log(typeof temp) // null -> datatype (object)
console.log(typeof myfunction) //funtion (datatype)

//javascript is dynamic language as we don't need to defined dataype

//non-primitive -> datatype is object

/* Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object */

