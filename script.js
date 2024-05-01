const inputAddNode = document.querySelector(".input-add");
const buttonAddNode = document.querySelector(".button-add");
const todoDiv = document.querySelector(".div-todos");
let buttonDeleteNode = document.querySelector(".button-delete-js");
let buttonDoneNode = document.querySelector(".button-done-js");
const doneTodosDiv = document.querySelector(".done-todos-div");

let id = 0;

function buttonAddFunc() {
  if (/[a-zа-яё0-9]/i.test(inputAddNode.value)) {
    inputAddNode.placeholder = "";
    id++;
    let div = document.createElement("div");
    div.className = `new-todo div${id}`;
    div.innerHTML = `<input type="text" placeholder="введите корректное название" maxlength="27" id="${id}"
     class="input-todo-div " value="${inputAddNode.value}"> <button id="${id}" class="button-delete-js${id} todo-button">
  X</button><button id="${id}" class="button-done-js${id} todo-button">✓</button><button id="${id}" class="todo-button
   add-subitem-button${id}">+</button>`;
    todoDiv.append(div);
    inputAddNode.value = "";
    buttonDeleteNode = document.querySelector(`.button-delete-js${id}`);
    buttonDeleteNode.addEventListener("click", (event) =>
      document.querySelector(`.div${event.target.id}`).remove(todoDiv)
    );
    buttonDoneNode = document.querySelector(`.button-done-js${id}`);
    buttonDoneNode.addEventListener("click", function (event) {
      if (
        /[a-zа-яё0-9]/i.test(
          document.getElementById(`${event.target.id}`).value
        )
      ) {
        if (
          document.querySelectorAll(`.item-checkbox${event.target.id}`)
            .length === 0 ||
          Array.from(
            document.querySelectorAll(`.item-checkbox${event.target.id}`)
          ).every((checkbox) => checkbox.checked)
        ) {
          if (
            document.querySelector(".delete-done-tasks-button").innerHTML ===
            "свернуть"
          ) {
            doneTodosDiv.innerHTML =
              doneTodosDiv.innerHTML +
              `<div class="todo-done-task">· ${
                document.getElementById(`${event.target.id}`).value
              }</div>`;
          } else {
            doneTodosDiv.innerHTML =
              doneTodosDiv.innerHTML +
              `<div hidden="true" class="todo-done-task">· ${
                document.getElementById(`${event.target.id}`).value
              }</div>`;
          }
          document.querySelector(`.div${event.target.id}`).remove(todoDiv);
          document
            .querySelector(".delete-done-tasks-button")
            .addEventListener("click", function (event) {
              if (event.target.innerHTML === "свернуть") {
                document
                  .querySelectorAll(".todo-done-task")
                  .forEach((el) => (el.hidden = true));
                event.target.innerHTML = "развернуть";
              } else {
                document
                  .querySelectorAll(".todo-done-task")
                  .forEach((el) => (el.hidden = false));
                event.target.innerHTML = "свернуть";
              }
            });
        } else {
          alert("не все пункты выполнены!");
        }
      } else {
        document.getElementById(`${event.target.id}`).value = "";
      }
    });
    document
      .querySelector(".input-todo-div")
      .addEventListener("focusout", function (event) {
        if (/[a-zа-яё0-9]/i.test(event.target.value)) {
          return;
        } else {
          event.target.value = "";
        }
      });
    let buttonAddSubitem = document.querySelector(`.add-subitem-button${id}`);
    buttonAddSubitem.addEventListener("click", function (event) {
      let subitemDiv = document.createElement("div");
      subitemDiv.className = `new-string-subitem subitem-div${event.target.id}`;
      subitemDiv.innerHTML = `<input class="checkbox-subitem item-checkbox${event.target.id}" 
      type="checkbox"><input type="text" placeholder="введите пункт" maxlength="27" class="input-todo-div-subitem" value="пункт">
      <button class="delete-subitem-button-style delete-subitem-button${event.target.id}">X</button>`;
      document.querySelector(`.div${event.target.id}`).append(subitemDiv);
      document
        .querySelectorAll(`.delete-subitem-button${event.target.id}`)
        .forEach(function (element) {
          element.addEventListener("click", (el) =>
            el.target.parentElement.remove()
          );
        });
    });
  } else {
    inputAddNode.placeholder = "введите корректное название";
    inputAddNode.value = "";
  }
}

buttonAddNode.addEventListener("click", () => buttonAddFunc());
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    buttonAddNode.click();
  }
});
