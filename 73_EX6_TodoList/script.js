document.addEventListener("DOMContentLoaded", function () {
  let inputText = document.getElementById("input-text");
  let addTaskbutton = document.getElementById("addTask");
  let taskList = document.getElementById("Items-list");

  addTaskbutton.addEventListener("click", () => {
    const tasktext = inputText.value;
    
    if (tasktext !== "") {
      addTask(tasktext);
      inputText.value = "";
    }
    console.log(tasktext);
  });

  function addTask(tasktext) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${tasktext}</span>
        <button class="delete button">Delete </button>
    `;

    taskList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () =>
      taskList.removeChild(li)
    );
  }
});
