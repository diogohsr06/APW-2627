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
