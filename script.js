let visor = document.getElementById("visor");
let botoes = document.querySelectorAll(".num");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        visor.value = visor.value + botao.textContent;
    });
});

let apagar = document.querySelector(".apag");

apagar.addEventListener("click", function() {
    visor.value = visor.value.slice(0, -1);
});

let mais = document.getElementById("mais");

mais.addEventListener("click", function() {
    visor.value = visor.value + "+";
});

let menos = document.getElementById("menos");

menos.addEventListener("click", function() {
    visor.value = visor.value + "-";
});

let dividir = document.getElementById("dividir");

dividir.addEventListener("click", function() {
    visor.value = visor.value + "÷";
});

let multiplicar = document.getElementById("multiplicar");

multiplicar.addEventListener("click", function() {
    visor.value = visor.value + "×";
});

let virgula = document.getElementById("virg");

virgula.addEventListener("click", function() {
    visor.value = visor.value + ",";
});

let igual = document.getElementById("igual");

igual.addEventListener("click", function() {

     try {

        let expressao = visor.value;

        expressao = expressao.replaceAll("×", "*");
        expressao = expressao.replaceAll("÷", "/");
        expressao = expressao.replaceAll(",", ".");

        visor.value = eval(expressao);

    } catch {

        visor.value = "Erro";

    }

});
