import assert from 'assert'
import {filterProperties, filterPropertiesN} from '../filterProps.js'

describe('filterProperties', function () {
    it('should return only the requested properties', function () {
        const obj = {a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }}
        const props = ['b', 'd', 'a']
        const result = filterProperties(props, obj)
        assert.deepStrictEqual(result, {b: 'Thor', d: { x: 10 }, a: 1})
    })
    it('should return an empty object when no property exists', function () {
        const obj = {a: 1, b: 2}
        const props = ['x', 'y', 'z']
        const result = filterProperties(props, obj)
        assert.deepStrictEqual(result, {})
    })
    it('should return an empty object when propNames is empty', function () {
        const obj = {a: 1, b: 2}
        const result = filterProperties([], obj)
        assert.deepStrictEqual(result, {})
    })
    it('should preserve falsy property values', function () {
        const obj = {a: 0, b: false, c: null}
        const props = ['a', 'b', 'c']
        const result = filterProperties(props, obj)
        assert.deepStrictEqual(result, {a: 0, b: false, c: null})
    })
})

describe('filterPropertiesN', function () {
    it('should filter every object in the array', function () {
        const objs = [
            {a: 1, b: 'Thor', d: { x: 10 }},
            {a: [1, 2, 3], b: 'Hulk', g: false},
            {x: 'Vision', y: false}
        ]
        const props = ['b', 'd', 'g', 'a']
        const result = filterPropertiesN(props, objs);
        assert.deepStrictEqual(result, [
            {a: 1, b: 'Thor', d: { x: 10 }},
            {b: 'Hulk', a: [1, 2, 3], g: false},
            {}
        ])
    })
    it('should return an empty array when objs is empty', function () {
        const result = filterPropertiesN(['a', 'b'], [])
        assert.deepStrictEqual(result, [])
    })
})
