<!DOCTYPE HTML>
<!--STATUS OK-->
<html lang="zh-CN">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{%$owner.user_name%}的画册_百度相册</title>
        <meta property="og:type" content="link" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="cache-control" content="no-cache"/>
        <meta content="IE=Edge,chrome=1" http-equiv="X-UA-Compatible">
        <meta content="initial-scale=1,user-scalable=no,width=device-width" name="viewport">
        <meta http-equiv="pragma" content="no-store">
        <meta http-equiv="imagetoolbar" content="no" />
        <meta name="baidu-site-verification" content="EXTpHsoC4fJTTuql" />
        <meta name="description" content="这里为{%$owner.user_name%}在百度相册中建立的画册，百度相册，中国最大的网络相册，珍藏您一生的记忆！"/>
        <meta name="keywords" content="{%$owner.user_name%}，画册"/>
        <script type="text/javascript">
            if (!window.console) {
                window.console = {
                    log: function() {}
                };
            }
            var pic = { // 定义全局数据，在自己module的test目录下哟定义
                user: {%json_encode($user)%},
                owner: {%json_encode($owner)%},
                picture_show_total:{%json_encode($picture_show_total)%},
                picture_hide_total:{%json_encode($picture_hide_total)%},
                template_list:{%json_encode($template_list)%},
                album_picture_total:{%json_encode($album_picture_total)%},
                galllery_sign:{%json_encode($gallery_sign)%},
                registerURL:{%json_encode($url.passport_register_url)%}
            };
        </script>
        {%if $user.is_login == 0%}
        <script type="text/javascript" src="http://passport.bdimg.com/passApi/js/uni_login_wrapper.js?cdnversion={$smarty.now}"></script>
        {%/if%}

        {%* 引入全站通用静态资源 *%}
        {%widget name="common:global_resources"%}

        <!-- 到时候这里会默认被插入widget引入的css -->
    </head>
    <body>
        <div id="gallery-last">
            <div class="gallery-mask"></div>
            <p class="gallery-tip">已经到了最后一页！</p>
        </div>
        {% if $user.is_login == 0 and $smarty.cookies["gallery_login"] eq null %}
        <!-- 引入loginbar -->
        {%/if%}
        <!-- 主要内容 -->
        {%widget name="content"%}

        <!-- 引入消息API -->
        <!-- 引入统计api -->
    </body>