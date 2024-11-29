let tareas = [
    { id: 1, agregada: "Realizar guía de estudio", completada: false },
    { id: 2, agregada: "Comenzar Desafío 5 js", completada: false },
    { id: 3, agregada: "Hacer ejercicio", completada: false }
];

let contadorId = 4;

const inputTareaNueva = document.querySelector("#tareaNueva");
const btnAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");

function actualizarLista() {
    lista.innerHTML = ""; 
    tareas.forEach((tarea, index) => {
        const lista1 = document.createElement("li");
        lista1.innerHTML = `
            <span>${tarea.id}</span>
            <span class="tareas">${tarea.agregada}</span>
            <span >
                <button class="btn-borrar">X</button>
                <button class="btn-cambiar">✓</button>
            </span>`;  

        const btnBorrar = lista1.querySelector(".btn-borrar");
        btnBorrar.addEventListener("click", () => borrarTarea(index));
        const btnCambiar = lista1.querySelector(".btn-cambiar");
        btnCambiar.addEventListener("click", () => cambiarCheck(index));
        
        if (tarea.completada) {
            lista1.classList.add("realizada")
        ;}
        lista.appendChild(lista1);
    });
    total.textContent = tareas.length;
    realizadas.textContent = tareas.filter(c => c.completada).length;
}

btnAgregar.addEventListener("click", agregarTarea);
actualizarLista();

function agregarTarea() {
    const agregada = inputTareaNueva.value.trim();
    if (agregada === "") {
        alert("Ingrese una tarea"); return;}

    const tareaNueva = {
        id: contadorId++,
        agregada: agregada,
        completada: false};
    tareas.push(tareaNueva); 
    inputTareaNueva.value = ""; 
    actualizarLista(); 
}
function borrarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
}
function cambiarCheck(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarLista();
}