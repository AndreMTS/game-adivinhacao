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

        if (element.textoHTML) {
            newElement.innerHTML = element.textoHTML;
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
            textoHTML: `Vamos jogar?<br> 
                        vou pensar em um número de 0 a 100!<br>
                        e você tenta adivinhar!`,
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
            texto: 'Qual número estou pensando!?'
        };
        const resultado = createElement(resultadoInfo);
        const inputNumeroInfo = {
            tag: 'input',
            type: 'number',
            className: 'input-numero',
            min: 0,
            max: 100
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

        // Função para gerar um número aleatório entre 0 e 100
        function gerarNumeroAleatorio() {
            return Math.floor(Math.random() * 101); // Gera um número aleatório entre 0 e 100
        }

        let numeroAleatorio = gerarNumeroAleatorio();
        let tentativas = 0;

        btnEnviar.addEventListener('click', function () {
            const valor = getNumero.value;
            let borderContainer = document.querySelector('.container');

            if (valor !== '') {
                debugger
                const valorNumero = parseInt(valor);
                tentativas++;

                if (valorNumero < numeroAleatorio) {
                    resultado.innerHTML = 'Tente um número maior!';
                } else if (valorNumero > numeroAleatorio) {
                    resultado.innerHTML = 'Tente um número menor!';
                } else {
                    // Se o jogador acertar o número
                    borderContainer.style.border = '1px solid #72b20c';
                    exibirConteiner(numeroAleatorio)
                    resultado.innerHTML = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
                    ocultarExibirElemento(campoInput);
                    ocultarExibirElemento(iniciar);
                }

                getNumero.value = '';
                getNumero.focus();
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
