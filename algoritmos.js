function saludar(){
    console.log("hola mundo")
    alert("hello word in javascript")
}

// ALGORITMO QUE REALIZA UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO
function suma(){
    // 1. declarar variables necesarias para la funcion o algoritmo
    let A = 0;
    let B = 0;
    let SUMA = 0;

    // 2.Solicitar al usuario que ingrese los valores
    // y estos se asignan a las variables

    A = parseInt(prompt("ingrese el primer Valor"))
    B = parseInt(prompt("Ingrese el segundo Valor"))

    // 3. Realizar el procedimiento

    SUMA = A + B;

    // 4. Mostrar el Resultado
    alert("esta es tu suma " + SUMA)

    

}


// ALGORITMO QUE REALIZA UNA SUMA RESTA MULTIPLICACION Y DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO

const operaciones = () => {
    let a;
    let b;
    // let opcion;
    
    let suma;
    let resta;
    let multiplicacion;
    let division;

    a = parseInt(prompt("ingrese el primer valor."));
    b = parseInt( prompt("ingrese el segundo valor."));
    // opcion = prompt("ingrese la operacion.");

    // if (opcion === "suma") {
    //     resultado = a + b;
    // } else if (opcion === "resta") {
    //     resultado = resta;
    // } else if(opcion === "multiplicacion") {
    //     resultado = a * b;
    // } else if(opcion === "division") {
    //     resultado = a / b;
    // } else {
    //     resultado = "ERROR"
    // }

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert(`El resultado es para los numeros ${a} y ${b} es: ${suma}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${resta}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${multiplicacion}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${division}`)
    
}


// 3. Realizar un algoritmo que destermine el cuadrado de un numero ingresado por el  usario
const cuadrado = () => {
    let num = parseInt(prompt("Escribe tunumero:"));
    let resultado  = num ** 2;

    alert(`El resultado el cuadaro de tu numero es ${resultado}`)
}

// 4. Realizar un algoritmo, que determine le area de un triangulo a partir de la base y altura ingresadas por el usario

function areaTriangulo() {
    let base = parseInt(prompt("Ingresa la base de tu triangulo:"));
    let altura = parseInt(prompt("Ingresa la altura de tu triangulo:"));

    let resultado = (base * altura ) / 2;

    console.log(`EL area el triangulo con  base: ${base} y altura: ${altura} = ${resultado}`);
    alert(`EL area el triangulo con  base: ${base} y altura: ${altura} = ${resultado}`);
    

}


// 5.Realizar un Algoritmo, que determine los km, pulgadas y metros de un valor dado en cm

const conversionUnidades = () => {

    let cmUser = parseInt(prompt("Ingresa la medida en numeros:"));

    let cmToMt = cmUser / 100;
    let cmToKm = cmUser * 0.00001;
    let cmToPg = cmUser / 100000;

    alert(`${cmUser}Cm = ${cmToMt}Mt`)
    alert(`${cmUser}Cm = ${cmToKm}Km`)
    alert(`${cmUser}Cm = ${cmToPg}Pg`)

}

// 6. Realizar un algoritmo que determine el numero mayor de dos numeros ingresados por el usario

function mayorDos() {
    let  num1 =  parseInt(prompt("Escribe primer numero:"));
    let  num2 =  parseInt(prompt("Escribe segundo numero:"));

    if (num1 > num2) {
        console.log(`EL numero ${num1} es mayor a el numero ${num2}`)
        alert(`EL numero ${num1} es mayor a el numero ${num2}`)
    } else if (num2 > num1) {
        console.log(`EL numero ${num2} es mayor a el numero ${num1}`)
        alert(`EL numero ${num2} es mayor a el numero ${num1}`)
    } else {
        alert("Los numeros son iguales.")
    }
}


// 7. Realizar un algoritmo que determine el numero menor de tres numeros ingresados por el usario

