const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    });

    function mOver(obj)
    {
    obj.innerHTML="Vamos Lá!"
    }

    function mOut(obj)
    {
    obj.innerHTML="Saiba Mais"
    }