function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log(verificarNumero(5));   
console.log(verificarNumero(-3));  
console.log(verificarNumero(0));   

