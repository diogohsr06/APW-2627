# Lab 02 - Modularity, Tests and Asynchronous Programming

This lab covers two topics: **modularity** with ECMAScript Modules (ESM) and **unit testing** with Mocha. The two functions from Exercises 9 and 10 were placed in a reusable module, demonstrated in a separate example module, and covered by a Mocha test suite.

## Project structure

```
lab02/
├── package.json
├── filterProps.js        # Module with the functions from Exercises 9 and 10
├── ex.js                 # Example module importing and using the functions
└── test/
    └── properties.test.js   # Mocha unit tests
```

## Setup

```bash
npm init -y
npm install --save-dev mocha
```

In `package.json`, enable ES modules and add the test script:

```json
{
  "type": "module",
  "scripts": {
    "test": "mocha"
  }
}
```

---

## Part 1 - Modularity (ECMAScript Modules)

### `filterProps.js`

Both functions are exported as named exports so they can be imported anywhere.

```js
```js
function filterProperties(propNames, obj) {
    const result = {}

    for (const prop of propNames) {
        if (prop in obj) {
            result[prop] = obj[prop]
        }
    }

    return result
}


function filterPropertiesN(propNames, objs) {
    return objs.map(obj => filterProperties(propNames, obj))
}


export { filterProperties, filterPropertiesN }
```
```

### `ex.js`

A separate module that imports the functions and shows how to call them.

```js
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

```
Run it with:

```bash
node ex.js
```

---

## Part 2 - Unit Tests with Mocha

### `test/properties.test.mjs`

Tests use Mocha's `describe`/`it` together with Node's built-in `assert` module.

### Cases covered

| Category | `filterProperties` | `filterPropertiesN` |
|---|---|---|
| Example from the lab statement | ✔ | ✔ |
| Non-existent property names | ✔ | ✔ (via example) |
| Empty `propNames` | ✔ | ✔ |
| Empty object / empty array | ✔ | ✔ |
| Falsy values preserved | ✔ | |
| Duplicate names | ✔ | |
| Inherited properties | ✔ | |
| No mutation of inputs | ✔ | ✔ |
| Shallow-copy semantics | ✔ | |

### Running the tests

```bash
npm test
```

---

## Summary of what was done

1. Created an ES module (`filterProps.js`) exporting `filterProperties` (Exercise 9) and `filterPropertiesN` (Exercise 10).
2. Implemented `filterPropertiesN` without `for`/`while`/`forEach`.
3. Created `ex.js`, a separate module that imports the functions and demonstrates their use with the examples from the statement.
4. Configured the project for ESM (`"type": "module"`) and installed Mocha.
5. Wrote a Mocha test suite covering normal behavior, edge cases (empty inputs, missing names, falsy values, duplicates, inherited properties) and immutability of inputs.