function menorTres() {
    let num1 = parseInt(prompt("Ingresa el primer numero:"));
    let num2 = parseInt(prompt("Ingresa el segundo numero:"));
    let num3 = parseInt(prompt("Ingresa el tercero numero:"));

    if (num1 > num2 && num1 > num3) {
        console.log(`EL numero ${num1} es mayor a el numero ${num2} y al numero ${num3}`)
        alert(`EL numero ${num1} es mayor a el numero ${num2} y al numero ${num3}`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`EL numero ${num2} es mayor a el numero ${num1} y al numero ${num3}`)
        alert(`EL numero ${num2} es mayor a el numero ${num1} y al numero ${num3}`)
    } else if (num3 > num1 && num3 > num2) {
        console.log(`EL numero ${num3} es mayor a el numero ${num1} y al numero ${num2}`)
        alert(`EL numero ${num3} es mayor a el numero ${num1} y al numero ${num2}`)
    }  else {
        alert("Los numeros son iguales.")
    }

}


// 8. Realizar un algoritmo, que solicite al estudiante, su nombre, la meteria y 8 calificaciones de la misma entre 1 y 10, dreerminar con esta informacion si el estudiante aptobo o reprobo, teniendo en cuenta que si aprueba cpn 6.2 en adelante


function promedio() {
    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let materia = prompt("Ingrese la materia: ");

    let notas = [];
    

    for (let i = 1; i <= 8; i++) {
        let nota = parseFloat(prompt(`Nota#${i}: Ingrese una calificacion entre 1 -10: `));
        notas.push(nota)
    }

    let sumaNotas = 0;

    notas.forEach(element => {
        sumaNotas+=element; 
    });
    
    let promedio = sumaNotas / notas.length;

    console.log(notas.length);
    

    if (promedio >= 6.2) {
        alert(`Estudiante ${nombre} su promedio de ${materia} es: ${promedio} APROBO!!🥳🥳🥳`)
    } else {
        alert(`Estudiante ${nombre} su promedio de ${materia} es: ${promedio} REPROBO... 😢😢😢`)
    }



}

// 9. determinar si un numero ingresado por el usuario el par o impar.


function parOImpar() {

    let numero = parseInt(prompt("Ingrese un numero cualquiera: "));

    if(numero % 2 == 0) {
        console.log(`${numero} -> Es par`);
        alert(`${numero} -> Es par`);
    } else {
        alert(`${numero} -> Es impar`);
    }

}

// 10. Un individuo desea invertir su capital en un banco, y requiere saber cuanto dinero ganara despues de n numero de años, teniendo en cuenta que le banco paga un interes mensual del 0.7%$


 const inversion = () => {

    let capital = parseInt(prompt("Ingrese el capital a invetir: "));
    let numeroAnios = parseInt(prompt("Ingrese los años que durara su inversion: "))

    let interes = 0.7;
    let meses = numeroAnios * 12;
    console.log(meses);
    
    let montofinal = capital * Math.pow(interes, meses)

    alert(montofinal)

 }


// 11. Realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numeros que hay etre ellos

function numRango() {
    let inRang = parseInt(prompt("Desde que numero deseas inicar?: "))
    let finRang = parseInt(prompt("En que numero deseas finalizar?: "))

    for (let i = inRang; i <= finRang; i++) {
        alert(`Numero: ${i}`)
    }
}


// Calcular la edad de una persona a partir dela año de nacimiento;

function descAnio() {
    let nombre = prompt("Ingresa tu nombre: ");
    let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento: "));
    let date = new Date()
    let anioActual = date.getFullYear()

    let edad = anioActual - anioNacimiento;

    alert(`${nombre} tu edad es: ${edad} años`)
    
}



// algoritmo que determine los milimetros, centimetros,
//  metros y kilometros de un valor dado en pulgadas



// algoritmo que termine si un numero ingresado por el usuario es par o impar.

function parOImpar() {

    let numero = parseInt(prompt("Ingrese un numero cualquiera: "));

    if(numero % 2 == 0) {
        console.log(`${numero} -> Es par`);
        alert(`${numero} -> Es par`);
    } else {
        alert(`${numero} -> Es impar`);
    }

}


// algoritmo que termine el mayor de dos numeros ingresados por el usuario.

// algoritmo que determine el menor de tres numeros ingresados por el usuario.

// el colegio abc derequiere un sisteme que capture el nombre de un estudiante,
// materia y siete calificaciones entre uno y 10, con esta informacion determinar si el estudiante
// aprobo o reprobo, teniendo en cuenta que se aprueba con 6.1

// un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganará despues de n numero de años
// teniendo en cuenta que el banco paga un interés mensual del o,7% 
