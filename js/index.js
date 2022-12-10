var w = $("#cont").width() / 2;

$("#cont").css({
    position: "absolute",
    left: 50 + "%",
    "margin-left": -w + "px",
});
var hh = 0;
var mm = 0;
var ss = 0;
var mil = 0;
var cron;
var inicio = $(".btni");
var zerar = $(".btnz");

function start() {
    cron = setInterval(() => {
        timer();
    }, 10);
}
//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    mil = 0;

    document.getElementById("cont").innerText = "00:00:00:00";
}

function timer() {
    mil++; //Incrementa +1 na variável ss

    if (mil == 100) {
        //Verifica se deu 59 segundos
        mil = 0; //Volta os segundos para 0
        ss++; //Adiciona +1 na variável mm
    }
    if (ss == 59) {
        //Verifica se deu 59 minutos
        ss = 0; //Volta os minutos para 0
        mm++; //Adiciona +1 na variável hora
    }
    if (mm == 59) {
        mm = 0;
        hh++;
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format =
        (hh < 10 ? "0" + hh : hh) +
        ":" +
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss) +
        ":" +
        (mil < 10 ? "0" + mil : mil);

    document.getElementById("cont").innerText = format;

    return format;
}
var ini = 0;
inicio.click(() => {
    if (ini == 0) {
        start();
        inicio.text("PAUSE");
        ini = 1;
    } else if (ini == 1) {
        pause();
        inicio.text("RETOMAR");
        ini = 0;
    }
});
zerar.click(() => {
    stop();
    inicio.text("INICIAR");
    ini = 0;
});
