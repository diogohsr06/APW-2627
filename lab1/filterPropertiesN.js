const objs = [
   {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
   {x: 'Vision', y: false}
]
const props = ['b', 'd', 'g', 'a']

function filterPropertiesN(propNames, objs) {
  return objs.map(obj => filterProperties(propNames, obj))
}

const objsFiltered = console.log(filterPropertiesN(props, objs))
/*
 objsFiltered: [
   {a: 1, b: 'Thor', d: {x: 10}},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
   { }
 ]
*/

