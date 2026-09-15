function f1() {
  console.log("Hello World")
}

//Calls function. Results in undefined as f1 has no return value
const a = f1()
console.log(a)

//Functions are objects in JavaScript, which can be added/removed properties
const f2 = function() { return "Hello World"}
console.log(f2)
console.log(typeof(f2))

const b = f2()
console.log(b)

f2.email = "user@example.com"
console.log(f2.email)

//This functions has parameters. An attempt to call this function with an invalid parameter (last 2 prints),
//will result in non listed parameters being ignored
function f3(p1,p2) {
  console.log("Start f3")
  console.log(p1)
  console.log(p2)
}

f3(1)
f3()
f3(1,2)
f3(1,2,3)
f3(1,2,3,4,5,6,7,8,9)

//Rest operator - Groups all remaining arguments/parameters of a function into an array
function f4(p1,p2,...rest) {
  console.log("Start f4")
  console.log(p1)
  console.log(p2)
  console.log(rest)
}

f4(1)
f4()
f4(1,2)
f4(1,2,3)
f4(1,2,3,4,5,6,7,8,9)

//Object declaration
const newObj = {}
newObj.f = function() {console.log("Function - F")}
newObj.str = "STR"

//This alternative verifies if received object is a function.
//If so, prints its properties
function showProps(obj) {
  for(let p in obj) {
    if(obj instanceof Function) {
      obj[p]()
    }
    console.log(p + " > " + obj[p])
  }
}

showProps(newObj)

//A parameter can be used to represent a function (callback)
function add(a,b) {return a+b}
function executeAndPrint(a,b,f) {
  const res = f(a, b)
  console.log("Resultado " + res)
}

executeAndPrint(5,3,add)
