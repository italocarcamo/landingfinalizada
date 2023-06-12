let registros = [];

// alert("estoy conectado")
const validarRegistro = (nombre, apellido, fechaNacimiento, telefono) => {
    const retornar = { estado: false };
    if ( nombre == undefined || nombre == '' ) {
        return {
            ...retornar,
            mensaje: 'Debe ingresar nombres',
        }
    }
    if ( apellido == undefined || apellido == '' )
     {
    return {
        ...retornar,
        mensaje: 'Debe ingresar apellidos',
        }
    }    
    if ( fechaNacimiento == undefined || fechaNacimiento == '' ) {
        return {
            ...retornar,
            mensaje: 'Debe ingresar fecha',
        }
    }
    if ( telefono == undefined || telefono == '' ) {
        return {
            ...retornar,
            mensaje: 'Debe ingresar un telefono',
        }
    }
    return {
        ...retornar,
        estado: true
    }
}

const guardar = () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let telefono = document.getElementById('telefono').value;
    let codigo = document.getElementById('codigo').value;
    
    const { estado, mensaje } = validarRegistro( nombre, apellido, fechaNacimiento, telefono);
    if ( estado ) {

        let registro = {
            nombre: nombre,
            apellido: apellido,
            fecha: fechaNacimiento,
            telefono: `${codigo} ${telefono}`
        };
        registros.push(registro);
        
        // Mostrar en la consola de desarrolladores
        console.log(registros);
    } else {

        alert( mensaje );
    }
}
function cargar() { 
    if (registros.length > 0) {
        let registrosHTML = '<table border="1">\n';
        registrosHTML += '<thead>\n';
        registrosHTML += '<tr>\n';
        registrosHTML += '<th>nombre</th>\n';
        registrosHTML += '<th>apellido</th>\n';
        registrosHTML += '<th>fecha de Nacimiento</th>\n';
        registrosHTML += '<th>telefono</th>\n'
        registrosHTML += '</tr>\n';
        registrosHTML += '</thead>\n';
        registrosHTML += '<tbody>\n';
        for (let i = 0; i < registros.length; i++) {
            registrosHTML += '<tr>\n';
            registrosHTML += '<td>' + registros[i]['nombre'] + '</td>\n';
            registrosHTML += '<td>' + registros[i]['apellido'] + '</td>\n';
            registrosHTML += '<td>' + registros[i]['fecha'] + '</td>\n';
            registrosHTML += '<td>' + registros[i]['telefono'] + '</td>\n';
            registrosHTML += '</tr>\n';
        }
        registrosHTML += '</tbody>\n';
        registrosHTML += '</table>\n';
        // Limpiar formulario y informar que se ha guardado el alumno
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fechaNacimiento').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('registro').innerHTML = registrosHTML;
    }
}
cargar();
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    guardar();
    cargar();
});


// function validar();
// if nombre == "" || apellido =="" || fecha =="" || telefono == ""
//     window.alert('no puedes ingresar campos vacios')
//     return false;
