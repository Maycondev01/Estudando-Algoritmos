function arraySort(array) {
    return array.sort((a, b) => a - b);
}


const array = [3,9,1,2,4,8,7];
console.log("Números originais:", array);

const arrayOrdenado = arraySort(array);
console.log("Números ordenados: ", arrayOrdenado)