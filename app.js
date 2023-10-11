document.addEventListener('DOMContentLoaded', function () {
    // Função para ocultar/exibir elementos
    function ocultarExibirElemento(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }

    // Função para criar elementos HTML de forma genérica
    function createElement(element) {
        const newElement = document.createElement(element.tag);

        if (element.texto) {
            newElement.textContent = element.texto;
        }

        if (element.className) {
            newElement.className = element.className;
        }

        if (element.type) {
            newElement.type = element.type;
        }

        if (element.min) {
            newElement.setAttribute('min', element.min);
        }

        if (element.max) {
            newElement.setAttribute('max', element.max);
        }

        return newElement;
    }

    // Função para criar o botão de início
    function buttonIniciar() {
        const buttonInfo = {
            tag: 'button',
            texto: 'Iniciar',
            className: 'btn-iniciar-game'
        };
        const Info = {
            tag: 'h2',
            texto: 'Vamos jogar?',
            className: 'info-iniciar-game'
        };
        const buttonElement = createElement(buttonInfo);
        const infoElement = createElement(Info);
        const actionDiv = document.querySelector('.actionDiv');
        actionDiv.appendChild(infoElement);
        actionDiv.appendChild(buttonElement);
    }
    buttonIniciar();

    // Evento de clique no botão "Iniciar"
    const iniciar = document.querySelector('.btn-iniciar-game');
    iniciar.addEventListener('click', function () {
        const actionDiv = document.querySelector('.actionDiv');
        ocultarExibirElemento(actionDiv);
        const campoInput = document.querySelector('.campo-input');
        const containerInfo = {
            tag: 'div',
            className: 'container-input'
        };
        const container_input = createElement(containerInfo);
        const resultadoInfo = {
            tag: 'h2',
            texto: 'Escolha um número de 0 a 10!!'
        };
        const resultado = createElement(resultadoInfo);
        const inputNumeroInfo = {
            tag: 'input',
            type: 'number',
            className: 'input-numero',
            min: 0,
            max: 10
        };
        const inputNumero = createElement(inputNumeroInfo);
        const buttonInfo = {
            tag: 'button',
            type: 'button',
            className: 'btn-enviar-resultado',
            texto: 'Enviar'
        };
        const button = createElement(buttonInfo);
        container_input.appendChild(resultado);
        container_input.appendChild(inputNumero);
        container_input.appendChild(button);
        campoInput.appendChild(container_input);

        const getNumero = document.querySelector('.input-numero');
        const btnEnviar = document.querySelector('.btn-enviar-resultado');

        btnEnviar.addEventListener('click', function () {
            const valor = getNumero.value;

            let borderContainer = document.querySelector('.container');
            if (valor !== '') {
                //const numeroAleatorio = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10 (inclusivo)
                const numeroAleatorio = 4; // Gera um número aleatório entre 0 e 10 (inclusivo)

                const valorNumero = parseInt(valor);

                if (valorNumero > 10) {
                    resultado.innerHTML = `Você não entendeu o jogo? <br> Escolha um número de 0 a 10!`;
                    borderContainer.style.border = '1px solid red';
                    return;
                }

                if (numeroAleatorio === valorNumero) {
                    borderContainer.style.border = '1px solid #72b20c';
                    exibirConteiner(numeroAleatorio);
                    ocultarExibirElemento(campoInput);
                    ocultarExibirElemento(iniciar);
                } else {
                    resultado.innerHTML = `<span style="color:red">Você errou!</span><br>O número era ${numeroAleatorio}<br>Você chutou ${valorNumero}`;
                    getNumero.value = '';
                    getNumero.focus();
                    borderContainer.style.border = '1px solid red';
                }
            } else {
                borderContainer.style.border = '1px solid red';
                resultado.innerText = 'Escolha um número antes de enviar.';
            }
        });
    });

    function reload() {
        location.reload(); // Isso irá recarregar a página, reiniciando o jogo
    }

    // Função para exibir informações após acertar o número
    function exibirConteiner(numeroAleatorio) {
        const conteiner = document.querySelector('.container__conteudo');
        const containerInfo = {
            tag: 'div',
            className: 'container__informacoes'
        };
        const containerInformacoes = createElement(containerInfo);
        const imgInfo = {
            tag: 'img',
            src: './img/trophy.png',
            alt: 'ícone de um troféu'
        };
        const img = createElement(imgInfo);
        const containerTextoInfo = {
            tag: 'div',
            className: 'container__texto'
        };
        const containerTexto = createElement(containerTextoInfo);
        const h1Info = {
            tag: 'h1'
        };
        const h1 = createElement(h1Info);
        const spanInfo = {
            tag: 'span',
            className: 'container__texto-azul',
            texto: 'acertou!'
        };
        const span = createElement(spanInfo);
        h1.textContent = 'Você ';
        h1.appendChild(span);

        const h2Info = {
            tag: 'h2',
            texto: 'Você descobriu o número secreto!'
        };
        const h2 = createElement(h2Info);

        const h2_winnerInfo = {
            tag: 'h2',
            className: 'text_iniciar',
            texto: `Número era: ${numeroAleatorio}`
        };
        const h2_winner = createElement(h2_winnerInfo);

        const buttonWinnerInfo = {
            tag: 'button',
            className: 'btn_winner',
            texto: 'Jogar novamente'
        };
        const buttonWinner = createElement(buttonWinnerInfo);
        buttonWinner.addEventListener('click', reload);


        containerTexto.appendChild(h1);
        containerTexto.appendChild(h2);
        containerTexto.appendChild(h2_winner);
        containerTexto.appendChild(buttonWinner);
        containerInformacoes.appendChild(img);
        containerInformacoes.appendChild(containerTexto);
        conteiner.appendChild(containerInformacoes);
    }
});