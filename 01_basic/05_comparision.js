//console.log(2 > 1) //true
//console.log(2 <= 1) //false
//console.log(2!=0) //true

//console.log("2" > 1) //true -> converting string to integer by itself
//above sometimes doesn't give predictable output -> so whenever tou are doing comparision, make sure that both data are of same datatype

//avoid conversion like (from line 8 to 17) because clearity is more important
//console.log(null > 0) //false
//console.log(null == 0) //false 
//console.log(null >= 0) //true
// the reason is that an equality check == and comparisions > < >= <= works differently. Comparisions convert null to a number, treating it as 0.
//that's why (3) null >=0 is true and (1) null>0 is false

//console.log(undefined == 0) //false
//console.log(undefined > 0) //false
//console.log(undefined < 0) //fasle

console.log( 2 == "2") //true -> only value is compared
console.log(2 === "2") //false -> value and datatype both are changed