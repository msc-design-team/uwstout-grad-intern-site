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

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
});