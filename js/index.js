function Busqueda() {
    let palabrasClave = [
        "academico", "alimentacion", "añadir", "asignatura",
        "baja", "becas", "busqueda",
        "calificaciones", "cancelar", "cambio", "carnet", "catalogo", "certificados", "cita",
        "clase", "clases", "compensacion", "contraseña", "cuenta", "curso", "cursos", "consultar",
        "lista",
        "materia",
        "historial", "horario",
        "generar", "grado",
        "tramite",
        "recibo",
        "diploma",
        "impresion", "inscripcion",
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
                                                            <a href="/views/generarTramiteCertificado.html">
                                                                <h6> Generar Tramite de Certificados </h6>
                                                                <p class="grey-text text-darken-2"> Realizar solicitudes de tramites de certificados </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultarEstadoTramiteC.html">
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
                                                            <a href="/views/inscripcionBecasAlimenta.html">
                                                                <h6> Inscripción de Becas de Compesación y Subsidio de Alimentación </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el progreso de unidades finalizadas de la carrera. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaInscriopcionBecasAli.html">
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
                                        <a href="/views/generarReciboPago.html">
                                            <h6> Generar Recibo de Pago </h6>
                                            <p class="grey-text text-darken-2"> Generar los archivos pdf o realizar el pago en línea de los recibos de pagos </p>    
                                        </a>
                                    </div>
                                    <div class="content">
                                        <a href="/views/consultarHistorialPago.html">
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
                                            <a href="/views/consultaPerfil.html">
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
                                                                        <a href="/views/planificador.html">
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
                                            <a href="/views/planAcademico.html">
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
                                                        <a href="/views/progresoAcademico.html">
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
                                                    <a href="/views/generarTramiteCertificado.html">
                                                        <h6> Generar Tramite de Certificados </h6>
                                                        <p class="grey-text text-darken-2"> Realizar solicitudes de tramites de certificados </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/consultarEstadoTramiteC.html">
                                                        <h6> Consultar Estado de Tramites de Certificados </h6>
                                                        <p class="grey-text text-darken-2"> Consultar el estado actual de las solicitudes de tramites de certificados. </p>    
                                                    </a>
                                                </div>  
                                                <div class="content">
                                                    <a href="/views/carnetDiplomaGrado.html">
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
                                                <a href="/views/generarReciboPago.html">
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
                                            <a href="/views/lista.html">
                                                <h6> Lista de Clases </h6>
                                                <p class="grey-text text-darken-2"> Consulta las clases inscritas para el ciclo actual. </p>    
                                            </a>
                                        </div>
                                        <div class="content">
                                            <a href="/views/planAcademico.html">
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
                                                    <a href="/views/citasInscripcion.html">
                                                        <h6> Citas de Inscripcion  </h6>
                                                        <p class="grey-text text-darken-2"> Consulta de la cita otorgada para la inscripción de materias del semestre. </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/inscripcionMateria.html">
                                                        <h6> Inscripcion de Asignaturas </h6>
                                                        <p class="grey-text text-darken-2"> Generar la inscripción de las materias o asignaturas del semestre. </p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/inscripcionNumeroCurso.html">
                                                        <h6> Inscripción de clase – Número de Curso </h6>
                                                        <p class="grey-text text-darken-2"> Inscripción de materias según el numero de la asignatura.</p>    
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <a href="/views/incripcionBusquedaClase.html">
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
                                                    <a href="/views/carnetDiplomaGrado.html">
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
                                                            <a href="/views/generarReciboPago.html">
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
                                                                    <a href="/views/citasInscripcion.html">
                                                                        <h6> Citas de Inscripcion </h6>
                                                                        <p class="grey-text text-darken-2"> Consulta de la cita otorgada para la inscripción de materias del semestre. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/inscripcionMateria.html">
                                                                        <h6> Inscripcion de Asignaturas </h6>
                                                                        <p class="grey-text text-darken-2"> Generar la inscripción de las materias o asignaturas del semestre. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/inscripcionNumeroCurso.html">
                                                                        <h6> Inscripción de clase – Número de Curso </h6>
                                                                        <p class="grey-text text-darken-2"> Inscripción de materias según el numero de la asignatura. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/incripcionBusquedaClase.html">
                                                                        <h6> Inscripción de clase – Búsqueda de clase </h6>
                                                                        <p class="grey-text text-darken-2"> Búsqueda de la asignatura para la inscripción o la inserción en el planificador. </p>    
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="/views/inscripcionBecasAlimenta.html">
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
                                                            <a href="/views/consultarHistorialPago.html">
                                                                <h6> Consultar Historia de Pagos </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el saldo total adeudado de la cuenta. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/historialCurso.html">
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
                                                    <a href="/views/horarioClases.html">
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
                                                    <a href="/views/generarReciboPago.html">
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
                                            <a href="/views/carnetDiplomaGrado.html">
                                                <h6> Carnet, Diploma y Grado </h6>
                                                <p class="grey-text text-darken-2"> Generar los procesos necesarios realizar la ceremonia de grado. de los recibos de pagos </p>    
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

        //a
        if (cadena[pos] == 'a' && estadoActual == 'q0') {
            estadoActual = 'q1';
            pos++

            //Academico
            if (cadena[pos] == 'c' && estadoActual == 'q1') {
                estadoActual = 'q2';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'q2') {
                    estadoActual = 'q3';
                    pos++
                    if (cadena[pos] == 'd' && estadoActual == 'q3') {
                        estadoActual = 'q4';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'q4') {
                            estadoActual = 'q5';
                            pos++
                            if (cadena[pos] == 'm' && estadoActual == 'q5') {
                                estadoActual = 'q6';
                                pos++
                                if (cadena[pos] == 'i' && estadoActual == 'q6') {
                                    estadoActual = 'q7';
                                    pos++
                                    if (cadena[pos] == 'c' && estadoActual == 'q7') {
                                        estadoActual = 'q8';
                                        pos++
                                        if (cadena[pos] == 'o' && estadoActual == 'q8') {
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
                    }
                }
            }
            //alimentacion
            if (cadena[pos] == 'l' && estadoActual == 'q1') {
                estadoActual = 'q10';
                pos++
                if (cadena[pos] == 'i' && estadoActual == 'q10') {
                    estadoActual = 'q11';
                    pos++
                    if (cadena[pos] == 'm' && estadoActual == 'q11') {
                        estadoActual = 'q12';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'q12') {
                            estadoActual = 'q13';
                            pos++
                            if (cadena[pos] == 'n' && estadoActual == 'q13') {
                                estadoActual = 'q14';
                                pos++
                                if (cadena[pos] == 't' && estadoActual == 'q14') {
                                    estadoActual = 'q15';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'q15') {
                                        estadoActual = 'q16';
                                        pos++
                                        if (cadena[pos] == 'c' && estadoActual == 'q16') {
                                            estadoActual = 'q17';
                                            pos++
                                            if (cadena[pos] == 'i' && estadoActual == 'q17') {
                                                estadoActual = 'q18';
                                                pos++
                                                if (cadena[pos] == 'o' && estadoActual == 'q18') {
                                                    estadoActual = 'q19';
                                                    pos++
                                                    if (cadena[pos] == 'n' && estadoActual == 'q19') {
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
                    }
                }
            }
            //añadir
            if (cadena[pos] == 'ñ' && estadoActual == 'q1') {
                estadoActual = 'q21';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'q21') {
                    estadoActual = 'q22';
                    pos++
                    if (cadena[pos] == 'd' && estadoActual == 'q22') {
                        estadoActual = 'q23';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'q23') {
                            estadoActual = 'q24';
                            pos++
                            if (cadena[pos] == 'r' && estadoActual == 'q24') {
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
            //asignatura
            if (cadena[pos] == 's' && estadoActual == 'q1') {
                estadoActual = 'q26';
                pos++
                if (cadena[pos] == 'i' && estadoActual == 'q26') {
                    estadoActual = 'q27';
                    pos++
                    if (cadena[pos] == 'g' && estadoActual == 'q27') {
                        estadoActual = 'q28';
                        pos++
                        if (cadena[pos] == 'n' && estadoActual == 'q28') {
                            estadoActual = 'q29';
                            pos++
                            if (cadena[pos] == 'a' && estadoActual == 'q29') {
                                estadoActual = 'q30';
                                pos++
                                if (cadena[pos] == 't' && estadoActual == 'q30') {
                                    estadoActual = 'q31';
                                    pos++
                                    if (cadena[pos] == 'u' && estadoActual == 'q31') {
                                        estadoActual = 'q32';
                                        pos++
                                        if (cadena[pos] == 'r' && estadoActual == 'q32') {
                                            estadoActual = 'q33';
                                            pos++
                                            if (cadena[pos] == 'a' && estadoActual == 'q33') {
                                                estadoActual = 'z';
                                                palabrasClave.forEach(palabra => {
                                                    if (palabra == cadena) {
                                                        document.getElementById("estados").innerHTML = `
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
                }
            }
        }

        //b
        if (cadena[pos] == 'b' && estadoActual == 'q0') {
            estadoActual = 'p35';
            pos++

            //baja
            if (cadena[pos] == 'a' && estadoActual == 'p35') {
                estadoActual = 'p36';
                pos++
                if (cadena[pos] == 'j' && estadoActual == 'p36') {
                    estadoActual = 'p37';
                    pos++
                    if (cadena[pos] == 'a' && estadoActual == 'p37') {
                        estadoActual = 'z';
                        palabrasClave.forEach(palabra => {
                            if (palabra == cadena) {
                                document.getElementById("estados").innerHTML = `
                                    <div class="content">
                                        <a href="/views/consultaSaldoCuenta.html">
                                            <h6> Baja de Clases </h6>
                                            <p class="grey-text text-darken-2"> Cancelacion de clases. </p>    
                                        </a>
                                    </div>
                                `;
                            }
                        });
                        break;
                    }
                }
            }

            //becas
            if (cadena[pos] == 'e' && estadoActual == 'p35') {
                estadoActual = 'p39';
                pos++
                if (cadena[pos] == 'c' && estadoActual == 'p39') {
                    estadoActual = 'p40';
                    pos++
                    if (cadena[pos] == 'a' && estadoActual == 'p40') {
                        estadoActual = 'p41';
                        pos++
                        if (cadena[pos] == 's' && estadoActual == 'p41') {
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

            //busqueda
            if (cadena[pos] == 'u' && estadoActual == 'p35') {
                estadoActual = 'p43';
                pos++
                if (cadena[pos] == 's' && estadoActual == 'p43') {
                    estadoActual = 'p44';
                    pos++
                    if (cadena[pos] == 'q' && estadoActual == 'p44') {
                        estadoActual = 'p45';
                        pos++
                        if (cadena[pos] == 'u' && estadoActual == 'p45') {
                            estadoActual = 'p46';
                            pos++
                            if (cadena[pos] == 'e' && estadoActual == 'p46') {
                                estadoActual = 'p47';
                                pos++
                                if (cadena[pos] == 'd' && estadoActual == 'p47') {
                                    estadoActual = 'p48';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'p48') {
                                        estadoActual = 'z';
                                        palabrasClave.forEach(palabra => {
                                            if (palabra == cadena) {
                                                document.getElementById("estados").innerHTML = `
                                                    <div class="content">
                                                        <a href="/views/consultaSaldoCuenta.html">
                                                            <h6> Inscripción de clase – Búsqueda de clase </h6>
                                                            <p class="grey-text text-darken-2"> Búsqueda de la asignatura para la inscripción o la inserción en el planificador. </p>    
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <a href="/views/consultaSaldoCuenta.html">
                                                            <h6>  Busqueda en Catalogo de Cursos </h6>
                                                            <p class="grey-text text-darken-2"> Buscar los cursos ofertados por la universidad y su area de estudio asociada. </p>    
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

        //c
        if (cadena[pos] == 'c' && estadoActual == 'q0') {
            estadoActual = 'q50';
            pos++

            //a
            if (cadena[pos] == 'a' && estadoActual == 'q50') {
                estadoActual = 'q51';
                pos++
                //calificaciones
                if (cadena[pos] == 'l' && estadoActual == 'q51') {
                    estadoActual = 'q52';
                    pos++
                    if (cadena[pos] == 'i' && estadoActual == 'q52') {
                        estadoActual = 'q53';
                        pos++
                        if (cadena[pos] == 'f' && estadoActual == 'q53') {
                            estadoActual = 'q54';
                            pos++
                            if (cadena[pos] == 'i' && estadoActual == 'q54') {
                                estadoActual = 'q55';
                                pos++
                                if (cadena[pos] == 'c' && estadoActual == 'q55') {
                                    estadoActual = 'q56';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'q56') {
                                        estadoActual = 'q57';
                                        pos++
                                        if (cadena[pos] == 'c' && estadoActual == 'q57') {
                                            estadoActual = 'q58';
                                            pos++
                                            if (cadena[pos] == 'i' && estadoActual == 'q58') {
                                                estadoActual = 'q59';
                                                pos++
                                                if (cadena[pos] == 'o' && estadoActual == 'q59') {
                                                    estadoActual = 'q60';
                                                    pos++
                                                    if (cadena[pos] == 'n' && estadoActual == 'q60') {
                                                        estadoActual = 'q61';
                                                        pos++
                                                        if (cadena[pos] == 'e' && estadoActual == 'q61') {
                                                            estadoActual = 'q62';
                                                            pos++
                                                            if (cadena[pos] == 's' && estadoActual == 'q62') {
                                                                estadoActual = 'z';
                                                                palabrasClave.forEach(palabra => {
                                                                    if (palabra == cadena) {
                                                                        document.getElementById("estados").innerHTML = `
                                                                            <div class="content">
                                                                                <a href="/views/consultaSaldoCuenta.html">
                                                                                    <h6> Consulta Calificaciones </h6>
                                                                                    <p class="grey-text text-darken-2"> Consultar las calificaciones de clases filtradas por ciclo academico. </p>    
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
                }
                //cambio
                if (cadena[pos] == 'm' && estadoActual == 'q51') {
                    estadoActual = 'q64';
                    pos++
                    if (cadena[pos] == 'b' && estadoActual == 'q64') {
                        estadoActual = 'q65';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'q65') {
                            estadoActual = 'q66';
                            pos++
                            if (cadena[pos] == 'o' && estadoActual == 'q66') {
                                estadoActual = 'z';
                                palabrasClave.forEach(palabra => {
                                    if (palabra == cadena) {
                                        document.getElementById("estados").innerHTML = `
                                            <div class="content">
                                                <a href="/views/consultaSaldoCuenta.html">
                                                    <h6> Cambio Contraseña </h6>
                                                    <p class="grey-text text-darken-2"> Cambiar la contraseña para el inicio de sesion del usuario. </p>    
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
                //cancelar
                if (cadena[pos] == 'n' && estadoActual == 'q51') {
                    estadoActual = 'q68';
                    pos++
                    if (cadena[pos] == 'c' && estadoActual == 'q68') {
                        estadoActual = 'q69';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'q69') {
                            estadoActual = 'q70';
                            pos++
                            if (cadena[pos] == 'l' && estadoActual == 'q70') {
                                estadoActual = 'q71';
                                pos++
                                if (cadena[pos] == 'a' && estadoActual == 'q71') {
                                    estadoActual = 'q72';
                                    pos++
                                    if (cadena[pos] == 'r' && estadoActual == 'q72') {
                                        estadoActual = 'z';
                                        palabrasClave.forEach(palabra => {
                                            if (palabra == cadena) {
                                                document.getElementById("estados").innerHTML = `
                                                    <div class="content">
                                                        <a href="/views/consultaSaldoCuenta.html">
                                                            <h6> Baja de Clases </h6>
                                                            <p class="grey-text text-darken-2"> Cancelacion de clases. </p>    
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
                //carnet
                if (cadena[pos] == 'r' && estadoActual == 'q51') {
                    estadoActual = 'q74';
                    pos++
                    if (cadena[pos] == 'n' && estadoActual == 'q74') {
                        estadoActual = 'q75';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'q75') {
                            estadoActual = 'q76';
                            pos++
                            if (cadena[pos] == 't' && estadoActual == 'q76') {
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
                //catalogo
                if (cadena[pos] == 't' && estadoActual == 'q51') {
                    estadoActual = 'q78';
                    pos++
                    if (cadena[pos] == 'a' && estadoActual == 'q78') {
                        estadoActual = 'q79';
                        pos++
                        if (cadena[pos] == 'l' && estadoActual == 'q79') {
                            estadoActual = 'q80';
                            pos++
                            if (cadena[pos] == 'o' && estadoActual == 'q80') {
                                estadoActual = 'q81';
                                pos++
                                if (cadena[pos] == 'g' && estadoActual == 'q81') {
                                    estadoActual = 'q82';
                                    pos++
                                    if (cadena[pos] == 'o' && estadoActual == 'q82') {
                                        estadoActual = 'z';
                                        palabrasClave.forEach(palabra => {
                                            if (palabra == cadena) {
                                                document.getElementById("estados").innerHTML = `
                                                <div class="content">
                                                    <a href="/views/consultaSaldoCuenta.html">
                                                        <h6>  Busqueda en Catalogo de Cursos </h6>
                                                        <p class="grey-text text-darken-2"> Buscar los cursos ofertados por la universidad y su area de estudio asociada. </p>    
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

            //certificados
            if (cadena[pos] == 'e' && estadoActual == 'q50') {
                estadoActual = 'q84';
                pos++
                if (cadena[pos] == 'r' && estadoActual == 'q84') {
                    estadoActual = 'q85';
                    pos++
                    if (cadena[pos] == 't' && estadoActual == 'q85') {
                        estadoActual = 'q86';
                        pos++
                        if (cadena[pos] == 'i' && estadoActual == 'q86') {
                            estadoActual = 'q87';
                            pos++
                            if (cadena[pos] == 'f' && estadoActual == 'q87') {
                                estadoActual = 'q88';
                                pos++
                                if (cadena[pos] == 'i' && estadoActual == 'q88') {
                                    estadoActual = 'q89';
                                    pos++
                                    if (cadena[pos] == 'c' && estadoActual == 'q89') {
                                        estadoActual = 'q90';
                                        pos++
                                        if (cadena[pos] == 'a' && estadoActual == 'q90') {
                                            estadoActual = 'q91';
                                            pos++
                                            if (cadena[pos] == 'd' && estadoActual == 'q91') {
                                                estadoActual = 'q92';
                                                pos++
                                                if (cadena[pos] == 'o' && estadoActual == 'q92') {
                                                    estadoActual = 'q93';
                                                    pos++
                                                    if (cadena[pos] == 's' && estadoActual == 'q93') {
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

            //cita
            if (cadena[pos] == 'i' && estadoActual == 'q50') {
                estadoActual = 'q95';
                pos++
                if (cadena[pos] == 't' && estadoActual == 'q95') {
                    estadoActual = 'q96';
                    pos++
                    if (cadena[pos] == 'a' && estadoActual == 'q96') {
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
                                `;
                            }
                        });
                        break;
                    }
                }
            }

            //clase
            if (cadena[pos] == 'l' && estadoActual == 'q50') {
                estadoActual = 'q98';
                pos++
                if (cadena[pos] == 'a' && estadoActual == 'q98') {
                    estadoActual = 'q99';
                    pos++
                    if (cadena[pos] == 's' && estadoActual == 'q99') {
                        estadoActual = 'p1';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'p1') {
                            estadoActual = 'p2';
                            pos++
                            //clases
                            if (cadena[pos] == 's' && estadoActual == 'p2') {
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
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Lista de Clases </h6>
                                                <p class="grey-text text-darken-2"> Consulta las clases inscritas para el ciclo actual. </p>    
                                            </a>
                                        </div>                                                    
                                        `;
                                    }
                                });
                                break;
                            } else {
                                estadoActual = 'z';
                                palabrasClave.forEach(palabra => {
                                    if (palabra == cadena) {
                                        document.getElementById("estados").innerHTML = `
                                        <div class="content">
                                            <a href="/views/consultaSaldoCuenta.html">
                                                <h6> Baja de Clases </h6>
                                                <p class="grey-text text-darken-2"> Cancelacion de clases. </p>    
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

            //o
            if (cadena[pos] == 'o' && estadoActual == 'q50') {
                estadoActual = 'p4';
                pos++

                //compensacion
                if (cadena[pos] == 'm' && estadoActual == 'p4') {
                    estadoActual = 'p5';
                    pos++
                    if (cadena[pos] == 'p' && estadoActual == 'p5') {
                        estadoActual = 'p6';
                        pos++
                        if (cadena[pos] == 'e' && estadoActual == 'p6') {
                            estadoActual = 'p7';
                            pos++
                            if (cadena[pos] == 'n' && estadoActual == 'p7') {
                                estadoActual = 'p8';
                                pos++
                                if (cadena[pos] == 's' && estadoActual == 'p8') {
                                    estadoActual = 'p9';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'p9') {
                                        estadoActual = 'p10';
                                        pos++
                                        if (cadena[pos] == 'c' && estadoActual == 'p10') {
                                            estadoActual = 'p11';
                                            pos++
                                            if (cadena[pos] == 'i' && estadoActual == 'p11') {
                                                estadoActual = 'p12';
                                                pos++
                                                if (cadena[pos] == 'o' && estadoActual == 'p12') {
                                                    estadoActual = 'p13';
                                                    pos++
                                                    if (cadena[pos] == 'n' && estadoActual == 'p13') {
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
                    }
                }

                //n
                if (cadena[pos] == 'n' && estadoActual == 'p4') {
                    estadoActual = 'p15';
                    pos++

                    //contraseña
                    if (cadena[pos] == 't' && estadoActual == 'p15') {
                        estadoActual = 'p16';
                        pos++
                        if (cadena[pos] == 'r' && estadoActual == 'p16') {
                            estadoActual = 'p17';
                            pos++
                            if (cadena[pos] == 'a' && estadoActual == 'p17') {
                                estadoActual = 'p18';
                                pos++
                                if (cadena[pos] == 's' && estadoActual == 'p18') {
                                    estadoActual = 'p19';
                                    pos++
                                    if (cadena[pos] == 'e' && estadoActual == 'p19') {
                                        estadoActual = 'p20';
                                        pos++
                                        if (cadena[pos] == 'ñ' && estadoActual == 'p20') {
                                            estadoActual = 'p21';
                                            pos++
                                            if (cadena[pos] == 'a' && estadoActual == 'p21') {
                                                estadoActual = 'z';
                                                palabrasClave.forEach(palabra => {
                                                    if (palabra == cadena) {
                                                        document.getElementById("estados").innerHTML = `
                                                            <div class="content">
                                                                <a href="/views/consultaSaldoCuenta.html">
                                                                    <h6> Cambio Contraseña </h6>
                                                                    <p class="grey-text text-darken-2"> Cambiar la contraseña para el inicio de sesion del usuario. </p>    
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

                    //consultar
                    if (cadena[pos] == 's' && estadoActual == 'p15') {
                        estadoActual = 'p23';
                        pos++
                        if (cadena[pos] == 'u' && estadoActual == 'p23') {
                            estadoActual = 'p24';
                            pos++
                            if (cadena[pos] == 'l' && estadoActual == 'p24') {
                                estadoActual = 'p25';
                                pos++
                                if (cadena[pos] == 't' && estadoActual == 'p25') {
                                    estadoActual = 'p26';
                                    pos++
                                    if (cadena[pos] == 'a' && estadoActual == 'p26') {
                                        estadoActual = 'p27';
                                        pos++
                                        if (cadena[pos] == 'r' && estadoActual == 'p27') {
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
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6>  Consultar Historial de Pagos </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el estado actual de las solicitudes de tramites de certificados. </p>    
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
                                                                <h6> Horario de Clases </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el historial de cursos completados, en proceso, transferidos y planificados </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Lista de Clases </h6>
                                                                <p class="grey-text text-darken-2"> Consulta las clases inscritas para el ciclo actual. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Consulta Calificaciones </h6>
                                                                <p class="grey-text text-darken-2"> Consultar las calificaciones de clases filtradas por ciclo academico. </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Consulta de Perfil </h6>
                                                                <p class="grey-text text-darken-2"> Consultar el perfil del usuario </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Historial Cursos </h6>
                                                                <p class="grey-text text-darken-2"> Historial Cursos </p>    
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="/views/consultaSaldoCuenta.html">
                                                                <h6> Progreso Academico </h6>
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

            //u
            if (cadena[pos] == 'u' && estadoActual == 'q50') {
                estadoActual = 'p29';
                pos++
                //cuenta
                if (cadena[pos] == 'e' && estadoActual == 'p29') {
                    estadoActual = 'p30';
                    pos++
                    if (cadena[pos] == 'n' && estadoActual == 'p30') {
                        estadoActual = 'p31';
                        pos++
                        if (cadena[pos] == 't' && estadoActual == 'p31') {
                            estadoActual = 'p32';
                            pos++
                            if (cadena[pos] == 'a' && estadoActual == 'p32') {
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
                //curso
                if (cadena[pos] == 'r' && estadoActual == 'p29') {
                    estadoActual = 'p34';
                    pos++
                    if (cadena[pos] == 's' && estadoActual == 'p34') {
                        estadoActual = 'p35';
                        pos++
                        if (cadena[pos] == 'o' && estadoActual == 'p35') {
                            estadoActual = 'p36';
                            pos++
                            //cursos
                            if (cadena[pos] == 's' && estadoActual == 'p36') {
                                estadoActual = 'z';
                                palabrasClave.forEach(palabra => {
                                    if (palabra == cadena) {
                                        document.getElementById("estados").innerHTML = `
                                            <div class="content">
                                                <a href="/views/consultaSaldoCuenta.html">
                                                    <h6>  Busqueda en Catalogo de Cursos </h6>
                                                    <p class="grey-text text-darken-2"> Buscar los cursos ofertados por la universidad y su area de estudio asociada. </p>    
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
                            } else {
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
                                            <div class="content">
                                                <a href="/views/consultaSaldoCuenta.html">
                                                    <h6> Inscripción de clase – Número de Curso </h6>
                                                    <p class="grey-text text-darken-2"> Inscripción de materias según el numero de la asignatura.</p>    
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
        break;
    }

}