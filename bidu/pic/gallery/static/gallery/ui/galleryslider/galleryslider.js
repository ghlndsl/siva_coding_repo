require('common:jquery.mousewheel');
(function($){
    // define variables
    function SinusoidaOut ( k ) {

    }
    jQuery.extend(jQuery.easing, {

    });
    var gallerySlider = {
        init: function(){

        },
        bindEvent: function(){
            var me = this;
            $(window).resize(function(){

            });
            $(document).bind('template-ready', function(){

            });
            $(document).bind('picture-recover', function(){

            });
            me.mouseWheel(galleryViewPort);
            me.btnTriggerSlide();
            me.timelineBind();
            me.keypressSlide();
            $(document).bind('mousewheel-bind', function(){
                me.mouseWheel(galleryViewPort);
            });
            me.mouseDragSlide(galleryViewPort);
            me.delImages();
        },
        mouseWheel: function(){
            var me = this;
            if(typeof elem == 'undefined'){
                elem = $document;
            }
            $(elem).bind('mousewheel', function(e, delta){
                if(delta > 0){
                    keypressSlideFlag && me.leftSlide();
                } else {
                    keypressSlideFlag && me.rightSlide(e);
                }
            });
        },
        leftSlide: function(){
            
        }
    };
    $(function(){
        gallerySlider.init();
    });
})(jQuery);