//Crear un array llamado meses y que almacene el nombre de los doce meses del
//año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.writeln(`<h2 class="ms-4">Lista de meses</h2>`);
document.writeln(`<ul class="ms-3">`);
for (let i = 0; i < Meses.length; i++) {
  document.writeln(`<li><strong>${Meses[i]}</strong></li>`);
}
document.writeln(`</ul>`);
