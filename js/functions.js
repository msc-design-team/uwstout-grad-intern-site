$(function() {

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
        $('.nav-mobile-body').toggleClass('active-nav');
        $('.nav-mobile').toggleClass('bg-color-nav');
    });

    $('nav ul li a').click(function () {
        $('.nav-mobile-body').removeClass('active-nav');
        $('.nav-mobile').removeClass('bg-color-nav');
        $('#nav-toggle').removeClass('active');
    })

    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });

    $('.positions .job-card').hover(
        function() {
            $(this).find('.job-description-download').addClass('description-hover');
        }, function() {
            $(this).find('.job-description-download').removeClass('description-hover');
        }
    );

    $('.left-graph').hover(
        function() {
            $('.left-slide-in').addClass('left-active');
        }, function() {
            $('.left-slide-in').removeClass('left-active');
        }
    );

    $('.right-graph').hover(
        function() {
            $('.right-slide-in').addClass('right-active');
        }, function() {
            $('.right-slide-in').removeClass('right-active');
        }
    );
});