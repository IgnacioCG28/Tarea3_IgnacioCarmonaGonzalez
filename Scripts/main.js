import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";
import { openNewWindow } from "./window.js";
import { reset } from "./resetButton.js";

document.addEventListener("DOMContentLoaded", () => {
  /*const nombre = askNombre();
  const apellidos = askApellidos();
  const fecha = askFecha();*/

  const nombre = "Nacho";
  const apellidos = "Carmona González";
  const fecha = "11/06/2000";


  printSaludo(nombre, apellidos, fecha);

  openNewWindow();

  reset();
});
