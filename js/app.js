$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,

        nav: true,
        dots: false,

        navText: ["<img src='images/Arrow-left.svg'>",
            "<img src='images/Arrow-right.svg'>"
        ],
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.owl-two').owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        navText: ["<img src='images/Prev-arrow-black.svg'>",
            "<img src='images/Next-arrow-black.svg'>"
        ],
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
});