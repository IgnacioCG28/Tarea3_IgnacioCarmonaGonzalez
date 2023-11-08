import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";

document.addEventListener("DOMContentLoaded", () => {
  /*const nombre = askNombre();
  const apellidos = askApellidos();
  const fecha = askFecha();*/

  const nombre = "Nacho";
  const apellidos = "Carmona Gonzalez"
  const fecha = "30/07/2000"


  printSaludo(nombre, apellidos, fecha);
});
