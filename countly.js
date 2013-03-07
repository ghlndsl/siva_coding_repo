// Mongodb

countlyDb.collection('members').findOne({ $or : [ {email: req.body.email}, {username: req.body.username} ] }, function(err, member) {
    if (member or err){

    } else {
        createUser();
    }
}
findOne({}, function(err,members){});

countlyDb.collection('members').insert(newUser, {safe: true}, function(err, user) {
    if (user && !err) {
        var transport = nodemailer.createTransport('Sendmail', '/usr/sbin/sendmail'), message = {
            from:
            to:
            subject:
            html:
        });
        transport.sendMail(message, function(){});
        res.send(user[0]["_id"]);
    } else {

    }
}

countlyDb.collection('members').findOne({email: req.body.email}, function(err, member) {}

countlyDb.collection('events').remove({"_id": countlyDb.ObjectID(req.body.app_id)});
countlyDb.collection('app_users' + req.body.app_id).drop();



// a countly view is defined as a page corresponding to a url fragment such as #/manage/apps.
var countlyView = Backbone.View.extend({
    template: null,
    templateData: {},
    el: $("#content"),
    initialize: function(){ // compile view template
        this.template = Handlebars.compile($("#template-analytics-common").html());
    },
    dateChanged: function(){ // called when user changes the date selected
        this.renderCommon();
    },
    appChanged: function(){

    },
    render: function(){
        this.renderCommon();
        return this;
    },
    renderCommon: function(isRefresh){},
    refresh: function(){
        return true;
    },
    close: function(){
        $(this.el).unbind();
        $(this.el).remove();
    }
});
var Template = function(){
    
};
var T = new Template();
$.extend(Template.prototype, {
    
});

// some helpers functions to be used throught all views. includes custom popup, alert and confirm dialogs for the time being
(function(CountlyHepers, $, undefined){
    CountlyHelpers.popup = 
    CountlyHelpers.alert = 
    CountlyHelpers.confirm = 
    CountlyHelpers.initalizeSelect =
    function revealDialog(dialog){

    }
    $(document).ready(function(){
        $('#overlay').click(function(){
            $('.dialog:visible').fadeOut().remove();
            $(this).hide();
        });
        $('#dialog-ok, #dilaog-cancel, #dialog-continue').live('click', function(){
            $('.dialog:visible').fadeOut().remove();
            $('#overlay').hide();
        });
    });
}(window.CountlyHelpers = window.CountlyHelpers || {}, jQuery));

function fillKeyEvents(keyEvents) {
    if(!keyEvents.length) {
        return true;
    }
    $("#key-events").html("");
    for (var k = 0; k < keyEvents.length; k++) {

    }
}

window.DashboardView = countlyView.extend({
    selectedView: "#draw-total-sessions",
    initialize: function(){
        this.template = Handlebars.compile($("#dashboard-template").html());
    },
    render: function(){
        this.renderCommon();
        countlyLocation.drawGeoChart({height: 290});
        return this;
    },
    dateChanged: function(){

    },
    pageScript: function(){

    },
    renderCommon:
    refresh: function() {
        var self = this;
        $.when(countlySession.refresh(), countlyCarrier.refresh(),// other).then(function(){

        });
    }
})


window.UserView = countlyView.extend({
    renderCommon: function(isRefresh) {
        var loyaltyData = countlyUser.getLoyaltyData(),
                sessionData = countlySession.getSessionData(),
                durationData =
                userDP = countlySession.getUserDP();

        sessionData['chart-data'] = userDP.chartData;
        sessionData['chart-data'] = userDP.chartData;
        sessionData['chart-data'] = userDP.chartData;

        this.templateData = {

        };
        this.templateData['chart-data']['rows'] = userDP.chartData;

        if (!isRefresh) {
            $(this.el).html(this.template(this.templateData));
            $('.sortable').stickyTableHeaders();
            var self = this;
            $('.sortable').tablesorter({

            }).bind("sortEnd", function(sorter){

            });
            countlyCommon.drawTimeGraph(userDP.chartDP, "#dashboard-graph");
        }
    },
    refresh: function(){
        var self = this;
        $.when(countlySession.refresh()).then(function(){
            if (app.activeView != self) {
                return false;
            }
            self.renderCommon(true);
            newPage = $();
            newPage.find(".sortable").tablesorter({

            });
            $(self.el).find().replaceWith();
            $(self.el).find().replaceWith();

            $('.sortable').trigger("update");
            app.localize();
        });
    }
});

var AppRouter = Backbone.Router.extend({
    routes: {

    },
    readyToRender: false,
    activeView: null,
    dateToSelected: null,
    activeAppName: "",
    activeAppKey: "",
    main: function(){
        this.navigator("/", true);
    },
    dashboard: function(){
        this.renderWhenReady(this.dashboardView)
    }
})

(function(countlyDemo, $, undefined){
    countlyDemo.sessionDb = {2012: {}};
    countlyDemo.userDb = {2012: {}};
    countlyDemo.deviceDb = {2012: {}};
    countlyDemo.carrierDb = {2012: {}};
    countlyDemo.locationDb = {2012: {}};
    countlyDemo.deviceDetaDb = {2012: {}};
    countlyDemo.eventsDb = {
        "section": [
            {"_id":"no-segment", 2012:{}, "meta":{}}
        ],
        "purchase": [
        ],
        "score": [
        ]
    };

    var eventSegments = {};
    for (var event in countlyDemo.eventsDb){

    };

    var devices = ["Galaxy"]

})(window.countlyDemo = window.countlyDemo || {});

// 数据参数
countlyDemo.carrierDb,
{
    2012:{
        1:{ //第一月
            1:{ // 第一日
                "移动":{ //三大运营商之一
                    n:
                    t:

                }
            }
        },
        // 其他月
        "移动":{ //2012年 carrier汇总
            n:
            t:
            u:
        }
    },
    carriers: ["","",""]
};
// countlyDemo.deviceDb 和之前相似
// countlyDemo.deviceDetailDb 多了些， 如分辨率，平台版本
// 
// 如何设计这些数据？
// 因为他们是有互相制约的！