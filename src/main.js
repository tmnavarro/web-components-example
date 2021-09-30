// Interagindo com a Shadow DOM via JS "pai"
const myComponents = document.querySelectorAll("my-component");

// Função para gera color aleatória
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Função usada para alteração de cor de fundo
// do primero <span> dentro do elemento
// que foi passado para ela.
function changeColor(elm) {
  const elementSpan = elm.querySelector("span");
  console.log(randomColor());
  elementSpan.style.background = `#${randomColor()}`;
}

// Loop em todos elementos do tipo <my-component> econtrado
// e setando o evento de click
for (myComponent of myComponents) {
  let rootComponent = myComponent.shadowRoot;
  rootComponent.addEventListener(
    "click",
    () => changeColor(rootComponent),
    false
  );
}
