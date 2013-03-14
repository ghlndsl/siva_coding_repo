
var operation = require('operation'); //从哪里去找？ 
//gallery/static/gallery/ui/operation/operation.js
(function($){
    // some variables defined here
    // some functions defined here
    function timelineRender(data){

    }
    $(function(){
        $(document).bind('tile-image-hide-complete', function(){
            hideTotal++;
        });
        $(document).bind('gallery-data-ready', function(e, data){
            data = data['time_list'];
            timelineRender(data);
            $(document).trigger('gallery-timeline-dom-ready');
            // 其他
        });
        if(pic.owner.is_self == 1 && hideTotal !== 0 && !ieLowerCheck()){
            $('#gallery-hide-picture').show();
        }
    });
})(jQuery);