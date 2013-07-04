style:
b/ :M&M's build css/js
build/: M&M's build css/js的配置文件目录
css/
font/
images
js/
sass/


sass::
base: 全站通用样式scss库
biz: 业务级别的sass目录，比如MMS/WWW
widget: 独立的样式 component

CSS::
activity: campaign样式文件目录
award
camp
dashboard
intl
mini
mms
mobi
nav
profile
web
www




Style 目录文件说明
by leplay 2013-02-05

Style 目录指的是 ssh://your_username@git.wandoujia.com:29418/style.git 项目目录。本说明适用于 apps.wandoujia.com 和 www.wandoujia.com 页面的样式文件。

目录结构
SASS 目录结构
CSS 目录结构
JS 目录结构
图片目录
豌豆荚共用库/组件的 CDN 地址
Style 作为子模块的拉取方法
其它文档

目录结构
Style 目录中主要的子目录及其功能对应如下：
Style   ┒
           ┣ b/ //M&M’s build css/js 后的文件生成路径
           ┣ build/ //M&M's build css/js 的配置文件目录
           ┣ css/ //css 目录
           ┣ font/ //字体目录
           ┣ images/ //图片目录
           ┗ js/ //js 目录
SASS 目录结构
┏ SASS // 一般不需要直接访问
┠─ base ┒ 全站通用样式 scss 库
┃─ biz ┒ 业务级别的 sass 目录，比如 MMs / WWW
┃─ widget ┒ 独立的样式 component
CSS 目录结构
┏ css //对应 CDN 地址为 http://s.wdjimg.com/style/css/*
┠─ base ┒ 基础样式文件目录
┃             ┣ basic.css //基础的风格定义：链接、行高、字体、清楚浮动等
┃             ┣ common.css //仅作为保持老页面的正常显示之用。新增文件请勿调用。
┃             ┣ frids.css //流式布局的网格系统，通常应用在客户端网页。
┃             ┣ grids.css  //960px 网格系统，通常应用在 Web 端网页。
┃             ┣ normalize.css // http://github.com/necolas/normalize.css
┃             ┣ pattern.css //大部分的UI样式，比如块级标题，tab，导航菜单等
┃             ┣ pattern.v2.css //M&M’s 的共用样式
┃             ┣ reset.css //重置样式
┃             ┣ tipped.css //M&M’s 新版 bubble 组件样式
┃             ┣ typeset.css //页面排版样式：定义段落，标题，副标题，列表等基础元素
┃             ┗ webfont.css //webfont 引入 css
┃
┠─ biz ┬ activity  ┒Campaign 样式文件目录
┃         ┃              ┗ ...
┃         ┃
┃         ┣ award ┒ 设计奖样式文件目录
┃         ┃            ┗ ...
┃         ┃
┃         ┣ dashboard ┒详情页 dashboard 样式文件目录
┃         ┃                   ┗ ...
┃         ┃
┃         ┣ intl ┒http://www.snappea.com/ 样式文件目录
┃         ┃      ┗ ...
┃         ┃
┃         ┣ mini ┒http://mini.wandoujia.com/ 样式文件目录
┃         ┃         ┗ ...
┃         ┃
┃         ┣ mms ┒ M&M’s 样式文件目录(http://apps.wandoujia.com/)
┃         ┃          ┣ admin.css //管理后台样式
┃         ┃          ┣ appstore.css //精品应用商店样式
┃         ┃          ┣ category.css //分类页样式
┃         ┃          ┣ detail.css //详情页样式
┃         ┃          ┣ edit.css //编辑页样式
┃         ┃          ┣ essential.css //装机必备页样式
┃         ┃          ┣ frame.css //M&M’s HTML 中 container 的共用样式
┃         ┃          ┣ home.css //旧版首页样式
┃         ┃          ┣ home2013.css //2013年2月新版首页样式
┃         ┃          ┣ mini.css //迷你豌豆荚通用 HACK 样式
┃         ┃          ┣ reputation.css //好评榜样式
┃         ┃          ┣ search.css //搜索页样式
┃         ┃          ┣ special.css //游戏分类专题样式
┃         ┃          ┗ top.css //排行榜样式
┃         ┃
┃         ┣ mobi ┒ 手机端样式文件目录
┃         ┃          ┣ basic.css
┃         ┃          ┣ cat.css
┃         ┃          ┣ detail.css //移动版应用详情页面样式
┃         ┃          ┣ footer.css
┃         ┃          ┣ home.css
┃         ┃          ┣ list.css //移动版搜索结果页面样式
┃         ┃          ┣ sc.css
┃         ┃          ┣ shenren.css // 移动版神人活动样式
┃         ┃          ┣ special.css
┃         ┃          ┗ top.css
┃         ┃
┃         ┣ nav ┒ 导航样式文件目录（暂停新增文件）
┃         ┃        ┣ detail.css //导航详情页样式
┃         ┃        ┣ essential.css //导航装机必备应用精选页面样式
┃         ┃        ┣ header.css //导航 header 样式
┃         ┃        ┣ home.css //导航首页样式
┃         ┃        ┣ install.css //导航装机必备样式
┃         ┃        ┣ list.css //导航搜索结果页样式
┃         ┃        ┣ resize.css // 导航 media query 规则
┃         ┃        ┣ search-form.css //导航搜索框以及 suggestion 样式
┃         ┃        ┣ special.css // 导航特有的样式规则
┃         ┃        ┣ top.css //导航排行榜样式
┃         ┃        ┗ topics.css //导航专题页面样式
┃         ┃
┃         ┣ profile ┒ 个人 profile 文件目录
┃         ┃            ┗ ...
┃         ┃
┃         ┣ web ┒ Web 端样式文件目录
┃         ┃        ┣ app_box.css //用于首页和全部应用首页的app 显示容器
┃         ┃        ┣ apps.css //http://www.wandoujia.com/apps/
┃         ┃        ┣ category.css
┃         ┃        ┣ detail.css //Web 版详情页
┃         ┃        ┣ device.css // 设备管理页面样式
┃         ┃        ┣ home.css //Web 端首页样式
┃         ┃        ┣ install.css //Web 端装机必备样式
┃         ┃        ┣ list.css //Web 搜索结果页以及分类页样式
┃         ┃        ┣ mini_download.css // http://www.wandoujia.com/mini/ 样式
┃         ┃        ┣ photosync_cloud.css //photosync 一些静态页面的样式
┃         ┃        ┣ photosync_help.css  //同上
┃         ┃        ┣ photosync_login.css //同上
┃         ┃        ┣ photosync_unlogin.css //同上
┃         ┃        ┣ photosync.css
┃         ┃        ┣ static.css //Web 端静态页面的样式（html 目录下）
┃         ┃        ┣ tag.css // WWW 游戏分类页样式
┃         ┃        ┣ top.css // http://www.wandoujia.com/top/
┃         ┃        ┣ topic.css //http://www.wandoujia.com/topic/
┃         ┃        ┗ web_frame.css //Web 端 header/footer 等基础样式
┃         ┃
┃         ┗ www  ┒
┃                        ┣ apps.css
┃                        ┣ basic.css
┃                        ┣ button.css
┃                        ┣ footer.css
┃                        ┣ header.css
┃                        ┣ index.css
┃                        ┣ suggestion.css
┃                        ┗ vars.css
┃
┠─ pool ┒ M&M’s 各页面真实 css 目录，biz/mms 引用此地址下的文件
┃           ┣ admin-comment.css //评论管理后台
┃           ┣ admin-mms.css //后台样式
┃           ┣ appstore-mms.css //精品应用商店
┃           ┣ award-detail-web.css //设计奖 web
┃           ┣ award-detail.css //设计奖
┃           ┣ award-list-web.css //设计奖 web 列表页
┃           ┣ award-list.css // 设计奖列表页
┃           ┣ bootstrap-responsive.css //
┃           ┣ bootstrap.css //
┃           ┣ bubble-mms.css // bubble 样式
┃           ┣ category-mms.css // 分类页样式
┃           ┣ comment.css // 评论样式
┃           ┣ detail-mms.css // 详情页
┃           ┣ detail.css // web 详情页
┃           ┣ dpl.css // 设计模式库样式
┃           ┣ edit-mms.css // 编辑页样式
┃           ┣ essential-mms.css // 装机必备样式
┃           ┣ highlighter.css //设计模式可代码高亮样式
┃           ┣ home-mms.css // 旧版首页样式
┃           ┣ home2013-mms.css // 2013年2月新版首页样式
┃           ┣ qunit.css //
┃           ┣ reputation.css // 好评榜样式
┃           ┣ search-mms.css // 搜索样式
┃           ┗ special-mms.css // 游戏分类页样式
┃
┖─ widget ┒
                   ┣ app.css
                   ┣ cat-sidebar.css //Web 端左侧分类导航样式
                   ┣ search-list.css //Web 端搜索结果页样式
                   ┣ share-plugin.css // 分享组件样式
                   ┣ switcher.css
                   ┗ upload.css



JS 目录结构

┏ js //对应 CDN 地址为 http://s.wdjimg.com/style/js/*
┠─ app ┒ 功能组件目录
┃           ┣ bubble //鼠标悬浮在应用时出现的 bubble
┃           ┣ carousel // 图片轮播插件
┃           ┣ lazyload //网页内容延迟加载
┃           ┣ music //音乐搜索 Onebox ，已停用
┃           ┣ popup  //点击安装弹出的引导窗口，弹出层
┃           ┣ snshare //分享组件
┃           ┣ suggestion //搜索框 suggestion
┃           ┗ upload //
┃
┠─ lib ┒ 库目录，调用地址为  http://s.wdjimg.com/style/js/lib/*.js
┃        ┣ backbone.js // mvc 框架
┃        ┣ jquery-1.6.3.js
┃        ┣ jquery-1.7.1.js
┃        ┣ jquery-1.7.2.js
┃        ┣ jquery-1.8.3.js
┃        ┣ jquery-ui-sortable.min.js // jQuery 拖拽排序插件
┃        ┣ jquery-qrcode.min.js // jQuery 生成二维码插件
┃        ┣ mustache.js // 前端模板库
┃        ┣ Narya.js // @Wangye 提供的与 Windows 客户端通信的组件
┃        ┣ require.js // require.js
┃        ┣ underscore.js // backbone依赖的基本工具库
┃        ┗ zepto.js // 移动端基本 js 库
┃
┠─ pool ┒
┃           ┣ app_comment.js //导航和 Web 详情页评论模块
┃           ┣ app_desc_viewmore.js //导航和 Web 详情页描述信息模块
┃           ┣ app_install.js //Web 端应用一键安装和应用推送模块
┃           ┣ category_menu.js //Web 端导航栏分类展示 js
┃           ┣ edit-mms.js  // M&M’s 编辑页 js
┃           ┣ highlighter.js //（设计模式库）代码高亮模块
┃           ┣ nav_app_install.js // 导航安装 js。已停用。
┃           ┗ share.js
┃
┃
┠─ run ┬ dashboard ┒ 详情页 dashboard 目录
┃         ┃                   ┗ ...
┃         ┃
┃         ┣ mini ┒ 迷你豌豆荚 js 目录
┃         ┃        ┗  …
┃         ┃
┃         ┣ mms ┒ M&M’s js 目录
┃         ┃          ┣ admin //管理后台目录
┃         ┃          ┣ app-interface //新用户装机必备目录
┃         ┃          ┣ app-interface.js //新用户装机必备
┃         ┃          ┣ appstore //精品应用商店目录
┃         ┃          ┣ appstore.js //精品应用商店
┃         ┃          ┣ award-web //设计奖 web 目录
┃         ┃          ┣ award-web.js //设计奖 web
┃         ┃          ┣ award.js //设计奖
┃         ┃          ┣ bubble-init.js // bubble 初始化
┃         ┃          ┣ category //分类目录
┃         ┃          ┣ category.js //分类
┃         ┃          ┣ comment //评论目录
┃         ┃          ┣ detail //详情页目录
┃         ┃          ┣ detail.js //详情页 js
┃         ┃          ┣ edit.js //编辑页 js
┃         ┃          ┣ essential //装机必备目录
┃         ┃          ┣ essential.js //装机必备
┃         ┃          ┣ home //首页目录
┃         ┃          ┣ home.js //首页 js
┃         ┃          ┣ home1.js // 小流量测试用的首页 js，已停用
┃         ┃          ┣ home2013 // 2013年2月新版首页目录
┃         ┃          ┣ home2013.js // 2013年2月新版首页
┃         ┃          ┣ lazyinit.js // lazyload 初始化
┃         ┃          ┣ reputation // 好评榜目录
┃         ┃          ┣ reputation.js // 好评榜
┃         ┃          ┣ search // 搜索目录
┃         ┃          ┣ search.js // 搜索
┃         ┃          ┣ searchbox.js // 搜索框 js
┃         ┃          ┣ special // 游戏分类页目录
┃         ┃          ┣ special.js // 游戏分类共用 js
┃         ┃          ┣ top // 排行榜目录
┃         ┃          ┣ top.js // 排行榜 js
┃         ┃          ┣ upload.js //
┃         ┃          ┣ versions // 版本页目录
┃         ┃          ┣ versions.js // 版本页
┃         ┃          ┗ webfont.js //
┃         ┃
┃         ┣ mobi ┒ 手机端 js 文件目录
┃         ┃          ┣ cat.js
┃         ┃          ┣ detail.js //移动版应用详情页面
┃         ┃          ┣ download.js
┃         ┃          ┣ footer.js
┃         ┃          ┣ home.js //移动版首页
┃         ┃          ┣ list.js //移动版搜索结果页面
┃         ┃          ┣ pics.js //移动版详情页面
┃         ┃          ┣ reputation.js
┃         ┃          ┣ shenren.js // 神人活动
┃         ┃          ┣ shenren_detail.js // 神人活动
┃         ┃          ┣ toggle_tab.js
┃         ┃          ┣ topgame.js
┃         ┃          ┣ view-more.js
┃         ┃          ┗  weixin.js
┃         ┃
┃         ┣ nav ┒ 导航 js 文件目录（停止新增文件）
┃         ┃        ┣ detail.js //导航详情页
┃         ┃        ┣ essential.js //导航装机必备应用精选页面
┃         ┃        ┣ home.js //导航首页
┃         ┃        ┣ init_bubble.js //导航初始化 bubble
┃         ┃        ┣ install.js //导航装机安装
┃         ┃        ┣ lazyload.js //导航延迟加载
┃         ┃        ┣ list.js //导航中的游戏，应用类目页面业务
┃         ┃        ┣ navigate.js //导航页面使用的 menu菜单下拉初始化
┃         ┃        ┣ shenren.js // 神人活动
┃         ┃        ┣ suggestion.js  //导航搜索框 suggestion
┃         ┃        ┣ top.js //导航排行榜
┃         ┃        ┗ topic.js //导航专题页面
┃         ┃
┃         ┣ profile ┒ profile js 目录
┃         ┃            ┗  …
┃         ┃
┃         ┗ web ┒ Web 端 js 文件目录
┃                     ┣  2012rewind.js
┃                     ┣ 2012rewindm.js
┃                     ┣ app_resizing.js
┃                     ┣ apps_home.js //Web  全部应用页面
┃                     ┣ beta.js
┃                     ┣ category.js //Web 分类页面
┃                     ┣ detail.js //Web 详情页面
┃                     ┣ device_apps.js //
┃                     ┣ device_main.js //
┃                     ┣ device_management.js //Web 设备管理
┃                     ┣ home.js //Web 首页
┃                     ┣ huafei.main.js
┃                     ┣ init_bubble.js //Web 初始化 bubble
┃                     ┣ install.js //Web 装机必备
┃                     ┣ list.js //Web 搜索结果页和分类页
┃                     ┣ photosync_newbie.js
┃                     ┣ photosync.js
┃                     ┣ search.js //Web 搜索页
┃                     ┣ sending_msg.js
┃                     ┣ shenren.js
┃                     ┣ static.js //Web html 目录下的静态页
┃                     ┗ tags.js
┖─ util ┒
             ┣ app_install.js // M&M’s 安装按钮
             ┣ client_tool.js // 获取客户端部分特征
             ┣ data_formate.js //
             ┣ device_tool.js  // Push组件
             ┣ ejs.min.js //
             ┣ ga_tracking.js // M&M's 安装按钮的 GA 事件统计
             ┣ head.min.js //
             ┣ html5shiv.js //
             ┣ jquery.color.js //
             ┣ jquery.cookie.js // 操作 cookie 的工具
             ┣ jquery.position.js //
             ┣ mini_pngHack.js // 迷你豌豆荚 png Hack
             ┣ share.js // 分享
             ┣ spinners.min.js //
             ┗ tipped.js // 2013年2月新版首页 bubble


图片目录
图片目录对应的是 images 文件夹，此目录原则上只能存取与样式有关的图片文件。其他与样式无关但想要上传到 CDN 的图片，请使用 图片上传服务。
豌豆荚共用库/组件的 CDN 地址
http://s.wdjimg.com/style/js/lib/Narya.js
http://s.wdjimg.com/style/js/lib/backbone-min.js
http://s.wdjimg.com/style/js/lib/jquery-1.6.3.js
http://s.wdjimg.com/style/js/lib/jquery-1.7.1.js
http://s.wdjimg.com/style/js/lib/jquery-1.7.2.js
http://s.wdjimg.com/style/js/lib/jquery-1.8.3.min.js
http://s.wdjimg.com/style/js/lib/jquery-ui-sortable.min.js
http://s.wdjimg.com/style/js/lib/jquery.qrcode.min.js
http://s.wdjimg.com/style/js/lib/mustache.js
http://s.wdjimg.com/style/js/lib/require.js
http://s.wdjimg.com/style/js/lib/underscore.js
http://s.wdjimg.com/style/js/lib/zepto.js



其它文档
豌豆实验室前端规范 —— CSS 编码规范
豌豆实验室前端规范 —— JavaScript 编码规范
豌豆实验室设计模式库
M&M’s 前端架构
