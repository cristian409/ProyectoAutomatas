function Busqueda() {
    let palabrasClave = [
        "lista",
        "materia",
        "saldo", "solicitud", "subsidio"

    ];

    let cadena = document.getElementById('search').value;
    let estadoActual = 'q0'

    while (estadoActual != 'z') {
        let pos = 0;

        if (cadena[pos] == 's' && estadoActual == 'q0') {
            estadoActual = 'r44';
            pos++
            //saldo
            if (cadena[pos] == 'a' && estadoActual == 'r44') {
                pos++
                estadoActual = 'r45';
                if (cadena[pos] == 'l' && estadoActual == 'r45') {
                    pos++
                    estadoActual = 'r46';
                    if (cadena[pos] == 'd' && estadoActual == 'r46') {
                        pos++
                        estadoActual = 'r47';
                        if (cadena[pos] == 'o' && estadoActual == 'r47') {
                            estadoActual = 'z';
                            palabrasClave.forEach(palabra => {
                                if (palabra == cadena) {
                                    document.getElementById("content").innerHTML = `
                                        <a href="/views/consultaSaldoCuenta.html">
                                            <h6> Consultar Saldo de Cuenta </h6>
                                            <p class="grey-text text-darken-2"> Consultar el saldo total adeudado de la cuenta. </p>    
                                        </a>                                        
                                    `;
                                }
                            });
                            break;
                        }
                    }
                }
            }

            //solicitud
            if (cadena[pos] == 'o' && estadoActual == 'r44') {
                pos++
                estadoActual = 'r49';
                if (cadena[pos] == 'l' && estadoActual == 'r49') {
                    pos++
                    estadoActual = 'r50';
                    if (cadena[pos] == 'i' && estadoActual == 'r50') {
                        pos++
                        estadoActual = 'r51';
                        if (cadena[pos] == 'c' && estadoActual == 'r51') {
                            pos++
                            estadoActual = 'r52';
                            if (cadena[pos] == 'i' && estadoActual == 'r52') {
                                pos++
                                estadoActual = 'r53';
                                if (cadena[pos] == 't' && estadoActual == 'r53') {
                                    pos++
                                    estadoActual = 'r54';
                                    if (cadena[pos] == 'u' && estadoActual == 'r54') {
                                        pos++
                                        estadoActual = 'r55';
                                        if (cadena[pos] == 'd' && estadoActual == 'r55') {
                                            estadoActual = 'z';
                                            palabrasClave.forEach(palabra => {
                                                if (palabra == cadena) {
                                                    console.log(`Generar Tramite de Certificados,                                                                                   
                                                                Consultar Estado de Tramites de Certificados,  
                                                                Carnet, Diploma y Grado`)
                                                }
                                            });
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //subsidio
            if (cadena[pos] == 'u' && estadoActual == 'r44') {
                pos++
                estadoActual = 'r57';
                if (cadena[pos] == 'b' && estadoActual == 'r57') {
                    pos++
                    estadoActual = 'r58';
                    if (cadena[pos] == 's' && estadoActual == 'r58') {
                        pos++
                        estadoActual = 'r59';
                        if (cadena[pos] == 'i' && estadoActual == 'r59') {
                            pos++
                            estadoActual = 'r60';
                            if (cadena[pos] == 'd' && estadoActual == 'r60') {
                                pos++
                                estadoActual = 'r61';
                                if (cadena[pos] == 'i' && estadoActual == 'r61') {
                                    pos++
                                    estadoActual = 'r62';
                                    if (cadena[pos] == 'o' && estadoActual == 'r62') {
                                        estadoActual = 'z';
                                        palabrasClave.forEach(palabra => {
                                            if (palabra == cadena) {
                                                console.log(`Inscripción de Becas de Compesación y Subsidio de Alimentación,
                                                              Consultar formulario de  Becas de Compesación y Subsidio de Alimentación`)
                                            }
                                        });
                                        break;
                                    }

                                }
                            }
                        }
                    }
                }
            }

        }
        break;
    }

}
