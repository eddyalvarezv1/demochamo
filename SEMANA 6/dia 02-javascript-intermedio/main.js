// console.log('Hola JS')

// TIPOS DE DATOS NO PRIMITIVOS

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc.

// DECLARARACIÓN

const arregloVacio = []
let listaDeNumeros = [25, 36, 89, 1560]
const listaDeValores = [1, 2 , 3, 'Victor', 'Villazón', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros);
console.log(listaDeValores)

// Lectura de la elemento de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[99]) // undefined

// Escritura en un arreglo

console.log(listaDeValores)

listaDeValores[0] = 'Juan'
listaDeValores[3] = 9999

console.log(listaDeValores)

listaDeNumeros[0] = 'Hola'

console.log(listaDeNumeros)

// Insertar nuevos elementos en un arreglo al final

const listaDeNombres = ['Victor', 'Alessandro', 'Francesca', 'Yesica']

console.log(listaDeNombres)

listaDeNombres.push('Javascript')
listaDeNombres.push('CSS')

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'Código')
listaDeNombres.splice(3, 0, 'Tecsup')

console.log(listaDeNombres)

// Eliminar un elemento en un posición determinada

listaDeNombres.splice(3, 1, 'hola') // Eliminamos el elemento en la posición 3 y insertamos el texto 'hola' al mismo tiempo

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Obtener el último elemento el arreglo

console.log(listaDeNombres[listaDeNombres.length - 1])
console.log(listaDeNombres.at(0))
console.log(listaDeNombres.at(-2))

// DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// TODO: Otras funciones: slice (Investiguen)

// 