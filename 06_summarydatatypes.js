//on the bases of how data are stored in memory and how they are access, datatypes are divided in two categories: 1.Primitive & 2.Non-primitive
//Primitive datatype (7 categories & they are 'call by value") : string, number, boolean, null, undefined, symbol, BigInt(for very very big value)
const score = 100 //number
const scorevalue = 100.0 //number (no float or double datatype)
const isloggedin = false //boolean
const temp = null; //null
let email; //undefined -> you can't use undefined with const 
const id = symbol('123')
const anotherid = symbol('123')
console.log(id === anotherid)

//Non-primitive or reference or derived ("call by reference") datatype : array, objects, functions

//javascript is dynamic language as we don't need to defined dataype

