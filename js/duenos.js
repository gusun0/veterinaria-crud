const form = document.getElementById('form');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const identificacion = document.getElementById('identificacion');
const btnGuardar = document.getElementById('btnGuardar');
const indice = document.getElementById('indice');
const listaDuenos = document.getElementById('lista-duenos');


let duenos = [
 {
	 nombre:'Naryie', 
	 apellido: 'Vazquez',
	 pais: 'Colombia',
	 identificacion: '12312399x'

 },
 {
	 nombre:'Juan David', 
	 apellido: 'Marin',
	 pais: 'Colombia',
	 identificacion: '12313349x'
 }
];


function listarDuenos(){

 const htmlDuenos = duenos.map((dueno,index) => `<tr>
      <th scope="row">${index}</th>
      <td>${dueno.nombre}</td>
      <td>${dueno.apellido}</td>
      <td>${dueno.pais}</td>
      <td>${dueno.identificacion}</td>
      <td>
	<div class="btn-group" role="group" aria-label="Basic example">

	<button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModal">  
	 <i class="fas fa-edit"></i>
	 </button>

	<button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
	</div>     
      </td>
    </tr>
      `).join(''); 
//  console.log(htmlMascotas);
  listaDuenos.innerHTML = htmlDuenos;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index) => botonEditar.onclick = editar(index));
Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index) => botonEliminar.onclick = eliminar(index));
}


function enviarDatos(evento){
 evento.preventDefault();
 const datos = {
  nombre: nombre.value,
  pais: pais.value,
  apellido: apellido.value,
  identificacion: identificacion.value,
 };

 console.log(datos);

 const accion = btnGuardar.innerHTML;
 switch(accion){
	case 'Editar':
		 // editar
		 duenos[indice.value] = datos;
		 resetModal();
		 break;
	default:
		 // crear
 duenos.push(datos);
		 break;
}
 listarDuenos();
}

function editar(index){
	return function handler(){
//  if(indice.value){
	  btnGuardar.innerText = 'Editar';
 // }
		const dueno = duenos[index];
		nombre.value = dueno.nombre;
		apellido.value = dueno.apellido;
		pais.value = dueno.pais;
		identificacion.value = dueno.identificacion;
		indice.value = index;
	}
}

function resetModal(){
	nombre.value = '';
	apellido.value = '';
	pais.value = '';
	identificacion.value = '';
	indice.value = '';
	btnGuardar.innerHTML = 'Crear';
}


function eliminar(index){
	return function clickEnEliminar(){
		console.log(index);
		duenos = duenos.filter((dueno,indiceDueno) => indiceDueno !== index);
listarDuenos();
	}
}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;



	
