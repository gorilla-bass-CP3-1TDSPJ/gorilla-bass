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
});