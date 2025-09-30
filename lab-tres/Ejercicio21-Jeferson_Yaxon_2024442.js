function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Ejemplo:
console.log(obtenerPares([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
