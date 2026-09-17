const numbers = [1, 2, 3]

function map(array, transformation){
  const newArr = []
  for (let e in array) {
    let elem = transformation(array[e])
    newArr.push(elem)
  }
  console.log(newArr)
}

const doubled = map(numbers, n => n * 2)


