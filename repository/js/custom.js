/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
            /*====================================
            SLIDESHOW SCRIPTS 
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                    { src: 'assets/img/1.1.jpg', fade: 1000, delay: 100000000 }, 
                    { src: 'assets/img/4.jpg', fade: 1000, delay: 100000000 }, 
                    { src: 'assets/img/5.jpeg', fade: 1000, delay: 100000000 }, //ADD YOUR IMAGES HERE
                     
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/15.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            /*====================================
                NAV SCRIPTS
            ======================================*/
            $(window).bind('scroll', function () {
                var navHeight = $(window).height() -50;
                if ($(window).scrollTop() > navHeight) {
                    $('nav').addClass('fixed');
                }
                else {
                    $('nav').removeClass('fixed');
                }
            });

            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/
          
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



