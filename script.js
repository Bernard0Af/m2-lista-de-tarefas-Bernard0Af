const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const ul = document.querySelector("ul");
  
  ul.innerText = ""
  
  for(let i = 0; i < tasks.length; i++){
    const iten = createTaskItem(tasks[i])
    ul.append(iten)
  }
}

function createTaskItem(task){

  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button")
  
  li.classList.add("task__item");
  div.classList.add("task-info__container");
  button.classList.add("task__button--remove-task")
  span.classList.add("task-type")
  
  p.innerText = task.title
  
  li.appendChild(div)
  div.appendChild(span);
  div.appendChild(p)
  li.appendChild(button)
  

    if(task.type.toLowerCase() == "urgente"){
    span.classList.add("span-urgent")
  }
    else if(task.type.toLowerCase() == "importante"){
    span.classList.add("span-important")
  }
    span.classList.add("span-normal")

  button.addEventListener("click", function(){
      tasks.splice(tasks.indexOf(task),1)
      renderElements(tasks)
  })
  return li
}

const button = document.querySelector(".form__button--add-task");

button.addEventListener("click", function(event){
  event.preventDefault();
  
  const input = document.querySelector("#input_title");
  const select = document.querySelector(".form__input--priority.input__box");
  
  const title = input.value;
  const type = select.value;
  
  tasks.type = type
  tasks.title = title

  const obj = {
      title: title,
      type: type
    };
  
  tasks.push(obj);
  
  renderElements(tasks)
});

renderElements(tasks)



