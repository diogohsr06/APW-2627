/*
 * Receives an array funcArray.
 * Executes all functions present in the array, assuming that they do not receive any parameters.
 */ 

function sayHi() {
    console.log('Hi')
}

function sayBye() {
    console.log('Bye')
}

function executeFunctions(funcArray) {
  if (!Array.isArray(funcArray)) return
  for (let e of funcArray) {
    if (typeof(e) == "function") {
      e()
    }
  }
}

executeFunctions([sayHi, "Oops", , sayBye])
