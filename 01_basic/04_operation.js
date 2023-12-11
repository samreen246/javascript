//let value = 3; 
//let negvalue = -value
//console.log(value) => -3

//console.log(2*3) //multiply
//console.log(2**3) //power

//let str1 = "hello"
//let str2 = " samreen"
//let str3 = str1 + str2
//console.log(str3) =>hello samreen

//console.log("1" + 2) //12
//console.log(1 + "2") //12
//console.log("1" + 2 + 2) //122 -> agar string pehle hai toh baki sab bhi string ki tarah hi treat honge
//console.log(1 + 2 + "2") //32 -> agar integer hai toh pehle jo bhi operation hai vo perform hoga uske baad string join ho jayega
//console.log(1 + "2" + 2) //122

//console.log(true) //true
//console.log(+true) // 1 (true is boolean -> + is doing increament so it gives one) -> not prefered
//console.log(true+) //error
//console.log(+"") // 0 -> not prefered

//let gamecounter = 100;
//++gamecounter
//console.log(gamecounter)
//mdm prefix & profix

let a = 3;
let y = a++;
console.log(a) //4 
console.log(y) //3 -> first use then change (therefore, pervious value is first assigned then change occur)

let c = 3
let d = ++c;
console.log(c) //4
console.log(d) //4 -> first change then use (therfore, changed value is aasigned to d)
