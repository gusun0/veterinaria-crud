const listaMascotas = document.getElementById('lista-mascotas');
const form = document.getElementById('form');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const btnGuardar = document.getElementById('btnGuardar');
const indice = document.getElementById('indice');


let mascotas = [
 {
	 tipo:'Gato', 
	 nombre: 'manchas',
	 dueno: 'Esteban'
 },
 {
	 tipo:'Perro', 
	 nombre: 'firulais',
	 dueno: 'Jhon'
 }
];


function listarMascotas(){

 const htmlMascotas = mascotas.map((mascota,index) => `<tr>
      <th scope="row">${index}</th>
      <td>${mascota.tipo}</td>
      <td>${mascota.nombre}</td>
      <td>${mascota.dueno}</td>
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
  listaMascotas.innerHTML = htmlMascotas;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index) => botonEditar.onclick = editar(index));
Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index) => botonEliminar.onclick = eliminar(index));
}


function enviarDatos(evento){
 evento.preventDefault();
 const datos = {
  tipo: tipo.value,
  nombre: nombre.value,
  dueno: dueno.value
 };

 console.log(datos);

 const accion = btnGuardar.innerHTML;
 switch(accion){
	case 'Editar':
		 // editar
		 mascotas[indice.value] = datos;
		 resetModal();
		 break;
	default:
		 // crear
 mascotas.push(datos);
		 break;
}
 listarMascotas();
}

function editar(index){
	return function handler(){
//  if(indice.value){
	  btnGuardar.innerText = 'Editar';
 // }
		const mascota = mascotas[index];
		nombre.value = mascota.nombre;
		dueno.value = mascota.dueno;
		tipo.value = mascota.tipo;
		indice.value = index;
	}
}

function resetModal(){
	nombre.value = '';
	dueno.value = '';
	tipo.value = '';
	indice.value = '';
	btnGuardar.innerHTML = 'Crear';
}


function eliminar(index){
	return function clickEnEliminar(){
		console.log(index);
		mascotas = mascotas.filter((mascota,indiceMascota) => indiceMascota !== index);
listarMascotas();
	}
}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;



	
