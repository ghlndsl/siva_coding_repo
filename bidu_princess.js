F.module("router/router", function(req, exp){
    var ns = req("namespace/namespace"),
        products = req("products/main");
    (function(ns){
        var App = ns,
            Generic = {},
            Userpanel = {},
            // other things
            ZhidaoHonor = {
                'model': ns.GenericModel,
                'view': ns.ZhidaoHonorView
            },
            ZhidaoProfile = {
                'model' : ns.GenericModel,
                'view' : ns.ZhidaoProfileView
            },
            ZhidaoAnslist = {
                'model' : ns.ZhidaoAnslistModel,
                'view': ns.ZhidaoAnslistView
            },
            ZhidaoAnslistContent = {
                'model' : ns.GenericModel,
                'view' : ns.GenericView
            },
            RightNav = {
                'model' : ns.GenericModel,
                'view' : ns.RightNavView
            },
            router = {
                views : {

                },
                models : {

                },
                onLoadingList : {

                },
                addModel : function(model, appendTo){

                },
                addView : function(){

                },
                types : {

                },
                analyzeModuleType: function(){

                },
                postData: function(postType, options){
                    var token = this.global.token,
                        request = [],
                        data = [],
                        callback = options.callback;
                    switch (postType) {
                        case "changeRelation":
                            request.push("/p/sys/submit/relation");
                            data.push(P.extend({"token": token}, options.postData));
                            break;
                    }

                    for(var i = 0, len = request.length; i < len; i++){
                        P.ajax.post(request[i], P.jsonToQuery(data[i]), callback);
                    }
                },
                getData: function(model, requestType, options){
                    if(!this.global.page_userInfo){

                    }
                    function errorHandler(){

                    }
                    function appendScript(script, callback){

                    }
                    var portrait = this.global.page_userInfo.portrait,
                        requests = [], query = [],
                        i, len, script;
                    var callback = function(){

                    };
                    switch(requestType){
                        case "zhidao-index":
                            requests.push("/p/sys/data/zhidao/anslist?");
                            query.push({'portrait': portrait});
                            requests.push("/p/sys/data/zhidao/profile?");
                            query.push({'portrait': portrait});
                            break;
                        case "space-index":
                        case "tieba-index":
                            break;
                        default:
                            break;
                    }
                };

            }
    })
})

F.module("zhidao_answerlist/zhidaoanslistview", function(req, exp){
    var superClass = req("base/view"),
        pageBar = req("util/pagebar"),
        hoverHandler;
    var pageBarContainerSelector = "zhidao-page-bar";

    var updatePageBar = function(pageNum){

    };
    var pageBarHandler = function(evt){

    };
    var generateHoverHandler = function(){

    };
    var emptyListBind = function(){

    };
    var hoverItem = function(e){

    };
    var bindHover = function(ele){

    };
    function ZhidaoAnslistView(model, el){
        this.model = model;
        this.el = el;
        this.init();
        this.addEventListener("update:viewready", (function(){
            updatePageBar.call(this,1);
            this.bindClick();
            emptyListBind.call(this);
            if(P.ie6){

            }
        }).bind(this));
        this.model.addEventListener("change:content", (function(evt){
            if(P.hasClass(this.el, "loading")){
                P.removeClass(this.el, "loading");
            }
        }).bind(this));
    }
    var fn = ZhidaoAnslistView.prototype = P.extend(superClass);
    fn.appendChildView = function(childView){

    };
    fn.setData = function(){

    };
    fn.bindClick = function(){
        var pageBarContainer = P.q(pageBarContainerSelector, this.el)[0];
        if (pageBarContainer) {
            P.on(pageBarContainer, 'click', pageBarHandler.bind(this));
        }
        var trackmanager = req('tracking/trackmanager');
        trackmanager.zhidaoAnswerlist(this.el);
    };
    return ZhidaoAnslistView;
});

