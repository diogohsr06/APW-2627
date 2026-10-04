import { filterProperties, filterPropertiesN } from './filterProps.js'

const obj = {a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America'}
const props = ['b', 'd', 'g', 'a']
const filtered = filterProperties(props, obj)
console.log(filtered)

const objs = [
    {a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America'},
    {b: 'Hulk', a: [1, 2, 3], d: { x: 10 }, e: 2, g: false},
    {x: 'Vision', y: false}
]
const filteredObjects = filterPropertiesN(props, objs)
console.log(filteredObjects)
