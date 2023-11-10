export function tiempo(fecha) {
  let tiempo = fecha;

  let [day, month, year] = tiempo.split("/");
  let fechaA = new Date();

  tiempo = fechaA.getFullYear() - year;

  if (month >= fechaA.getMonth()) {
    if (day > fechaA.getDate()) {
      tiempo -= 1;
    }
  }
  return tiempo;
}
export function estaciones(fecha) {
  let tiempo = fecha;
  let estacion;
  let [day, month, year] = tiempo.split("/");

  if (month === "12" || month === "01" || month === "02") {
    estacion = "Invierno";
  } else if (month === "03" || month === "04" || month === "05") {
    estacion = "Primavera";
  } else if (month === "06" || month === "07" || month === "08") {
    estacion = "Verano";
  } else if (month === "09" || month === "10" || month === "11") {
    estacion = "Otoño";
  } else {
    estacion = "Mes no válido"; // Manejar el caso de un mes no válido (imposible?)
  }

  
  return [estacion, year];
}
