const fecha = new Date();
document.getElementById("fechaActual").innerText =
fecha.toLocaleDateString("es-PE");
let alumnos =
JSON.parse(
localStorage.getItem("alumnos")
) || [];

mostrarLista();

function guardarDatos(){

localStorage.setItem(
"alumnos",
JSON.stringify(alumnos)
);

}

function agregarAlumno(){

let nombre =
document.getElementById(
"nombreAlumno"
).value;

if(nombre==="") return;

alumnos.push({
nombre:nombre,
seccion:document.getElementById("seccion").value,
asistencia:false
});
${alumno.nombre}
- Sección ${alumno.seccion}
guardarDatos();
mostrarLista();

document.getElementById(
"nombreAlumno"
).value="";
}

function marcar(index){

alumnos[index].asistencia=
!alumnos[index].asistencia;

guardarDatos();
mostrarLista();
}

function mostrarLista(){

let lista=
document.getElementById(
"listaAlumnos"
);

lista.innerHTML="";

alumnos.forEach((alumno,index)=>{

let item=
document.createElement("li");

item.innerHTML=
`
${alumno.nombre}

<button onclick="marcar(${index})">
${alumno.asistencia
? "Presente"
: "Ausente"}
</button>
`;

lista.appendChild(item);

});
  function exportarExcel(){

const hoja =
XLSX.utils.json_to_sheet(alumnos);

const libro =
XLSX.utils.book_new();

XLSX.utils.book_append_sheet(
libro,
hoja,
"Asistencia"
);

XLSX.writeFile(
libro,
"Asistencia.xlsx"
);

}
}
