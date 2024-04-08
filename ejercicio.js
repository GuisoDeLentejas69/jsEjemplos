function ejercicio1() {
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

   for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    
    
   }
}

function ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2];

    if(valores [3].length < valores [4].length) { 
    console.log("Adios es mas grande que hola"); 
    console.log(valores[0]);

}else{ 
    
    console.log("hola es más chico que adios"); 
    console.log(valores[2]);

}

console.log(valores [1]+valores [5]);

console.log(valores[1]-valores [5]);

console.log(valores [1] *valores[5]);

console.log(valores [1]/valores [5]);



}

function ejercicio3() {
    var numero1 = 5;
    var numero2 = 8;
    if(numero1 >= numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if(numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if(numero1 < 0 || numero1 !== 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    if(numero1 + 1 <= numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

function ejercicio4() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        var numeroDNI = prompt("Introduce el número de DNI (sin letra):");
        var letraUsuario = prompt("Introduce la letra de DNI:");

        numeroDNI = parseInt(numeroDNI);

        if (numeroDNI < 0 || numeroDNI > 99999999 || isNaN(numeroDNI)) {
            console.log("El número de DNI proporcionado no es válido.");
        } else {
            var resto = numeroDNI % 23;
            var letraDNI = letras[resto];

            if (letraDNI !== letraUsuario.toUpperCase()) {
                console.log("La letra que has indicado no es correcta.");
            } else {
                console.log("El número y la letra de DNI son correctos.");
            }
        }
}

function ejercicio5() {
     function calcularFactorial(numero) {
        var factorial = 1;

        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }

        return factorial;
    }

    var numeroEntero = prompt("Introduce un número entero para calcular su factorial:");

    numeroEntero = parseInt(numeroEntero);

    if (!isNaN(numeroEntero) && numeroEntero >= 0) {
        var resultadoFactorial = calcularFactorial(numeroEntero);
        console.log("El factorial de " + numeroEntero + " es: " + resultadoFactorial);
    } else {
        console.log("Por favor, introduce un número entero válido.");
    }
}

function ejercicio6() {
    function parOImpar(numero) {
        if (numero % 2 === 0) {
            return "El número " + numero + " es par.";
        } else {
            return "El número " + numero + " es impar.";
        }
    }

    var numeroEntero = prompt("Introduce un número entero:");

    numeroEntero = parseInt(numeroEntero);

    if (!isNaN(numeroEntero)) {
        console.log(parOImpar(numeroEntero));
    } else {
        console.log("Por favor, introduce un número entero válido.");
    }
}

function ejercicio7() {
    function informacionCadena(cadena) {
        if (cadena === cadena.toUpperCase()) {
            return "La cadena está formada solo por mayúsculas.";
        }
        else if (cadena === cadena.toLowerCase()) {
            return "La cadena está formada solo por minúsculas.";
        }
        else {
            return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
        }
    }

    var cadenaTexto = prompt("Introduce una cadena de texto:");

    console.log(informacionCadena(cadenaTexto));
}

function ejercicio8() {
     function esPalindromo(cadena) {
        var cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');
        var cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
        
        if (cadenaSinEspacios === cadenaInvertida) {
            return "La cadena es un palíndromo.";
        } else {
            return "La cadena no es un palíndromo.";
        }
    }

    var cadenaEjemplo = "La ruta nos aporto otro paso natural";

    console.log(esPalindromo(cadenaEjemplo));
}

function ejercicio9() {
    function esPalindromo(cadena) {
        var cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');
        var cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
        
        if (cadenaSinEspacios === cadenaInvertida) {
            return "La cadena es un palíndromo.";
        } else {
            return "La cadena no es un palíndromo.";
        }
    }

    var cadenaEjemplo = "La ruta nos aporto otro paso natural";

    console.log(esPalindromo(cadenaEjemplo));
}

function ejercicio10() {
    function lanzarDados() {
        var dado1 = Math.floor(Math.random() * 6) + 1; 
        var dado2 = Math.floor(Math.random() * 6) + 1; 
        return dado1 + dado2; 
    }

    var resultados = new Array(11).fill(0); 
    for (var i = 0; i < 36000; i++) {
        var suma = lanzarDados();
        resultados[suma]++;
    }

    console.log("Número de apariciones de cada suma:");
    for (var j = 2; j <= 12; j++) {
        console.log("Suma " + j + ": " + resultados[j]);
    }
}

