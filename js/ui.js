document.querySelector('#btnguardarAlumno').addEventListener('click', guardarAlumno);
document.querySelector('#btnagregarMateria').addEventListener('click', addMateria);

mostrarAlumno();




function guardarAlumno(){

    var sNombre = document.querySelector('#txtname').value,
        sDni = document.querySelector('#txtdni').value,              
        sCurso = document.querySelector('#txtcurso').value,          
        sTelefono = document.querySelector('#txttelefono').value,          
        sUsuario = document.querySelector('#txtuser').value,
        sContraseña = document.querySelector('#txtpass').value;
    
   addAlumno(sNombre, sDni, sCurso, sTelefono, sUsuario, sContraseña);
   mostrarAlumno();
}

function mostrarAlumno(){
    var list = getAlumno(),
        tbody = document.querySelector('#AlumnosTable tbody');

    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){

        var row = tbody.insertRow(i),
            nameCell = row.insertCell(0),
            dniCell = row.insertCell(1),
            cursoCell = row.insertCell(2),
            telefonoCell = row.insertCell(3),
            userCell = row.insertCell(4),
            passCell = row.insertCell(5),
            selectCell = row.insertCell(6);


        nameCell.innerHTML = list[i].name;
        dniCell.innerHTML = list[i].dni;
        cursoCell.innerHTML = list[i].curso;
        telefonoCell.innerHTML = list[i].telefono;
        userCell.innerHTML = list[i].user;
        passCell.innerHTML = list[i].pass;
        

        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].name;
        inputSelect.name = 'rbtAlumno';
        selectCell.appendChild(inputSelect);



        tbody.appendChild(row);

    }

}

function addMateria(){
    var sMateriaName = document.querySelector('#txtNameMateria').value,
        sMateriaProfesor = document.querySelector('#txtProfesor').value,              
        sMateriaDivision = document.querySelector('#txtDivision').value,          
        sMateriaNota = document.querySelector('#txtNota').value,
        sAlumnoDni = document.querySelector('#AlumnosTable tbody input[type=radio]:checked').value;
    var alumnoObj = encontrarAlumno(sAlumnoDni);

    addMateriaToAlumnos(alumnoObj, sMateriaName, sMateriaProfesor, sMateriaDivision, sMateriaNota);
}
