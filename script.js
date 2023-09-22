document.addEventListener("DOMContentLoaded", function () {
    const exibirMenuBotao = document.getElementById("exibirMenu");
    const resultado = document.getElementById("resultado");

    exibirMenuBotao.addEventListener("click", function () {
        const opcoes = "Escolha na lista o que você quer que se faça:\n\n" +
                      "1 - Imprimir números de 1 a 10\n" +
                      "2 - Imprimir os números ímpares menores que 100\n" +
                      "3 - Imprimir a tabuada do número 8\n" +
                      "4 - Imprimir todas as tabuadas do número 1 ao 10";

        let escolha = prompt(opcoes); // Solicita que o usuário escolha uma opção

        if (escolha !== null) { // Verifica se o usuário pressionou "Cancelar"
            escolha = parseInt(escolha); // Converte a escolha para um número inteiro

            switch (escolha) {
                case 1:
                    imprimirNumerosDeUmADez();
                    break;
                case 2:
                    imprimirNumerosImparesMenoresQueCem();
                    break;
                case 3:
                    imprimirTabuadaDoOito();
                    break;
                case 4:
                    imprimirTodasTabuadasDeUmADez();
                    break;
                default:
                    alert("Opção inválida");
            }
        }
    });

    function imprimirNumerosDeUmADez() {
        let resultadoTexto = "Resultado:<br>Números de 1 a 10:<br>";
        for (let i = 1; i <= 10; i++) {
            resultadoTexto += i + " ";
        }
        resultado.innerHTML = resultadoTexto;
        resultado.style.color = "white"; // Define a cor do texto como branco
        resultado.style.fontSize = "28px"; // Define o tamanho da fonte
    }

    function imprimirNumerosImparesMenoresQueCem() {
        let resultadoTexto = "Resultado:<br>Números ímpares menores que 100:<br>";
        for (let i = 1; i < 100; i += 2) {
            resultadoTexto += i + " ";
        }
        resultado.innerHTML = resultadoTexto;
        resultado.style.color = "white"; // Define a cor do texto como branco
        resultado.style.fontSize = "28px"; // Define o tamanho da fonte
    }

    function imprimirTabuadaDoOito() {
        let resultadoTexto = "Resultado:<br>Tabuada do número 8:<br>";
        for (let i = 1; i <= 10; i++) {
            resultadoTexto += `8 x ${i} = ${8 * i}<br>`;
        }
        resultado.innerHTML = resultadoTexto;
        resultado.style.color = "white"; // Define a cor do texto como branco
        resultado.style.fontSize = "28px"; // Define o tamanho da fonte
    }

    function imprimirTodasTabuadasDeUmADez() {
        let resultadoTexto = "Resultado:<br>Todas as tabuadas do número 1 ao 10:<br>";
        for (let i = 1; i <= 10; i++) {
            resultadoTexto += `Tabuada do ${i}:<br>`;
            for (let j = 1; j <= 10; j++) {
                resultadoTexto += `${i} x ${j} = ${i * j}<br>`;
            }
        }
        resultado.innerHTML = resultadoTexto;
        resultado.style.color = "white"; // Define a cor do texto como branco
        resultado.style.fontSize = "28px"; // Define o tamanho da fonte
    }
});
