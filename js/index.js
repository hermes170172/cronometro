var w = $("#cont").width() / 2; //obtenho na variavel w o número exato da metade da largura da tela

/** Para evitar que a tela trema enquanto o cronometro estiver rodando,
 * temos que o configurar como posição absolute
 * e depois para o posicionar sempre no meio da tela, usamos left e margin-left
 **/
$("#cont").css({
    position: "absolute",
    left: 50 + "%", // Início
    "margin-left": -w + "px",
});

/** Declaração das variaveis e objetos html*/
var hh = 0; //hora
var mm = 0; //minuto
var ss = 0; //segundo
var mil = 0; //milessegundo
var cron; // variavel de controle
var inicio = $(".btni");
var zerar = $(".btnz");

/** Função invocada pelo clique do botão inicio que guarda na variavel cron,
 *  num intervalo de 10 milessegundos, os valores vindos da função timer()*/
function start() {
    cron = setInterval(() => {
        timer();
    }, 10);
}
//Pausa o cronometro sem zerar as variaveis
function pause() {
    clearInterval(cron);
}

/** Para o cronometro e reseta todas variaveis */
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    mil = 0;

    $("#cont").text("00:00:00:00"); // renderiza o cronometro em 0
}

function timer() {
    mil++; //Incrementa 1 na variável mil

    if (mil == 100) {
        // Quando a variavel mil atinge 100, mil recebe o valor zero e a variavel ss incrementa 1
        mil = 0;
        ss++;
    }
    if (ss == 59) {
        // Quando a variavel ss atinge 59, ss recebe o valor zero e a variavel mm incrementa 1
        ss = 0;
        mm++;
    }
    if (mm == 59) {
        // Quando a variavel mm atinge 59, mm recebe o valor zero e a variavel hh incrementa 1
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

    $("#cont").text(format); //renderiza os valores formatados contidos na variavel format

    return format;
}
var ini = false;
/** Eventos de clique */
/** Inicia e pausa o cronometro */
inicio.click(() => {
    if (!ini) {
        start();
        inicio.text("PAUSE");
        ini = true;
    } else {
        pause();
        inicio.text("RETOMAR");
        ini = false;
    }
});
/**Para e zera o cronometro   */
zerar.click(() => {
    stop();
    inicio.text("INICIAR");
    ini = false;
});
