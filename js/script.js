// class Tarea {
//     constructor(id,nombre,texto) {
//       this.id = id;
//       this.nombre = nombre;
//       this.texto = texto;
//       this.finalizada = false;
//     }

//     finalizarTarea(){
//       this.finalizada = true;
//     }
//   }

// const tareas = [];
 
// const tarea1 = new Tarea(1,"Tarea1","Texto de tarea1")
// const tarea2 = new Tarea(1,"Tarea2","Texto de tarea2")

// tareas.push(tarea1)
// tareas.push(tarea2)
// console.log(tarea1)
// tarea2.finalizarTarea()
// console.log(tareas)

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
    console.log(tareas)
    formulario.reset()
    input.focus()
    console.log(tarea)
    
}