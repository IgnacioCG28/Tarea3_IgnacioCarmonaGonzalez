import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombre = askNombre();
  const apellidos = askApellidos();
  const fecha = askFecha();


  printSaludo(nombre, apellidos, fecha);
});
