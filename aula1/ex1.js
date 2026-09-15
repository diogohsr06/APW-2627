//Prints to console
console.log("Hello World")

//Variable declaration
let a = 10

//Prints the variable and its type
console.log(a)
console.log(typeof(a))

//Modifies a to string "OLA MUNDO"
a = "OLA MUNDO"
console.log(a)
console.log(typeof(a))

//Modifies a to Boolean True
a = true 
console.log(a)
console.log(typeof(a))

//Modifies a to a null value
a = null
console.log(a)
console.log(typeof(a))

//Modifies a to undefined
a = undefined
console.log(a)
console.log(typeof(a))

//Automatic data type convertion
//+ Operation adds, in this case, a new element to the array (String)
console.log("31" + 2)
console.log(typeof("31" + 2))

//- Operation is purely mathematic. There is no String substraction
//31 is automatically converted to integer 31
console.log("31" - 2)
console.log("31" - 2)

//OR Logic Operator
const e = a || 10
console.log(e)

//Declaration of constant variables
const k = "21"
const z = 21

//First one compares just the value
//Second one compares both values and data types
console.log(k == z)
console.log(k === z)
