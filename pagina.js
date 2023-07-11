const JsonObj = '[{"nombre":"Andrea","apellido":"castellanos","email":"andrea@gmail.com","especialidad":"Cardiologia"}]'
let doctores = JSON.parse(JsonObj  )

formulario.addEventListener("submit", registrarDoctor)

//-------------------------------VALIDACIONES DOCTORES--------------------------------------//
function registrarDoctor(event){
    event.preventDefault()
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const cedula = document.getElementById("cedula").value
    const especialidad = document.getElementById("especialidad").value
    const consultorio = document.getElementById("consultorio").value
    const email = document.getElementById("email").value
    
    const val_nombre = /^[a-zA-Z\s]+$/.test(nombre);
    const val_apellido = /^[a-zA-Z\s]+$/.test(apellido);
    const val_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
  
    if (!val_nombre) {
      alert("Nombre no válido. Solo se permiten letras y espacios");
      return;
    }
  
    if (!val_apellido) {
      alert("Apellido no válido. Solo se permiten letras y espacios");
      return;
    }
  
    if (!cedula.match(/^\d{10}$/)) {
        alert("La cedula no es válida. Debe tener minimo 10 dígitos numéricos");
        return;
      }
  
    if (consultorio.length === 0) {
      alert("El campo de consultorio es obligatorio");
      return;
    }
  
    if (!val_email) {
      alert("Correo electrónico no válido");
      return;
    }
  
    console.log(nombre);
    console.log(apellido);
    console.log(cedula);
    console.log(especialidad);
    console.log(consultorio);
    console.log(email);

    
  //Objeto JS
  const doctor = {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    especialidad: especialidad,
    consultorio: consultorio,   
    email: email
  }

  
  //Objeto al arreglo
  doctores.push(doctor)

  //Limpiar el DFormulario DOCTORES
  formulario.reset()


  //Actualizar la lista 
  mostrarDoctores()
}

function mostrarDoctores(){
    const doctorTabla = document.getElementById("doctorTable")
    const tbody = doctorTabla.querySelector("tbody")
    doctorTabla.innerHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Numero de cedula</th><th>Especialidad</th><th>Consultorio</th><th>Correo</th></thead>"

    doctores.forEach((doctor) =>{
        //fila
        const tupla = doctorTabla.insertRow(-1)
        //Campos
        const nombre = document.createElement("td")
        const apellido = document.createElement("td")
        const cedula = document.createElement("td")
        const especialidad = document.createElement("td")
        const consultorio = document.createElement("td")
        const email = document.createElement("td")

        //Valores a cada campo
        nombre.textContent = doctor.nombre
        apellido.textContent= doctor.apellido
        cedula.textContent= doctor.cedula
        especialidad.textContent= doctor.especialidad
        consultorio.textContent= doctor.consultorio
        email.textContent= doctor.email 
        //Campos a la tupla
        tupla.appendChild(nombre)
        tupla.appendChild(apellido)
        tupla.appendChild(cedula)
        tupla.appendChild(especialidad)
        tupla.appendChild(consultorio)  
        tupla.appendChild(email)

    })

}



 






   //Funcion  reiniciar doctor
   function reiniciarFormulario() {
    document.getElementById("formulario").reset();
  }
//-------------------------------VALIDACIONES PACIENTES--------------------------------------//


const JsonObjet = '[{"nombre":"Karen","apellido":"Perez","especialidad":"Odontologia"}]';
let pacientes = JSON.parse(JsonObjet);

formularioP.addEventListener("submit", registrarPaciente);

function registrarPaciente(event) {
  event.preventDefault();
  const nombreP = document.getElementById("nombreP").value;
  const apellidoP = document.getElementById("apellidoP").value;
  const cedulaP = document.getElementById("cedulaP").value;
  const edad = document.getElementById("edad").value;
  const telefono = document.getElementById("telefono").value;
  const especialidadP = document.getElementById("especialidadP").value;

  const val_nombreP = /^[a-zA-Z\s]+$/.test(nombreP);
  const val_apellidoP = /^[a-zA-Z\s]+$/.test(apellidoP);

  if (!val_nombreP) {
    alert("Nombre no válido. Solo se permiten letras y espacios");
    return;
  }

  if (!val_apellidoP) {
    alert("Apellido no válido. Solo se permiten letras y espacios");
    return;
  }

  if (!cedulaP.match(/^\d{10}$/)) {
    alert("La cédula no es válida. Debe tener mínimo 10 dígitos numéricos");
    return;
  }

  if (edad <= 0 || isNaN(edad)) {
    alert("Edad no válida. Debe ser un número mayor a cero");
    return;
  }

  if (!telefono.match(/^\d{10}$/)) {
    alert("Teléfono no válido. Debe tener 10 dígitos numéricos");
    return;
  }

  // Objeto JS
  const paciente = {
    nombre: nombreP,
    apellido: apellidoP,
    cedula: cedulaP,
    edad: edad,
    telefono: telefono,
    especialidad: especialidadP,
  };

  // Objeto al arreglo
  pacientes.push(paciente);

  // Limpiar el Formulario
  formularioP.reset();

  // Actualizar la lista
  mostrarPacientes();
}

function mostrarPacientes() {
  const pacientTable = document.getElementById("pacientTable");
  const tbody = pacientTable.querySelector("tbody");
  pacientTable.innerHTML =
    "<thead><tr><th>Nombre</th><th>Apellido</th><th>Numero de cedula</th><th>Edad</th><th>Telefono</th><th>Especialidad</th></tr></thead>";

  pacientes.forEach((paciente) => {
    // fila
    const tupla = pacientTable.insertRow(-1);
    // Campos
    const nombreP = document.createElement("td");
    const apellidoP = document.createElement("td");
    const cedulaP = document.createElement("td");
    const edad = document.createElement("td");
    const telefono = document.createElement("td");
    const especialidadP = document.createElement("td");

    // Valores a cada campo
    nombreP.textContent = paciente.nombre;
    apellidoP.textContent = paciente.apellido;
    cedulaP.textContent = paciente.cedula;
    edad.textContent = paciente.edad;
    telefono.textContent = paciente.telefono;
    especialidadP.textContent = paciente.especialidad;

    // Campos a la tupla
    tupla.appendChild(nombreP);
    tupla.appendChild(apellidoP);
    tupla.appendChild(cedulaP);
    tupla.appendChild(edad);
    tupla.appendChild(telefono);
    tupla.appendChild(especialidadP);
  });
}

// Funcion reiniciar paciente
function reiniciarFormularioP() {
  document.getElementById("formularioP").reset();
}
