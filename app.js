
document.addEventListener('DOMContentLoaded', function () {
    function ocultarExibirElemento(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }

    const actionDiv = document.querySelector('.actionDiv');
    const button = document.createElement('button');
    button.classList = 'btn-iniciar-game';
    button.type = 'button';
    button.textContent = 'Iniciar Game';
    actionDiv.appendChild(button);

    const iniciar = document.querySelector('.btn-iniciar-game');

    iniciar.addEventListener('click', function () {
        ocultarExibirElemento(actionDiv);
        const campoInput = document.querySelector('.campo-input');
        const inputNumero = document.createElement('input');
        inputNumero.type = 'number';
        inputNumero.classList = 'input-numero';
        inputNumero.placeholder = 'Digite um número';
        const button = document.createElement('button');
        button.type = 'button';
        button.classList = 'btn-enviar-resultado';
        button.textContent = 'Enviar';
        campoInput.appendChild(inputNumero);
        campoInput.appendChild(button);

        const getNumero = document.querySelector('.input-numero');
        const btnEnviar = document.querySelector('.btn-enviar-resultado');
        
        btnEnviar.addEventListener('click', function () {
            const valor = getNumero.value;

        
            if (valor !== '') {
                const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10

        
                const valorNumero = parseInt(valor); // Converte o valor do campo em um número inteiro
        
                if (numeroAleatorio === valorNumero) {
                    console.log(`Você acertou! Número aleatório: ${numeroAleatorio}`);
                    exibirConteiner()
                    ocultarExibirElemento(campoInput)
                    ocultarExibirElemento(iniciar)
                } else {
                    console.log(`Você errou! Número aleatório: ${numeroAleatorio}`);
                }
            } else {
                alert('Preencha o campo antes de gerar o número aleatório.');
            }
        });
        
});

    function exibirConteiner(){
        
           const conteiner = document.querySelector('.container__conteudo')
        // Crie o elemento div com a classe 'container__informacoes'
    const containerInformacoes = document.createElement('div');
    containerInformacoes.classList.add('container__informacoes');

    // Crie o elemento de imagem
    const img = document.createElement('img');
    img.src = './img/trophy.png';
    img.alt = 'ícone de um troféu';

    // Crie o elemento div com a classe 'container__texto'
    const containerTexto = document.createElement('div');
    containerTexto.classList.add('container__texto');

    // Crie o elemento h1
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.classList.add('container__texto-azul');
    span.textContent = 'acertou!';
    h1.textContent = 'Você ';
    h1.appendChild(span);

    // Crie o elemento h2
    const h2 = document.createElement('h2');
    h2.textContent = 'Você descobriu o número secreto!';

    // Crie o elemento div com a classe 'input-numero'




    // Adicione os elementos à DOM, respeitando a estrutura
    containerTexto.appendChild(h1);
    containerTexto.appendChild(h2);
;
    containerInformacoes.appendChild(img);
    containerInformacoes.appendChild(containerTexto);
 

    // Adicione o elemento containerInformacoes ao body do documento
    conteiner.appendChild(containerInformacoes);
    }

});

