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
    listaTareas.innerHTML = " "
    Object.values(tareas).forEach(tarea =>{
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        clone.querySelectorAll('.far')[0].dataset.id = tarea.id
        clone.querySelectorAll('.far')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}


const btnAccion = e =>{
    if (e.target.classList.contains('fa-check-circle')) {
        console.log(e.target.dataset.id)
        tareas[e.target.dataset.id].estado = true
        mostrarTareas()
        console.log(tareas)
        
    }
    if (e.target.classList.contains('fa-trash-alt')) {
        delete tareas[e.target.dataset.id]
        mostrarTareas()
        console.log(tareas)
        
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

