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

    

    




    