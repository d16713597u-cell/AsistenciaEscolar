let alumnos = [];

function agregarAlumno(){

let nombre =
document.getElementById("nombreAlumno").value;

if(nombre==="") return;

alumnos.push({
nombre:nombre,
asistencia:false
});

mostrarLista();

document.getElementById(
"nombreAlumno"
).value="";
}

function mostrarLista(){

let lista =
document.getElementById("listaAlumnos");

lista.innerHTML="";

alumnos.forEach((alumno,index)=>{

let item=document.createElement("li");

item.innerHTML=
`
${alumno.nombre}

<button onclick="marcar(${index})">
${alumno.asistencia ?
"Presente" :
"Ausente"}
</button>
`;

lista.appendChild(item);

});
}

function marcar(index){

alumnos[index].asistencia=
!alumnos[index].asistencia;

mostrarLista();

}
