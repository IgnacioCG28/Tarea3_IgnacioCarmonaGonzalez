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