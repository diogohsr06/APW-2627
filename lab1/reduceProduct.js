const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

function reduceProduct(prods) {
  let sum = 0 
  for (let p in prods) {
    sum = sum + prods[p].price
  }
  console.log(sum)
}

const total = reduceProduct(products)


