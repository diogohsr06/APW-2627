//Array - Data structures which stores a collection of elements
//This array contains an omitted value (Sparse Array)
const array = [123,,"STR"]

console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])

//Adds a property to the array. Doesnt affect its lenght and its not indexed
array.xpto = "OLA MUNDO"
console.log(array)
console.log(array.xpto)

//Functions can be stored in variables/properties and may be called by parenthesis ()
array.xpto=function(){return "xpto"}
console.log(array)
console.log(array.xpto)
console.log(array.xpto())

//Adds a value to index 100. Because a value has only been stored on a specific index,
//indexes 3 to 99 will be automatically filled with empty items (memory not used)
array[100] = "cento"
console.log(array)
console.log(array[100])

