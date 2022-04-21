const _get = (obj, path, defaultValue = '-') => {
    // Se o caminho não for definido o valor é false
    if (!path) return undefined
    // Verifica se o path é uma string ou um Array
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
    // Buscando um valor
    const result = pathArray.reduce((preventObj, key) => preventObj && preventObj[key], obj)
    // Se o valor não for encontrado é retornado undefined, caso contrário retorna o valor
    return result === undefined ? defaultValue : result
}   

export default _get;