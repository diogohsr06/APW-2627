const numbers = [1, 2, 3, 4, 5]

function filter(array, predicate) {
  const newArray = []
  for (let e of array) {
    if (predicate(e)) {
      newArray.push(e)
    }
  }
  console.log(newArray)
}

const even = filter(numbers, n => n % 2 === 0)


