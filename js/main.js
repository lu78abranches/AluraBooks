const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    });

    var botaoOnOut = document.getElementsByClassName("botoes__ancora");

    for (let i = 0; i < botaoOnOut.length; i++) {
        var botao = botaoOnOut[i];

        botao.addEventListener("mouseover", function() {
            this.innerHTML = "Vamos Lá!";
        });
    
        botao.addEventListener("mouseout", function() {
            this.innerHTML = "Saiba Mais";
        });
        
    }

    var botaoSaibaMais = document.getElementsByClassName("botoes__ancora");

    for (let i = 0; i < botaoSaibaMais.length; i++) {
        var saibaMais = botaoSaibaMais[i];

        saibaMais.addEventListener("click", function() {
            var legenda = document.getElementsByClassName("hide");
            for (let x = 0; x < legenda.length; x++) {
                var legend = legenda[x];
                legend.classList.remove("hide");
            }

            
        });

        
    
        
        
    }

    




    