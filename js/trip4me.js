/**
 * Created by krm on 02/12/2017.
 */

$(document).ready(function(){

    var $window  = $(window),
    win_height_padded = $window.height() * 1.1;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),1));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });

    }

    $('.revealOnScroll.animated').each(function(index){
        var $this = $(this), offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated bounceInLeft bounceInRight pulse fadeInLeftBig fadeInRightBig')
        }
    });



    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -30
        }, 800);

        $('.collapse').removeClass('in');

    });





});