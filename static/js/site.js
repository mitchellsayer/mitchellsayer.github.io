
    var NEXT_SLIDE_INTERVAL = 3000;

    function buttons() {
        $(".button-collapse").sideNav();
    }

    function slider() {
        $(document).ready(function () {
            $('.slider').slider();
        });
        window.setTimeout(next_slide, NEXT_SLIDE_INTERVAL);
    }

    function next_slide() {
        $('.slider').slider('next');
        window.setTimeout(next_slide, NEXT_SLIDE_INTERVAL);
    }

    buttons();
    slider();