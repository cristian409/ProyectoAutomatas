function Busqueda() {
    let palabrasClave = [
        "lista",
        "materia",
        "historial", "horario", "generar", "grado",
        "tramite", "recibo", "diploma", "impresion", "inscripcion",
        "pago", "perfil", "plan", "planificador", "progreso",
        "saldo", "solicitud", "subsidio"
    ];

    let cadena = document.getElementById('search').value;
    let estadoActual = 'q0'

    while (estadoActual != 'z') {
        let pos = 0;

        //s
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
                                    document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Consultar Saldo de Cuenta </h6>
                                                <p class="grey-text text-darken-2"> Consultar el saldo total adeudado de la cuenta. </p>    
                                            </a>
                                        </div>                                                                      
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
                                                    document.getElementById("estados").innerHTML = `
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Generar Tramite de Certificados </h6>
                                                                <p class="grey-text text-darken-2"> Realizar solicitudes de tramites de certificados </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Consultar Estado de Tramites de Certificados </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el estado actual de las solicitudes de tramites de certificados. </p>    
                                                            </a>
                                                        </div>  
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Carnet, Diploma y Grado </h6>
                                                                <p class="grey-text text-darken-2"> Generar los procesos necesarios realizar la ceremonia de grado. </p>    
                                                            </a>
                                                        </div>                                                                    
                                                    `;
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
                                                document.getElementById("estados").innerHTML = `
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Inscripción de Becas de Compesación y Subsidio de Alimentación </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el progreso de unidades finalizadas de la carrera. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6>  Consultar formulario de  Becas de Compesación y Subsidio de Alimentación </h6>
                                                                <p class="grey-text text-darken-2"> Consulta de la solicitud para la convocatoria de promoción socioeconómica. </p>    
                                                            </a>
                                                        </div>                                                                      
                                                    `;
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

        //p
        if (cadena[pos] == 'p' && estadoActual == 'q0') {
            estadoActual = 'r17';
            pos++
            //pago
            if (cadena[pos] == 'a' && estadoActual == 'r17') {
                estadoActual = 'r18';
                pos++
                if (cadena[pos] == 'g' && estadoActual == 'r18') {
                    estadoActual = 'r19';
                    pos++
                    if (cadena[pos] == 'o' && estadoActual == 'r19') {
                        estadoActual = 'z';
                        palabrasClave.forEach(palabra => {
                            if (palabra == cadena) {
                                document.getElementById("estados").innerHTML = `
                                    <div class="content">
                                        <a href="/views/consultaSaldoCuenta.html">
                                            <h6> Generar Recibo de Pago </h6>
                                            <p class="grey-text text-darken-2"> Generar los archivos pdf o realizar el pago en línea de los recibos de pagos </p>    
                                        </a>
                                    </div>
                                    <div class="content">
                                        <a href="/views/consultaSaldoCuenta.html">
                                            <h6>  Consultar Historial de Pagos </h6>
                                            <p class="grey-text text-darken-2"> Consultar el estado actual de las solicitudes de tramites de certificados. </p>    
                                        </a>
                                    </div>                                                                      
                                `;
                            }
                        });
                        break;
                    }
                }
            }
            //perfil
            if (cadena[pos] == 'e' && estadoActual == 'r17') {
                estadoActual = 'r21';
                pos++
                if (cadena[pos] == 'r' && estadoActual == 'r21') {
                    estadoActual = 'r22';
                    pos++
                    if (cadena[pos] == 'f' && estadoActual == 'r22') {
                        estadoActual = 'r23';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'r23') {
                            estadoActual = 'r24';
                            pos++
                            if (cadena[pos] == 'l' && estadoActual == 'r24') {
                                estadoActual = 'z';
                                palabrasClave.forEach(palabra => {
                                    if (palabra == cadena) {
                                        document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Consulta de Perfil </h6>
                                                <p class="grey-text text-darken-2"> Consultar el perfil del usuario </p>    
                                            </a>
                                        </div>                                                                   
                                    `;
                                    }
                                });
                                break;
                            }
                        }
                    }
                }
            }
            //plan
            if (cadena[pos] == 'l' && estadoActual == 'r17') {
                estadoActual = 'r26';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'r26') {
                    estadoActual = 'r27';
                    pos++
                    if (cadena[pos] == 'n' && estadoActual == 'r27') {
                        //planificador
                        estadoActual = 'r28';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'r28') {
                            estadoActual = 'r29';
                            pos++
                            if (cadena[pos] == 'f' && estadoActual == 'r29') {
                                estadoActual = 'r30';
                                pos++
                                if (cadena[pos] == 'i' && estadoActual == 'r30') {
                                    estadoActual = 'r31';
                                    pos++
                                    if (cadena[pos] == 'c' && estadoActual == 'r31') {
                                        estadoActual = 'r32';
                                        pos++
                                        if (cadena[pos] == 'a' && estadoActual == 'r32') {
                                            estadoActual = 'r33';
                                            pos++
                                            if (cadena[pos] == 'd' && estadoActual == 'r33') {
                                                estadoActual = 'r34';
                                                pos++
                                                if (cadena[pos] == 'o' && estadoActual == 'r34') {
                                                    estadoActual = 'r35';
                                                    pos++
                                                    if (cadena[pos] == 'r' && estadoActual == 'r35') {
                                                        estadoActual = 'z';
                                                        palabrasClave.forEach(palabra => {
                                                            if (palabra == cadena) {
                                                                document.getElementById("estados").innerHTML = `
                                                                    <div class="content">
                                                                        <a href="/views/consultaSaldoCuenta.html">
                                                                            <h6> Planificador </h6>
                                                                            <p class="grey-text text-darken-2"> Guardar una selección de materias previamente a la inscripción de materias en el ciclo. </p>    
                                                                        </a>
                                                                    </div>                                                                   
                                                                `;
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
                        } else {
                            estadoActual = 'z';
                            palabrasClave.forEach(palabra => {
                                if (palabra == cadena) {
                                    document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Mi Plan Academico </h6>
                                                <p class="grey-text text-darken-2"> Observar el listado de las asignaturas del programa </p>    
                                            </a>
                                        </div>                                                                   
                                    `;
                                }
                            });
                            break;
                        }
                    }
                }
            }
            //progreso
            if (cadena[pos] == 'r' && estadoActual == 'r17') {
                estadoActual = 'r37';
                pos++
                if (cadena[pos] == 'o' && estadoActual == 'r37') {
                    estadoActual = 'r38';
                    pos++
                    if (cadena[pos] == 'g' && estadoActual == 'r38') {
                        estadoActual = 'r39';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'r39') {
                            estadoActual = 'r40';
                            pos++
                            if (cadena[pos] == 'e' && estadoActual == 'r40') {
                                estadoActual = 'r41';
                                pos++
                                if (cadena[pos] == 's' && estadoActual == 'r41') {
                                    estadoActual = 'r42';
                                    pos++
                                    if (cadena[pos] == 'o' && estadoActual == 'r42') {
                                        estadoActual = 'z';
                                        palabrasClave.forEach(palabra => {
                                            if (palabra == cadena) {
                                                document.getElementById("estados").innerHTML = `
                                                    <div class="content">
                                                        <a href="/views/consultaSaldoCuenta.html">
                                                            <h6> Progreso Academico </h6>
                                                            <p class="grey-text text-darken-2"> Consultar el progreso de unidades finalizadas de la carrera. </p>    
                                                        </a>
                                                    </div>                                                                   
                                                `;
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

        //Tramite
        if (cadena[pos] == 't' && estadoActual == 'q0') {
            estadoActual = 'r10';
            pos++
            if (cadena[pos] == 'r' && estadoActual == 'r10') {
                estadoActual = 'r11';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'r11') {
                    estadoActual = 'r12';
                    pos++
                    if (cadena[pos] == 'm' && estadoActual == 'r12') {
                        estadoActual = 'r13';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'r13') {
                            estadoActual = 'r14';
                            pos++
                            if (cadena[pos] == 't' && estadoActual == 'r14') {
                                estadoActual = 'r15';
                                pos++
                                if (cadena[pos] == 'e' && estadoActual == 'r15') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Generar Tramite de Certificados </h6>
                                                        <p class="grey-text text-darken-2"> Realizar solicitudes de tramites de certificados </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Consultar Estado de Tramites de Certificados </h6>
                                                        <p class="grey-text text-darken-2"> Consultar el estado actual de las solicitudes de tramites de certificados. </p>    
                                                    </a>
                                                </div>  
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Carnet, Diploma y Grado </h6>
                                                        <p class="grey-text text-darken-2"> Generar los procesos necesarios realizar la ceremonia de grado. </p>    
                                                    </a>
                                                </div>                                                                     
                                            `;
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

        //Recibo
        if (cadena[pos] == 'r' && estadoActual == 'q0') {
            estadoActual = 'r4';
            pos++
            if (cadena[pos] == 'e' && estadoActual == 'r4') {
                estadoActual = 'r5';
                pos++
                if (cadena[pos] == 'c' && estadoActual == 'r5') {
                    estadoActual = 'r6';
                    pos++
                    if (cadena[pos] == 'i' && estadoActual == 'r6') {
                        estadoActual = 'r7';
                        pos++
                        if (cadena[pos] == 'b' && estadoActual == 'r7') {
                            estadoActual = 'r8';
                            pos++
                            if (cadena[pos] == 'o' && estadoActual == 'r8') {
                                estadoActual = 'z';
                                palabrasClave.forEach(palabra => {
                                    if (palabra == cadena) {
                                        document.getElementById("estados").innerHTML = `
                                            <div class="content">
                                                <a href="/views/consultaSaldoCuenta.html">
                                                    <h6> Generar Recibo de Pago </h6>
                                                    <p class="grey-text text-darken-2"> Generar los archivos pdf o realizar el pago en línea de los recibos de pagos </p>    
                                                </a>
                                            </div>                                                                    
                                        `;
                                    }
                                });
                                break;
                            }
                        }
                    }
                }
            }
        }

        //Lista
        if (cadena[pos] == 'l' && estadoActual == 'q0') {
            estadoActual = 'p91';
            pos++
            if (cadena[pos] == 'i' && estadoActual == 'p91') {
                estadoActual = 'p92';
                pos++
                if (cadena[pos] == 's' && estadoActual == 'p92') {
                    estadoActual = 'p93';
                    pos++
                    if (cadena[pos] == 't' && estadoActual == 'p93') {
                        estadoActual = 'p94';
                        pos++
                        if (cadena[pos] == 'a' && estadoActual == 'p94') {
                            estadoActual = 'z';
                            palabrasClave.forEach(palabra => {
                                if (palabra == cadena) {
                                    document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Lista de Clases </h6>
                                                <p class="grey-text text-darken-2"> Consulta las clases inscritas para el ciclo actual. </p>    
                                            </a>
                                        </div>
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Mi plan Academico </h6>
                                                <p class="grey-text text-darken-2"> Observar el listado de las asignaturas del programa </p>    
                                            </a>
                                        </div>                                                                 
                                    `;
                                }
                            });
                            break;
                        }
                    }
                }
            }
        }

        //Materia
        if (cadena[pos] == 'm' && estadoActual == 'q0') {
            estadoActual = 'p96';
            pos++
            if (cadena[pos] == 'a' && estadoActual == 'p96') {
                estadoActual = 'p97';
                pos++
                if (cadena[pos] == 't' && estadoActual == 'p97') {
                    estadoActual = 'p98';
                    pos++
                    if (cadena[pos] == 'e' && estadoActual == 'p98') {
                        estadoActual = 'p99';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'p99') {
                            estadoActual = 'r1';
                            pos++
                            if (cadena[pos] == 'i' && estadoActual == 'r1') {
                                estadoActual = 'r2';
                                pos++
                                if (cadena[pos] == 'a' && estadoActual == 'r2') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Citas de Inscripcion  </h6>
                                                        <p class="grey-text text-darken-2"> Consulta de la cita otorgada para la inscripción de materias del semestre. </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Inscripcion de Asignaturas </h6>
                                                        <p class="grey-text text-darken-2"> Generar la inscripción de las materias o asignaturas del semestre. </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Inscripción de clase – Número de Curso </h6>
                                                        <p class="grey-text text-darken-2"> Inscripción de materias según el numero de la asignatura.</p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Inscripción de clase – Búsqueda de clase </h6>
                                                        <p class="grey-text text-darken-2"> Búsqueda de la asignatura para la inscripción o la inserción en el planificador. </p>    
                                                    </a>
                                                </div>                                                              
                                            `;
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

        //diploma
        if (cadena[pos] == 'd' && estadoActual == 'q0') {
            estadoActual = 'p38';
            pos++
            if (cadena[pos] == 'i' && estadoActual == 'p38') {
                estadoActual = 'p39';
                pos++
                if (cadena[pos] == 'p' && estadoActual == 'p39') {
                    estadoActual = 'p40';
                    pos++
                    if (cadena[pos] == 'l' && estadoActual == 'p40') {
                        estadoActual = 'p41';
                        pos++
                        if (cadena[pos] == 'o' && estadoActual == 'p41') {
                            estadoActual = 'p42';
                            pos++
                            if (cadena[pos] == 'm' && estadoActual == 'p42') {
                                estadoActual = 'p43';
                                pos++
                                if (cadena[pos] == 'a' && estadoActual == 'p43') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Carnet, Diploma y Grado </h6>
                                                        <p class="grey-text text-darken-2"> Generar los procesos necesarios realizar la ceremonia de grado. </p>    
                                                    </a>
                                                </div>
                                            `;
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

        //i
        if (cadena[pos] == 'i' && estadoActual == 'q0') {
            estadoActual = 'p72';
            pos++

            //Impresion
            if (cadena[pos] == 'm' && estadoActual == 'p72') {
                estadoActual = 'p73';
                pos++
                if (cadena[pos] == 'p' && estadoActual == 'p73') {
                    estadoActual = 'p74';
                    pos++
                    if (cadena[pos] == 'r' && estadoActual == 'p74') {
                        estadoActual = 'p75';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'p75') {
                            estadoActual = 'p76';
                            pos++
                            if (cadena[pos] == 's' && estadoActual == 'p76') {
                                estadoActual = 'p77';
                                pos++
                                if (cadena[pos] == 'i' && estadoActual == 'p77') {
                                    estadoActual = 'p78';
                                    pos++
                                    if (cadena[pos] == 'o' && estadoActual == 'p78') {
                                        estadoActual = 'p79';
                                        pos++
                                        if (cadena[pos] == 'n' && estadoActual == 'p79') {
                                            estadoActual = 'z';
                                            palabrasClave.forEach(palabra => {
                                                if (palabra == cadena) {
                                                    document.getElementById("estados").innerHTML = `
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Generar Recibo de Pago </h6>
                                                                <p class="grey-text text-darken-2"> Generar los archivos pdf o realizar el pago en línea de los recibos de pagos </p>    
                                                            </a>
                                                        </div>
                                                    `;
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
            //Inscripcion
            if (cadena[pos] == 'n' && estadoActual == 'p72') {
                estadoActual = 'p81';
                pos++
                if (cadena[pos] == 's' && estadoActual == 'p81') {
                    estadoActual = 'p82';
                    pos++
                    if (cadena[pos] == 'c' && estadoActual == 'p82') {
                        estadoActual = 'p83';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'p83') {
                            estadoActual = 'p84';
                            pos++
                            if (cadena[pos] == 'i' && estadoActual == 'p84') {
                                estadoActual = 'p85';
                                pos++
                                if (cadena[pos] == 'p' && estadoActual == 'p85') {
                                    estadoActual = 'p86';
                                    pos++
                                    if (cadena[pos] == 'c' && estadoActual == 'p86') {
                                        estadoActual = 'p87';
                                        pos++
                                        if (cadena[pos] == 'i' && estadoActual == 'p87') {
                                            estadoActual = 'p88';
                                            pos++
                                            if (cadena[pos] == 'o' && estadoActual == 'p88') {
                                                estadoActual = 'p89';
                                                pos++
                                                if (cadena[pos] == 'n' && estadoActual == 'p89') {
                                                    estadoActual = 'z';
                                                    palabrasClave.forEach(palabra => {
                                                        if (palabra == cadena) {
                                                            document.getElementById("estados").innerHTML = `
                                                                <div class="content">
                                                                    <a href="/views/consultaSaldoCuenta.html">
                                                                        <h6> Citas de Inscripcion </h6>
                                                                        <p class="grey-text text-darken-2"> Consulta de la cita otorgada para la inscripción de materias del semestre. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/consultaSaldoCuenta.html">
                                                                        <h6> Inscripcion de Asignaturas </h6>
                                                                        <p class="grey-text text-darken-2"> Generar la inscripción de las materias o asignaturas del semestre. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/consultaSaldoCuenta.html">
                                                                        <h6> Inscripción de clase – Número de Curso </h6>
                                                                        <p class="grey-text text-darken-2"> Inscripción de materias según el numero de la asignatura. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/consultaSaldoCuenta.html">
                                                                        <h6> Inscripción de clase – Búsqueda de clase </h6>
                                                                        <p class="grey-text text-darken-2"> Búsqueda de la asignatura para la inscripción o la inserción en el planificador. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/consultaSaldoCuenta.html">
                                                                        <h6> Inscripción de Becas de Compesación y Subsidio de Alimentación </h6>
                                                                        <p class="grey-text text-darken-2"> Crear solicitud de becas de compensación y subsidio de alimentación de promoción socioeconómica </p>    
                                                                    </a>
                                                                </div>
                                                            `;
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
                }
            }

        }

        //h
        if (cadena[pos] == 'h' && estadoActual == 'q0') {
            estadoActual = 'p57';
            pos++

            //Historial
            if (cadena[pos] == 'i' && estadoActual == 'p57') {
                estadoActual = 'p58';
                pos++
                if (cadena[pos] == 's' && estadoActual == 'p58') {
                    estadoActual = 'p59';
                    pos++
                    if (cadena[pos] == 't' && estadoActual == 'p59') {
                        estadoActual = 'p60';
                        pos++
                        if (cadena[pos] == 'o' && estadoActual == 'p60') {
                            estadoActual = 'p61';
                            pos++
                            if (cadena[pos] == 'r' && estadoActual == 'p61') {
                                estadoActual = 'p62';
                                pos++
                                if (cadena[pos] == 'i' && estadoActual == 'p62') {
                                    estadoActual = 'p63';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'p63') {
                                        estadoActual = 'p64';
                                        pos++
                                        if (cadena[pos] == 'l' && estadoActual == 'p64') {
                                            estadoActual = 'z';
                                            palabrasClave.forEach(palabra => {
                                                if (palabra == cadena) {
                                                    document.getElementById("estados").innerHTML = `
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Consultar Historia de Pagos </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el saldo total adeudado de la cuenta. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Historial Cursos </h6>
                                                                <p class="grey-text text-darken-2"> Historial Cursos </p>    
                                                            </a>
                                                        </div>
                                                    `;
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
            //Horario
            if (cadena[pos] == 'o' && estadoActual == 'p57') {
                estadoActual = 'p66';
                pos++
                if (cadena[pos] == 'r' && estadoActual == 'p66') {
                    estadoActual = 'p67';
                    pos++
                    if (cadena[pos] == 'a' && estadoActual == 'p67') {
                        estadoActual = 'p68';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'p68') {
                            estadoActual = 'p69';
                            pos++
                            if (cadena[pos] == 'i' && estadoActual == 'p69') {
                                estadoActual = 'p70';
                                pos++
                                if (cadena[pos] == 'o' && estadoActual == 'p70') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Horario de Clases </h6>
                                                        <p class="grey-text text-darken-2"> Consultar el historial de cursos completados, en proceso, transferidos y planificados </p>    
                                                    </a>
                                                </div>
                                            `;
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

        //g
        if (cadena[pos] == 'g' && estadoActual == 'q0') {
            estadoActual = 'p46';
            pos++

            //Generar
            if (cadena[pos] == 'e' && estadoActual == 'p46') {
                estadoActual = 'p47';
                pos++
                if (cadena[pos] == 'n' && estadoActual == 'p47') {
                    estadoActual = 'p48';
                    pos++
                    if (cadena[pos] == 'e' && estadoActual == 'p48') {
                        estadoActual = 'p49';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'p49') {
                            estadoActual = 'p50';
                            pos++
                            if (cadena[pos] == 'a' && estadoActual == 'p50') {
                                estadoActual = 'p51';
                                pos++
                                if (cadena[pos] == 'r' && estadoActual == 'p51') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6> Generar Recibo de Pago </h6>
                                                        <p class="grey-text text-darken-2"> Generar los archivos pdf o realizar el pago en línea de los recibos de pagos </p>    
                                                    </a>
                                                </div>
                                            `;
                                        }
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            //Grado
            if (cadena[pos] == 'r' && estadoActual == 'p46') {
                estadoActual = 'p53';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'p53') {
                    estadoActual = 'p54';
                    pos++
                    if (cadena[pos] == 'd' && estadoActual == 'p54') {
                        estadoActual = 'p55';
                        pos++
                        if (cadena[pos] == 'o' && estadoActual == 'p55') {
                            estadoActual = 'z';
                            palabrasClave.forEach(palabra => {
                                if (palabra == cadena) {
                                    document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Carnet, Diploma y Grado </h6>
                                                <p class="grey-text text-darken-2"> Generar los procesos necesarios realizar la ceremonia de grado. de los recibos de pagos </p>    
                                            </a>
                                        </div>
                                    `;
                                    console.log(`Carnet, Diploma y Grado`)
                                }
                            });
                            break;
                        }
                    }
                }
            }

        }



        //final while
        break;
    }

}

/*
if (cadena[pos] == 'a' && estadoActual == 'p43') {
                                    estadoActual = 'z';
                                    palabrasClave.forEach(palabra => {
                                        if (palabra == cadena) {
                                            console.log(`Carnet, Diploma y Grado`)
                                        }
                                    });
                                    break;
                                }
*/