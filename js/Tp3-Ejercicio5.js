//Definir una función que muestre información sobre una cadena de texto que se
//le pasa como argumento. A partir de la cadena que se le pasa, la función
//determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function Verificar_Cadena(cadena) {
  //Se compara la cadena ingresada con la misma usando el metodo toUpperCasse
  if (cadena === cadena.toUpperCase()) {
    document.writeln(`<p>La cadena esta formada solo por mayusculas<p>`);
    //Se compara la cadena ingresada con la misma usando el metodo toLowerCasse
  } else if (cadena === cadena.toLowerCase()) {
    document.writeln(`<p>La cadena esta formada solo por minusculas</p>`);
  } else {
    //Si no es ninguna de las opciones anteriores es una mezcla de ambas
    document.writeln(`<p>La cadena esta formada por una mezclas de ambas</p>`);
  }
}
//Se solicita la cadena de texto al usuario
const texto = prompt("Ingrese una cadena de texto: ");
Verificar_Cadena(texto); //Se pasa el dato como parametro a la funcion
