// Verificar se o Service Worker é suportado pelo navegador
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Falha ao registrar o Service Worker:", error);
      });
  });
}

// Função para adicionar uma nova tarefa
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var task = taskInput.value;

  if (task.trim() !== "") {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        // Faça algo quando a tarefa for marcada como realizada
        // Por exemplo: li.style.textDecoration = "line-through";
      } else {
        // Faça algo quando a tarefa for desmarcada como realizada
        // Por exemplo: li.style.textDecoration = "none";
      }
    });

    var span = document.createElement("span");
    span.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTask(task);
  } else {
    alert("Por favor, insira uma tarefa válida.");
  }
}

// Função para salvar a tarefa no localStorage
function saveTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para carregar as tarefas do localStorage
function loadTasks() {
  var taskList = document.getElementById("taskList");
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        // Faça algo quando a tarefa for marcada como realizada
        // Por exemplo: li.style.textDecoration = "line-through";
      } else {
        // Faça algo quando a tarefa for desmarcada como realizada
        // Por exemplo: li.style.textDecoration = "none";
      }
    });

    var span = document.createElement("span");
    span.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}

// FUNÇÃO LIMPAR LIST 

function limparLista() {
  var lista = document.getElementById('taskList'); // Obtém a ul
  lista.innerHTML = ''; // Limpa o conteúdo da ul
}

// Carregar as tarefas ao iniciar a aplicação
window.onload = loadTasks;