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

     btnAtaque.addEventListener("click", () => {
        turnoCompleto(() => {
            efeitoDano.style.display = "block";
            vidaNinjas -= 8;
            atualizarBarraVidaNinja();
            mostrarMensagem(msgGorila, "Gorila atacou!");
            mostrarMensagem(msgNinjas, "Ninjas recebem dano!");
            setTimeout(() => {
                efeitoDano.style.display = "none";
            }, 1000);
        });
    });
    btnCura.addEventListener("click", () => {
        turnoCompleto(() => {
            efeitoCura.style.display = "block";
            vidaGorila += 8;
            atualizarBarraVidaGorila();
            mostrarMensagem(msgGorila, "Gorila se curou!");
            setTimeout(() => {
                efeitoCura.style.display = "none";
            }, 1000);
        });
    });
    btnDefesa.addEventListener("click", () => {
        turnoCompleto(() => {
            efeitoDefesa.style.display = "block";
            defesaAtiva = true;
            mostrarMensagem(msgGorila, "Gorila se defende!");
            setTimeout(() => {
                efeitoDefesa.style.display = "none";
            }, 1000);
        });
    });

    function verificarFimDeJogo() {
        if (vidaNinjas <= 0) {
            mostrarMensagem(msgGorila, "Gorila venceu!", true);
            setTimeout(() => location.reload(), 5000);
            return true;
        } else if (vidaGorila <= 0) {
            mostrarMensagem(msgNinjas, "Ninjas venceram!", true);
            setTimeout(() => location.reload(), 5000);
            return true;
        }
    return false;
    }
    function turnoCompleto(callback) {
        if (jogando) return;
        jogando = true;
        callback();
        setTimeout(() => {
            if (verificarFimDeJogo()) return;
            if(defesaAtiva){
                mostrarMensagem(msgNinjas, "Ninjas tentam atacar, mas gorila defende!");
            }else{
                mostrarMensagem(msgNinjas, "Ninjas atacaram!");
                aplicarDanoGorila();
            }
           
            setTimeout(() => {
                if (!verificarFimDeJogo()) {
                    jogando = false;
                }
            }, 1000);
        }, 1000);
    }
});