function buscarElemento(array, elemento) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elemento) {
            return i;
        }
    }
    return -1;
}

const array = [2, 4, 6, 8, 10];
console.log(buscarElemento(array, 6)); // Deve retornar 2
console.log(buscarElemento(array, 5)); // Deve retornar -1
