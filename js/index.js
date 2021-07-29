function Busqueda() {

    let palabrasClave =[
        "lista",
        "materia"
    ];

    let cadena = document.getElementById('search').value;
    let tamaño = cadena.length;
    for (let indice in palabrasClave) {
        let nombre = palabrasClave[indice];
        let str = nombre.substring(0, tamaño);
        if (cadena.length <= nombre.length && cadena.length != 0 && nombre.length !=0) {
            
        }
    }

}