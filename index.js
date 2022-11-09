
let admins=[
    {
        user:'administrador',
        pass:'mfalla'
    }];


let alumnos=[{
        user:'Gatica',
        pass:'123',
        name:'Gatica Mateo',
        dni:'45089567',
        curso:'7A',
        telefono:'35470000',
        correo:'matutegatica5@gmail.com',
        matters:[{name:'basededatos',note:2.20,state:'Aprobado'},{name:'lengua',note:5.99,state:'Desaprobado'}]
    }
  
];

let matters=[{curso:'6B',materia:'basededatos',profesor:'Luis Gonzales'}]



const login = () =>{
    let username = document.querySelector(".user").value; 
    let password = document.querySelector(".pass").value;
    admins.forEach(admin => {
        if((username === admin.user)&&(password === admin.pass)){
            location.href='/homeadmin.html'
        }else if((username != admin.user)&&(password != admin.pass)){
            alumnos.forEach(alumno => {
                if((username === alumno.user)&&(password === alumno.pass)){
                    location.href = '/homeUser.html'
                }else{
                    alert('Datos Incorrectos')
                }

            })
        }else{
            alert('Datos Incorrectos')
        }
    })
}



const createUser = () =>{
    let nameUser = document.querySelector('.nombre').value;          
    let dniUser = document.querySelector('.dni').value              
    let cursoUser = document.querySelector('.curso').value          
    let telefonoUser = document.querySelector('.telefono').value    
    let correoUser = document.querySelector('.correo').value        
    let userUser = document.querySelector('.usuario').value
    let passUser = document.querySelector('.contraseña').value
    if(nameUser.length === 0 || dniUser.length === 0 || cursoUser.length === 0 ||telefonoUser.length === 0 ||correoUser.length === 0 ||userUser.length === 0 ||passUser.length === 0){
        alert('Please complete all ')
    }else{
        alumnos.push({user:userUser, pass:passUser, name:nameUser,dni:dniUser, curso:cursoUser, telefono:telefonoUser, correo:correoUser})
        alert('Student add')
    }
    var foo =alumnos.map(function(bar){
        return '<li>'+bar.user+'</li> <li>'+bar.pass+'</li><li>'+bar.name+'</li> <li>'+bar.dni+'</li><li>'+bar.curso+'</li> <li>'+bar.telefono+'</li>'
      })
    document.getElementById("foo").innerHTML = foo;
}


const createMatter = () =>{
    let matterName = document.querySelector('.materia').value
    let matterDivision = document.querySelector('.curso').value
    let profesorName = document.querySelector('.profesor').value
    if(matterName.length === 0 || matterDivision.length === 0 || profesorName.length === 0){
        alert('Complete whit Profesor Info')
    }else{
        matters.push({curso:matterDivision,materia:matterName,profesor:profesorName});
        console.log(matters)
        alert('Assignature Add')
    }
    var foo2 =matters.map(function(bar){
        return '<li>'+bar.curso+'</li> <li>'+bar.materia+'</li><li>'+bar.profesor+'</li>'
      })
    document.getElementById("foo2").innerHTML = foo2;
}



const addNote = () =>{
    let userName = document.querySelector('.nombre').value;
    let userDNI = document.querySelector('.dni').value;
    let curso = document.querySelector('.curso').value;
    let matter = document.querySelector('.materia').value;
    let note = document.querySelector('.nota').value;
    if(userName.length === 0 || userDNI.length === 0 || curso.length === 0 || matter.length === 0 || note.length === 0){
        alert('obligatorio rellenar los campos ')
    }else{
        if(alumnos.find(item=>item.dni === userDNI)){
            if(note>5.99){
                console.log(alumnos['matters'])
                alumnos['matters'].apply({mathers:matter,note:note,state:'aprobado'})
                alert('Notas agregadas')
            }else{
                alumnos['matters'].apply({matters:matter,note:note,state:'desaprobado'})
                alert('Notas agregadas')
            }
        }else{
            alert('Datos Incorrectos, revise los datos..')
        }
    }
    var foo3 =alumnos['matters'].map(function(bar){
        return '<li>'+bar.name+'</li> <li>'+bar.note+'</li><li>'+bar.state+'</li>'
      })
    document.getElementById("foo3").innerHTML = foo3;

}



const nameMatter = document.querySelector('.nombre')
const noteMatter= document.querySelector('.nota')
const stateMatter= document.querySelector('.estado')
const materias = document.querySelector('.materias')
const divContenerdor = document.querySelector('.libreta')
const td=document.createElement('td')
const tr=document.createElement('tr')














 
