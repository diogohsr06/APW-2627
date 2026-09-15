function f1() {
  console.log("Hello World")
}

const a = f1()
console.log(a)

const f2 = function() { return "Hello World"}
console.log(f2)
console.log(typeof(f2))

const b = f2()
console.log(b)

f2.email = "user@example.com"
console.log(f2.email)

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

function f4(p1,p2,...rest) {
  console.log("Start f3")
  console.log(p1)
  console.log(p2)
  console.log(rest)
}

f4(1)
f4()
f4(1,2)
f4(1,2,3)
f4(1,2,3,4,5,6,7,8,9)

const newObj = {}
newObj.f = function() {console.log("Function - F")}
newObj.str = "STR"

function showProps(obj) {
  for(let p in obj) {
    if(obj instanceof Function) {
      obj[p]()
    }
    console.log(p + " > " + obj[p])
  }
}

showProps(newObj)

function add(a,b) {return a+b}
function executeAndPrint(a,b,f) {
  const res = f(a, b)
  console.log("Resultado " + res)
}

executeAndPrint(5,3,add)
