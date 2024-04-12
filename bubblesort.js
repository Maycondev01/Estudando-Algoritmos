function bubbleSort(array) {
    const n = array.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const array = [9,8,4,6,5,2,1];
console.log("Array Original: ", array);

const arrayOrdenado = bubbleSort(array);
console.log("Array Ordenado: ", arrayOrdenado)