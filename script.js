let adicionarBotao = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let todoid = 0;



adicionarBotao.addEventListener('click', function () {

    let div = document.createElement(`div`); // cria o elemento <div>


    div.classList.add(`toDoItem`); //adiciona classe na div
    div.setAttribute('id', todoid); //adiciona id na div
    toDoContainer.appendChild(div); // adiciona a div como elemento filho da div principal


    let paragraph = document.createElement(`p`); // Cria o elemento <p>
    let btnCheck = document.createElement(`button`); //cria o elemento <button>
    let btnRemove = document.createElement(`button`);

    paragraph.classList.add(`paragraph-styling`); // Adiciona Classe
    btnCheck.classList.add(`btnCheck`); // Adiciona Classe
    btnRemove.classList.add(`btnRemove`); // Adiciona Classe

    paragraph.innerText = inputField.value; // Adiciona o Valor do Input no <p>
    btnCheck.innerText = "✔";
    btnRemove.innerText = "✖";

    let toDoItem = document.getElementById(todoid)
    toDoItem.appendChild(paragraph); // Adiciona no documento a task
    toDoItem.appendChild(btnCheck);
    toDoItem.appendChild(btnRemove);

    inputField.value = ""; // Reseta o input

    btnCheck.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "green";
    });

    btnRemove.addEventListener('click', function () {
        toDoContainer.removeChild(div);
    });

})

function addId() {
    todoid++;
}