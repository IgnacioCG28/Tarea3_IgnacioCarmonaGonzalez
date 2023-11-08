import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";


document.write("<h1>Práctica 3 - Dwec</h1>")
document.addEventListener("DOMContentLoaded", () => {
    const nombre = askNombre(); // Captura el valor retornado
    const apellidos = askApellidos();
    const fecha = askFecha();
    printSaludo(nombre,apellidos,fecha);
  });

