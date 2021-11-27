$( document ).ready(function() {
    console.log( "ready!" );
});

class Tarea {
   constructor(id,texto) {
      this.id = id;
      this.texto = texto;
      this.estado = false;
   }

    finalizarTarea(){
       this.estado = true;
    }
  }


const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let tareas = {}

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    mostrarTareas()
})

listaTareas.addEventListener('click', e =>{
    btnAccion(e)

})

formulario.addEventListener('submit', event =>{
    event.preventDefault()
    setTarea(event)
})


const setTarea = event => {
    if (input.value.trim() === '') {
        console.log('esta vacio')
        return
        
    }
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }

    tareas[tarea.id] = tarea

    formulario.reset()
    input.focus()
    mostrarTareas()
}

const mostrarTareas = () =>{

    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTareas.innerHTML = `
        <div class="alert alert-dark text-center">
            No hay tareas pendientes!
        </div> `
        return
    }


    listaTareas.innerHTML = " "
    Object.values(tareas).forEach(tarea =>{
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto

        if (tarea.estado) {
            clone.querySelector('.alert').classList.replace('alert-secondary','alert-primary')
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle','fa-undo-alt')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}


const btnAccion = e =>{
    if (e.target.classList.contains('fa-check-circle')) {
        tareas[e.target.dataset.id].estado = true
        mostrarTareas()
        
    }
    if (e.target.classList.contains('fa-trash-alt')) {
        delete tareas[e.target.dataset.id]
        mostrarTareas()
    }
    if (e.target.classList.contains('fa-undo-alt')) {     
        tareas[e.target.dataset.id].estado = false
        mostrarTareas()
       
    }

    e.stopPropagation()
}
const URLGET = "https://jsonplaceholder.typicode.com/posts"

$("#btn1").click(()=>{
    $.post(URLGET, function(res, state){
        if (state === "success") {
            let datos = res;
            for (let dato of datos){
                console.log(dato.title)
            }
            
        }
    })
})

