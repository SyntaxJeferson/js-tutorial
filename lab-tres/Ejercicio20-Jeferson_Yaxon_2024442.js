function sumarArreglo(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma;
}

// Ejemplo:
console.log(sumarArreglo([1, 2, 3, 4, 5]));  // 15
