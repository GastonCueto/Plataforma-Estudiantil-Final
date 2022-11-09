document.querySelector('#btnmostrarAlumnosCreados').addEventListener('click', mostrarAlumnosCreados);

function mostrarAlumnosCreados(){
    var list = getAlumno(),
        tbody = document.querySelector('#alumnosCreadosTable tbody');

    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
            nameCell = row.insertCell(2),
            dniCell = row.insertCell(3),
            cursoCell = row.insertCell(4),
            telefonoCell = row.insertCell(5);
            userCell = row.insertCell(0),
            passCell = row.insertCell(1),
        
        nameCell.innerHTML = list(i).name;
        dniCell.innerHTML = list(i).dni;
        cursoCell.innerHTML = list(i).curso;
        telefonoCell.innerHTML = list(i).telefono;
        userCell.innerHTML = list(i).user;
        passCell.innerHTML = list(i).pass;

        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].user;
        selectCell.appendChild(inputSelect);

        tbody.appendChild(row);

    }

}