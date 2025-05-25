document.addEventListener("DOMContentLoaded", () => {
    const efeitoDano = document.getElementById("dano");
    const efeitoCura = document.getElementById("cura");

    const efeitoDefesa = document.getElementById("defesa");
    const msgGorila = document.getElementById("msg-gorila");
    const msgNinjas = document.getElementById("msg-ninja");

    const vidaTotalGorila = document.getElementById("vida-inteira-gorila");
    const vidaTotalNinja = document.getElementById("vida-inteira-ninja");

    const btnAtaque = document.getElementById("bt-ataque");
    const btnCura = document.getElementById("bt-cura");
    const btnDefesa = document.getElementById("bt-defesa");

    let vidaGorila = 100;
    let vidaNinjas = 100;
    let defesaAtiva = false;
    let jogando = false;

    function atualizarBarraVidaNinja() {
        vidaNinjas = Math.max(0, Math.min(vidaNinjas, 100));
        vidaTotalNinja.style.width = vidaNinjas + "%";
    }
    function atualizarBarraVidaGorila() {
        vidaGorila = Math.max(0, Math.min(vidaGorila, 100));
        vidaTotalGorila.style.width = vidaGorila + "%";
    }
    function aplicarDanoGorila() {
        if (defesaAtiva) {
            defesaAtiva = false;
        } else {
            vidaGorila -= 5;
        }
        atualizarBarraVidaGorila();
    }
});