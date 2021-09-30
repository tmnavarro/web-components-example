# web-components-example

### DOM

Árvore de componentes criada em memória para que se consiga manipular a estura HTML.

### Shadow DOM

Encapsulamento de WEB componentem dentro da esturura da DOM.

Todo que é Feito dentro do elemento encapsulado não transpassa para a DOM.

Usar "defer" para que o carregamento do script sejá após o carregamento completo da DOM.

<script src="my-component.js" defer></script>

Acesso ao Shadow DOM

document.querySelector('my-component').shadowRoot
