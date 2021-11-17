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
let cantidadDeTareas = () =>{
    return console.log("Cantidad de tareas pendientes: " , (listaTarea.length))
}

let listaTarea = []
let tarea = prompt("Ingrese la tarea pendiente");
listaTarea.push(tarea)
let tarea2 = prompt("Ingrese la tarea pendiente");
listaTarea.push(tarea2)
cantidadDeTareas()