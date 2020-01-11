document.addEventListener('DOMContentLoaded', () => {

    //SCROLL Btn
    const scrollBtn = document.querySelector('.scroll__btn'),
        mane = document.querySelector('.mane');

    scrollBtn.addEventListener('click', (btn) => {
        const animationTime = 300,
            framesCount = 20;

        let scroller = setInterval(function() {
            let coordY = mane.clientHeight;
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;
            
            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
              // то скроллим на к-во пикселей, которое соответствует одному такту
              window.scrollBy(0, scrollBy);
            } else {
              // иначе добираемся до элемента и выходим из интервала
              window.scrollTo(0, coordY);
              clearInterval(scroller);
            }
          // время интервала равняется частному от времени анимации и к-ва кадров
          }, animationTime / framesCount);
        
    })

})