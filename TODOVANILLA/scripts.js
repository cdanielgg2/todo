//variables que almacenan el contenido de cada etiqueta
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const addButton = document.querySelector(".todo__add-button");

//darle un listener al boton
addButton.addEventListener("click", function () {
  // Obtener el valor del input
  const todoText = todoInput.value;
  //mostrar por consola el valor del input
  console.log(todoText)

  // Crear un nuevo elemento de lista
  const lista = document.createElement("div");
  lista.classList.add("todo__task");
  lista.innerHTML = `
  <input type="checkbox" class="todo__done-input" />
  <div class="todo__task-text">${todoText}</div>
  <button class="todo__task-edit-button">✏️</button>
  <button class="todo__task-delete-button">🗑️</button>
`;

  // Agregar el nuevo elemento de lista al contenedor de lista
  todoList.appendChild(lista);


  // Limpiar el valor del input
  todoInput.value = "";
});




// Agregar event listeners a los botones de editar y eliminar tareas
todoList.addEventListener("click", function (event) {
  const target = event.target;

  // Si se hace clic en el botón de edición
  if (target.classList.contains("todo__task-edit-button")) {
    const task = target.closest(".todo__task");
    const text = task.querySelector(".todo__task-text");

    // Convertir el texto en un input editable
    text.innerHTML = `<input type="text" value="${text.innerText}" />`;
    

    // Cambiar el texto del botón de edición a "Guardar"
    target.innerText = "Guardar";
  
  }

  // Si se hace clic en el botón de eliminar
  if (target.classList.contains("todo__task-delete-button")) {
    const task = target.closest(".todo__task");

    // Eliminar la tarea
    task.remove();
  }

  // Obtener todos los checkboxes
  const checkboxes = document.querySelectorAll('.todo__done-input');

  // Iterar sobre cada checkbox y agregar el evento 'change'
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
      // Obtener el elemento de texto correspondiente a la tarea
      const taskText = event.target.nextElementSibling;

      // Tachar o destachar el texto según el estado del checkbox
      if (event.target.checked) {
        taskText.style.textDecoration = 'line-through';
      } else {
        taskText.style.textDecoration = 'none';
      }
    });
  });

});

// Agregar un event listener al botón de "Borrar Seleccionados"
const deleteSelectedButton = document.querySelector(".todo__delete-selected-button");
deleteSelectedButton.addEventListener("click", function () {
  // Obtener todos los checkboxes seleccionados
  const selectedCheckboxes = document.querySelectorAll('.todo__done-input:checked');

  // Iterar sobre cada checkbox seleccionado y eliminar su tarea correspondiente
  selectedCheckboxes.forEach(checkbox => {
    const task = checkbox.closest(".todo__task");
    task.remove();
  });
});




