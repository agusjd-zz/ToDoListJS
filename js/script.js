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
    Object.values(tareas).forEach(tarea =>{
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        fragment.appendChild(clone)
    })
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