// Escribir el código de una función a la que se pasa como parámetro un número
//entero y devuelve como resultado una cadena de texto que indica si el número es
//par o impar. Mostrar por pantalla el resultado devuelto por la función.

//Se crea la funcion que contiene un numero como parametro
function Par_Impar(numero) {
  //Verificamos si el numero es entero
  if (numero % 1 != 0) {
    alert("Por favor ingrese un numero entero");
    //Si lo es, verificamos si es par o impar
  } else if (numero % 2 == 0) {
    alert("El numero ingresado es par");
  } else {
    alert("El numero ingresado es impar");
  }
}
//Solicitamos al usuario un numero
const Numero = parseFloat(prompt("Ingrese un numero: "));

//Llamamos a la funcion y pasamos como parametro el numero ingresado
Par_Impar(Numero);
