var page = document.querySelector('.body');
var themeButton = document.querySelector('.themeButton');

themeButton.onclick = function() {
page.classList.toggle('lightTheme');
page.classList.toggle('darkTheme');
};

$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="Images/left.svg">',
    nextArrow: '<img src="Images/right.svg">',
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  let condition = true;

function forwards() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}

function backwards() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}

$('.menu_small_icon').click(function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});

let start = 0;
let end = 0;
$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forwards();
    } else if (start - end >= 100 && !condition) {
        backwards();
    }
});