const form = document.getElementById('form');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const identificacion = document.getElementById('identificacion');
const btnGuardar = document.getElementById('btnGuardar');
const indice = document.getElementById('indice');
const listaVeterinarias = document.getElementById('lista-veterinarias');


let veterinarias = [
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


function listarVeterinarias(){

 const htmlVeterinarias = veterinarias.map((veterinaria,index) => `<tr>
      <th scope="row">${index}</th>
      <td>${veterinaria.nombre}</td>
      <td>${veterinaria.apellido}</td>
      <td>${veterinaria.pais}</td>
      <td>${veterinaria.identificacion}</td>
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
  listaVeterinarias.innerHTML = htmlVeterinarias;
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
		 veterinarias[indice.value] = datos;
		 resetModal();
		 break;
	default:
		 // crear
 veterinarias.push(datos);
		 break;
}
 listarVeterinarias();
}

function editar(index){
	return function handler(){
//  if(indice.value){
	  btnGuardar.innerText = 'Editar';
 // }
		const veterinaria = veterinarias[index];
		nombre.value = veterinaria.nombre;
		apellido.value = veterinaria.apellido;
		pais.value = veterinaria.pais;
		identificacion.value = veterinaria.identificacion;
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
		veterinarias = veterinarias.filter((veterinaria,indiceVeterinaria) => indiceVeterinaria !== index);
listarVeterinarias();
	}
}

listarVeterinarias();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;



	
