//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
//luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//Se declara la funcion y sus parametros
function Calcular_Perimetro(largo, ancho) {
  const Perimetro = 2 * (largo + ancho); //Se aplica la formula matematica
  return Perimetro; //Retornamos el valor
}
//Solicitamos los datos el largo y ancho al usuario
const Largo = parseInt(prompt("Ingrese el largo del rectangulo: "));
const Ancho = parseInt(prompt("Ingrese el ancho del rectangulo: "));
//Creamos una variable para almacenar el valor retornado por la funcion
const Perimetro = Calcular_Perimetro(Largo, Ancho);
alert("El perimetro del rectangulo es: " + Perimetro); //Mostramos el resultado por pantalla
