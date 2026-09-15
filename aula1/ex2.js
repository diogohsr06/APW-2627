//Objects - data structures which stores values of type key-value (properties/methods)
const std = {name: "Filipe", number: 12123}

//Prints to console the object, the name property and the number property
console.log(std)
console.log(std.name)
console.log(std.number)

//Adds new property to the object
std.email = "user@example.com"
console.log(std)

//Removes an existing property from the object
delete std.email

//Javascript is case sensitive. Number with capital n does not exist, which results in undefined
console.log(std)
console.log(std.number)
console.log(std["Number"])

