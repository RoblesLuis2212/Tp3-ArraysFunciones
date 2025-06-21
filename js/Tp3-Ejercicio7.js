//Escriba un script que muestre la tabla de multiplicar de un número ingresado
//por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
//solo los resultados del 1 al 10 del número elegido por el usuario.

//Se crea la funcion para calcular la tabla de multiplicar de un numero dado
function tablaMultiplicar(numero) {
  document.writeln(`<h2 class="ms-2">Tabla de Multiplicar</h2>`);
  document.writeln(`<ul>`); //Mostraremos los resultados en una lista
  //Este bucle mostrara la tabla del 1 al 10
  for (let i = 1; i <= 10; i++) {
    const Resultado = numero * i;
    //Se muestra el resultado
    document.writeln(`<li>${numero} X ${i} = ${Resultado}</li>`);
  }
  document.writeln(`</ul>`);
}
//Solicitamos al usuario el numero
const Num = parseInt(
  prompt("Ingrese un numero para obtener su tabla de multiplicar: ")
);
//Invocamos a la funcion
tablaMultiplicar(Num);
