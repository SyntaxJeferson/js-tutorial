/**
 * 
 * 
 * 
 *         ESTRUCTURA SWITCH
 */

let comprar = "Uvas";

switch (comprar) {
    case "Naranjas":
        console.log("Las naranjas estan a Q10 la mano");
        break;

    case "Manzanas":
        console.log("Las Manzanas estan a Q5 la unidad");
        break;

    case "Platanos":
        console.log("Las naranjas estan a Q15 la docena");

    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas valen Q10 cada uno");
        break;

    default:
        console.log(`Lo sentimos, no contamos con ${comprar}`)
        break;
}