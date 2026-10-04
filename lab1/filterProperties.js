const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
const props = ['b', 'd', 'g', 'a']

function filterProperties(propNames, obj) {
  const filtered = {}
  for (let p of propNames) {
    if (p in obj) filtered[p] = obj[p]
  }
  return filtered
}

const oFiltered = console.log(filterProperties(props, o))
// oFiltered: {a: 1, b: 'Thor', d: {x: 10}}

