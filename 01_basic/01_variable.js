const accountId = 144553
let accountEmail = "samreen@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" //not prefered

let accountState //not declared the output will be undefined

//accountId = 2 this is not allowed because it is declared as const and it value not be changed
accountEmail = "sam@gmail.com"
var accountPassword = "120000"
accountCity = "lucknow"

console.log(accountId) //it will can only display one variable

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //this can display all the variable in the paranthesis in a tabular form

/* prefer not to use var because of issue in block scope and functional scope */