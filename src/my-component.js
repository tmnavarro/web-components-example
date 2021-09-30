class MyComponent extends HTMLElement {
  constructor() {
    // Aplica as propriedados do HTMLElement
    super();

    // Cria uma novo shadow component (DOM Interna)
    // interno ao MyComponent
    const shadow = this.attachShadow({ mode: "open" });

    const raiz = document.createElement("span");
    raiz.setAttribute("class", "raiz");

    const style = document.createElement("style");

    // Forma para receber attrs customizados dentro do component
    const text = document.createElement("span");
    text.setAttribute("class", "content-text");
    text.textContent = this.getAttribute("text");

    raiz.appendChild(text);

    // Get Color Attr component
    const colorComponent = this.getAttribute("color");

    raiz.appendChild(text);

    style.textContent = `
      .raiz {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: ${colorComponent ? colorComponent : "red"};
        color: #fff;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(raiz);
  }
}

// Cria Elemento Customizado usado no HTML <my-component></my-component>
// Nome separado por "-" é um uso obrigátorio
customElements.define("my-component", MyComponent);
