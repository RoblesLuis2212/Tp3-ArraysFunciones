//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
//función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
//de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
//anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// Creamos el array manualmente para las sumas del 2 al 12 (11 elementos)
const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// índice 0 → suma 2, índice 1 → suma 3, ..., índice 10 → suma 12

// Simulamos 50 lanzamientos
for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;

  // Incrementamos en la posición correspondiente: suma - 2
  apariciones[suma - 2]++;
}

// Mostramos la tabla HTML
document.writeln(`<table border="1" style="text-align:center">`);
document.writeln(`<tr><th>Suma 🎲🎲</th><th>Apariciones</th></tr>`);

for (let i = 0; i < apariciones.length; i++) {
  document.writeln(`<tr><td>${i + 2}</td><td>${apariciones[i]}</td></tr>`);
}

document.writeln(`</table>`);
