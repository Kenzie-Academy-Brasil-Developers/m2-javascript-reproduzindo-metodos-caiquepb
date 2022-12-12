//-----------------------------Método Map-----------------------------

const arrayMap = [0,1,2,3,4,5,6,7,8,9]

function minhaCallbackMap(element, array) {

    element = element * 3

        array.push(element)
        
}

function meuMetodoMap(array, callback) {

    const mapResult = []

    for(let index = 0; index < array.length; index++){
        
        const element = array[index]
        callback(element, mapResult)
    
    }

    return mapResult

}

console.log("--------------------------Método Map--------------------------")
console.log(meuMetodoMap(arrayMap, minhaCallbackMap))

//-----------------------------Método Filter-----------------------------

const arrayFilter = [0,1,2,3,4,5,6,7,8,9]

function minhaCallbackFilter(element, index, array) {

    if(element % 2 === 0){

        array.push(element)
        
    }

}

function meuMetodoFilter(array, callback) {

    const filterResult = []

    for(let index = 0; index < array.length; index++){
        
        const element = array[index]
        callback(element, index, filterResult)

    }
    
    return filterResult

}

console.log("--------------------------Método Filter--------------------------")
console.log(meuMetodoFilter(arrayFilter, minhaCallbackFilter))

//-----------------------------Método Reduce-----------------------------

const arrayReduce = [1,2,3,4]

function minhaCallbackReduce(acumulador, valorAtual) {

    acumulador = acumulador * valorAtual
    return acumulador

}

function meuMetodoReduce(array, callback) {

    let reduceResult = 1

    for(let index = 0; index < array.length; index++){
        
        const valorAtual = array[index]
        reduceResult = callback(reduceResult, valorAtual)
        
    }

    return reduceResult

}

console.log("--------------------------Método Reduce--------------------------")
console.log(meuMetodoReduce(arrayReduce, minhaCallbackReduce))

//-----------------------------Método Find-----------------------------

const arrayFind = [0,1,2,3,4,5,6,7,8,9]

function minhaCallbackFind(element, index, array) {

    if(element % 2 === 0){

        array.push(element)
        
    }

}

function meuMetodoFind(array, callback) {

    const findResult = []

    for(let index = 0; index < array.length; index++){

        if(findResult.length === 0){
        
        const element = array[index]
        callback(element, index, findResult)

        }
    
    }

    return findResult

}

console.log("--------------------------Método Find--------------------------")
console.log(meuMetodoFind(arrayFind, minhaCallbackFind))

//-----------------------------Método Includes-----------------------------

const arrayIncludes = [0,1,2,3,4,5,6,7,8,9]

function meuMetodoIncludes(array) {

    const includesResult = []

    for(let index = 0; index < array.length; index++){

        if(array[index] === 2){
        
        const element = array[index]
        includesResult.push(element)

        }
    
    }

    return includesResult

}

console.log("--------------------------Método Includes--------------------------")
console.log(meuMetodoIncludes(arrayIncludes))

//-----------------------------Método IndexOf-----------------------------

const arrayIndexOf = [1,2,3,4,5,6,7,8,9]

function meuMetodoIndexOf(array, element) {

    for(let index = 0; index < array.length; index++){

        if(array[index] === element){

            return index
            
        }
    
    }

    return -1

}

console.log("--------------------------Método IndexOf--------------------------")
console.log(meuMetodoIndexOf(arrayIndexOf, 2))