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

        // Solicitar al usuario el número de DNI y la letra
        var numeroDNI = prompt("Introduce el número de DNI (sin letra):");
        var letraUsuario = prompt("Introduce la letra de DNI:");

        // Convertir el número de DNI a entero
        numeroDNI = parseInt(numeroDNI);

        // Comprobar validez del número de DNI
        if (numeroDNI < 0 || numeroDNI > 99999999 || isNaN(numeroDNI)) {
            console.log("El número de DNI proporcionado no es válido.");
        } else {
            // Calcular la letra del DNI
            var resto = numeroDNI % 23;
            var letraDNI = letras[resto];

            // Comparar la letra del usuario con la letra calculada
            if (letraDNI !== letraUsuario.toUpperCase()) {
                console.log("La letra que has indicado no es correcta.");
            } else {
                console.log("El número y la letra de DNI son correctos.");
            }
        }
}

function ejercicio5() {
     // Función para calcular el factorial de un número
     function calcularFactorial(numero) {
        // Inicializamos el factorial como 1
        var factorial = 1;

        // Calculamos el factorial utilizando un bucle for
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }

        // Retornamos el resultado del factorial
        return factorial;
    }

    // Solicitar al usuario el número entero
    var numeroEntero = prompt("Introduce un número entero para calcular su factorial:");

    // Convertir la entrada del usuario a entero
    numeroEntero = parseInt(numeroEntero);

    // Verificar si la entrada es un número entero válido
    if (!isNaN(numeroEntero) && numeroEntero >= 0) {
        // Calcular el factorial
        var resultadoFactorial = calcularFactorial(numeroEntero);
        console.log("El factorial de " + numeroEntero + " es: " + resultadoFactorial);
    } else {
        console.log("Por favor, introduce un número entero válido.");
    }
}

function ejercicio6() {
    // Definir la función para determinar si un número es par o impar
    function parOImpar(numero) {
        if (numero % 2 === 0) {
            return "El número " + numero + " es par.";
        } else {
            return "El número " + numero + " es impar.";
        }
    }

    // Solicitar al usuario un número entero
    var numeroEntero = prompt("Introduce un número entero:");

    // Convertir la entrada del usuario a entero
    numeroEntero = parseInt(numeroEntero);

    // Verificar si la entrada es un número entero válido
    if (!isNaN(numeroEntero)) {
        // Llamar a la función parOImpar y mostrar el resultado en la consola del navegador
        console.log(parOImpar(numeroEntero));
    } else {
        console.log("Por favor, introduce un número entero válido.");
    }
}

function ejercicio7() {
    // Definir la función para mostrar información sobre una cadena de texto
    function informacionCadena(cadena) {
        // Verificar si la cadena está formada solo por mayúsculas
        if (cadena === cadena.toUpperCase()) {
            return "La cadena está formada solo por mayúsculas.";
        }
        // Verificar si la cadena está formada solo por minúsculas
        else if (cadena === cadena.toLowerCase()) {
            return "La cadena está formada solo por minúsculas.";
        }
        // Si no es solo mayúsculas ni solo minúsculas, entonces es una mezcla de ambas
        else {
            return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
        }
    }

    // Solicitar al usuario una cadena de texto
    var cadenaTexto = prompt("Introduce una cadena de texto:");

    // Llamar a la función informacionCadena y mostrar el resultado en la consola del navegador
    console.log(informacionCadena(cadenaTexto));
}

function ejercicio8() {
     // Definir la función para determinar si una cadena es un palíndromo
     function esPalindromo(cadena) {
        // Eliminar los espacios en blanco y convertir la cadena a minúsculas
        var cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');
        // Invertir la cadena
        var cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
        
        // Verificar si la cadena invertida es igual a la cadena original
        if (cadenaSinEspacios === cadenaInvertida) {
            return "La cadena es un palíndromo.";
        } else {
            return "La cadena no es un palíndromo.";
        }
    }

    // Cadena de ejemplo
    var cadenaEjemplo = "La ruta nos aporto otro paso natural";

    // Llamar a la función esPalindromo con la cadena de ejemplo y mostrar el resultado en la consola del navegador
    console.log(esPalindromo(cadenaEjemplo));
}

function ejercicio9() {
    // Definir la función para determinar si una cadena es un palíndromo
    function esPalindromo(cadena) {
        // Eliminar los espacios en blanco y convertir la cadena a minúsculas
        var cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');
        // Invertir la cadena
        var cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
        
        // Verificar si la cadena invertida es igual a la cadena original
        if (cadenaSinEspacios === cadenaInvertida) {
            return "La cadena es un palíndromo.";
        } else {
            return "La cadena no es un palíndromo.";
        }
    }

    // Cadena de ejemplo
    var cadenaEjemplo = "La ruta nos aporto otro paso natural";

    // Llamar a la función esPalindromo con la cadena de ejemplo y mostrar el resultado en la consola del navegador
    console.log(esPalindromo(cadenaEjemplo));
}

function ejercicio10() {
    // Función para simular el lanzamiento de dos dados y obtener la suma
    function lanzarDados() {
        var dado1 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6 para el primer dado
        var dado2 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6 para el segundo dado
        return dado1 + dado2; // Sumar los resultados de los dos dados
    }

    // Array para almacenar el número de apariciones de cada suma
    var resultados = new Array(11).fill(0); // El índice 0 no se utiliza, por lo que empezamos desde el índice 1

    // Realizar 36,000 lanzamientos de dos dados y registrar los resultados
    for (var i = 0; i < 36000; i++) {
        var suma = lanzarDados();
        resultados[suma]++;
    }

    // Mostrar los resultados en la consola del navegador
    console.log("Número de apariciones de cada suma:");
    for (var j = 2; j <= 12; j++) {
        console.log("Suma " + j + ": " + resultados[j]);
    }
}

