const inputAddNode = document.querySelector(".input-add");
const buttonAddNode = document.querySelector(".button-add");
const todoDiv = document.querySelector(".div-todos");
let buttonDeleteNode = document.querySelector(".button-delete-js");
let buttonDoneNode = document.querySelector(".button-done-js");
const doneTodosDiv = document.querySelector(".done-todos-div");

let id = 0;

buttonAddNode.addEventListener("click", function () {
  if (inputAddNode.value != "") {
    id++;
    let div = document.createElement("div");
    div.className = `new-todo div${id}`;
    div.innerHTML = `<input type="text" class="input-todo-div input${id}" value="${inputAddNode.value}"> <button class="button-delete-js${id} todo-button">
  delete</button><button class="button-done-js${id} todo-button">done</button>`;
    todoDiv.append(div);
    inputAddNode.value = "";
    buttonDeleteNode = document.querySelector(`.button-delete-js${id}`);
    buttonDeleteNode.addEventListener("click", (event) =>
      document
        .querySelector(`.div${event.target.className[16]}`)
        .remove(todoDiv)
    );
    buttonDoneNode = document.querySelector(`.button-done-js${id}`);
    buttonDoneNode.addEventListener("click", function (event) {
      doneTodosDiv.innerHTML =
        doneTodosDiv.innerHTML +
        `<div class="todo-done-task">· ${
          document.querySelector(`.input${event.target.className[14]}`).value
        }</div>`;
      document
        .querySelector(`.div${event.target.className[14]}`)
        .remove(todoDiv);
    });
  }
});

// сделать кнопки через константы а не ls
// задавать индексы через класс каждой кнопке в buttonaddnode event
