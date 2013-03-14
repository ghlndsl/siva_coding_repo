F.use([
    'common:select',
    'operation',
    'activeTips',
    'common:loginBox'
],function(){
    // define variables
    // define functions
    function selectRender(data){
        gallerySelect = new $.select('#gallery-select', {
            'width': 'auto',
            'speed': 0,
            'defaultValue': pic.gallery_sign,
            'height': 30,
            'listHeight': 160,
            hasOptions: data.gallery_list
        });
        gallery_list = data.gallery_list;
        if (data.gallery_list && gallery_list.length > 1){
            $('.select-container').bind('mouseenter', function(){
                if(!isSelectListShow){
                    $(this).addClass();
                    $('.select-container').css();
                }
            });
            $('.select-container').bind('mouseleave', function(){

            });
        } else {

        }
    }

    function downloadClick(event){
        if (!pic.user.is_login){
            event.preventDefault();
            LoginBox({"success": function(){
                // reload!
            }});
            return false;
        }
    }
    $('.gallery-download a').click(function(){

    });
    $('#share_flash_box').width(55);
    $('#pic_share_box').show();

    operation.getGalleryList({}, selectRender);

    $(document).bind("gallery-data-ready", function(){
        if($("#bdshare").length > 0 && gallery_list !== null){
            getSharePic();
        } else {
            setTimeout(function(){}, 4000);
        }
    });
});