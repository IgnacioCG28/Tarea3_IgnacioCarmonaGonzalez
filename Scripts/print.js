const texto = document.getElementById("printTexto");
export function printSaludo(nombre, apellidos, fecha) {

    let nombreCompleto = nombre + " " + apellidos;

    texto.innerHTML = `Buenos días, <strong>${nombre}</strong>
    <br>
     Tu nombre completo (${nombreCompleto}) tiene <strong>${nombreCompleto.length}</strong> caracteres, incluidos espacios.
     <br>
     La <strong>primera letra "A"</strong> de tu nombre está en la posición <strong>${nombreCompleto.toLowerCase().indexOf('a') + 1}</strong>
     <br>
    La <strong>última letra "A"</strong> de tu nombre está en la posición <strong>${nombreCompleto.toLowerCase().lastIndexOf('a') + 1}</strong>
    <br>
    Tu nombre <strong>menos las tres primeras letras</strong> es <strong>${nombreCompleto.slice(3)}</strong>
    <br>
    Tu nombre todo en <strong>MAYÚSCULAS</strong> es <strong>${nombreCompleto.toUpperCase()}</strong>
     `
}