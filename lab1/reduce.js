const numbers = [1, 2, 3, 4]

function reduce(array, operation, initialValue) {
  const newArr = []
  let acc = initialValue
  for (let e of array) {
    acc = operation(acc, e)
  }
  console.log(acc)
}

const sum = reduce(numbers, (acc, n) => acc + n, 0)


