function slider() {

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        btnPrev = document.querySelector('.prev'),
        btnNext = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(index) {
        if (index > slides.length) {
            slideIndex = 1;
        } if (index < 1) {
               slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.style.display = 'none';
        });

        dots.forEach((item) => {
            item.classList.remove('dot-active');
        });

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    btnNext.addEventListener('click', () => {
        plusSlides(1);
    });
    btnPrev.addEventListener('click', () => {
        plusSlides(-1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i += 1) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

}

module.exports = slider;