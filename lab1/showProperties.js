/*
 * Receives an object obj.
 * Prints the name and type of each property in the object to the console.
*/ 

const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}}

function showProperties(obj) {
  for (let p in obj) {
    console.log(p + ": " + obj[p] + ", Type => " + typeof(obj[p]))
  }
}

showProperties(o)
