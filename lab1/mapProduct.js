const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

function mapProduct(prods) {
  const array = []
  let i = 0
  for (let p in prods) {
    array[i] = prods[p].name
    i++
  }
  console.log(array)
}


const names = mapProduct(products)


