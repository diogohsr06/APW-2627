const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

function filterProduct(prods, minPrice) {
  const array = []
  let i = 0
  for (let p in prods) {
    if (prods[p].price > minPrice) {
      array[i] = prods[p]
      i++
    }
  }
  console.log(array)
}

const expensive = filterProduct(products, 4)
