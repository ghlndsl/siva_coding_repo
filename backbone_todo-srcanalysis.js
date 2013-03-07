


var AppView = Backbone.View.extend({
    el: $('#todoapp'),
    statsTemplate: _.template($("#stats-template").html()),

    events: {
        "keypress #new-todo": "createOnEnter",
        "click #clear-completed": "clearCompleted",
        "click #toggle-all": "toggleAllComplete"
    },

    initialize: function(){
        this.input = this.$("#new-todo");
        this.allCheckbox = this.$("#toggle-all")[0];
        this.footer = this.$("footer");
        this.main = this.$("#main");

        Todos.on('add', this.addOne, this);
        Todos.on('reset', this.addAll, this);
        Todos.on('all', this.render, this);

        Todos.fetch();
    },

    render: function(){
        var done = Todos.done().length;
        var remaining = Todos.remaining().length;

        if (Todos.length) {
            this.main.show();
            this.footer.show();
            this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
        } else {
            this.main.hide();
            this.footer.hide();
        }
        this.allCheckbox.checked = !remaining;
    },

    addAll: function(){
        Todos.each(this.addOne);
    },
    addOne: function(){
        var view = new TodoView({ model: todo});
        thsi.$('#todo-list').append(view.render().el);
    },

    createOnEnter: function(e){
        if (e.keyCode != 13) return;
        if (!this.input.val()) return;

        Todos.create({title: this.input.val()});
        this.input.val("");
    },
    clearCompleted: function(){
        _.each(Todos.done(), function(todo){ todo.clear(); });
        return false;
    },
    toggleAllComplete: function(){
        var done = this.allCheckbox.checked;
        Todos.each( function(todo) { todo.save({'done': done});});
    }
});

// finally, we kick things off by creating the App
var App = new AppView;



// Backbone 源代码
Backbone.sync
var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read': 'GET'
};
Backbone.sync = function(method, model, options){

};
Backbone.ajax = function() {

};

Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function(method, model, options, error) {
    var store = model.LocalStorage || model.collection.LocalStorage;

    if (typeof options == 'function') {

    }
    var resp;
    switch (method) {
        case "read": resp = model.id != undefined ? store.find(model) : store.findAll(); break;
        // other for create, update, delete
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error(" Record not found");
    }
};

}


var urlError = function(){
    throw new Error("a url property or function must be specified");
};

// Backbone.View
var View = Backbone.View = function(options){
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
};

var delegateEventSplitter = /^(\S+)\s*(.*)/;
var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];
_.extend(View, Event, {
    tagName: 'div',
    $: function(selector) {
        return this.$el.find(selector);
    },
    initialize: function(){},
    dispose: function(){
        this.undelegateEvents();
        if (this.model) this.model.off(null, null, this);
        if (this.collection) this.collection.off(null, null, this);
        return this;
    },
    remove: function(){
        this.dispose();
        this.$el.remove();
        return this;
    },
    // for small amount of DOM elements, where a full-blown template is not needed.
    // use "make" to manufacture elements, one at a time
    make: function(tagName, attributes, content){
        var el = document.createElement(tagName);
        if (attributes) Backbone.$(el).attr(attributes);
        if (content != null) Backbone.$(el).html(content);
        return el;
    },
    // change the view's elment( this.el property), including event re-delegation
    setElement: function(){},
    delegateEvents: function(){
    },
    undelegateEvents: function() {
        this.$el.unbind('.delegateEvents' + this.cid);
    },
    _configure: function(){},
    _ensureElement: function(){}
});

var History = Backbone.History = function(options) {
    this.handlers = [];
    _.bindAll(this, "checkUrl");
    this.location = options && options.location || root.location;
    this.history = options && options.history || root.history;
};
.extend(History.prototype, Events, {
    // the default interval to poll for hash changes
    interval: 50,
    getHash: function(window){
        var match = (window || this).location.href.match(/#(.*)$/);
        return match ? match[1] : "";
    },
    getFragment: function(fragment, forcePushState){

    },
    // start the hash change handling, return true if the current URL matches an existing route, false otherwise
    start: function(){
        if (History.started) throw new Error("Backbone.History has alreadly been started");
        History.started = true;

        this.options = _.extend({}, {root,"/"}, this.options, options);
        this.root = this.options.root;

    }
})

Backbone.history = new History;

// on(bind), off(unbind), fire(trigger)
// var obj = {};
// _.extend(obj, Backbone.,Events)
// obj,on('expand', function(){};
// obj,trigger('expand')
var Events = Backbone.Events = {
    on: function(events, callback, context){
        var calls, event, list;
        if (!callback) return this;

        events = events.split(eventSplitter);
        calls = this._callbacks || (this._callbacks = {});

        while (event = events.unshift()) {
            list = calls[event] || (calls[event] = []);
            list.push(callback, context);
        }
        return this;
    },
    off: function(){

    },
    fire: function(){

    }
};

var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    attributes || (attributes = {});

    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {silent: true});

}

define([], function(Backbone, AppView, Workspace, utils, ui){
    "use strict";

    $(function(){
        window.mobileSearch = window.mobileSearch || {
            views: {
                appview: new AppView
            },
            routers: {
                workspace: new Workspace()
            },
            utils: utils,
            ui: ui,
            defaults: {
                resultsPerPage: 16,
                safeSearch: 2,
                maxDate: '',
                minDate: "01/01/1970"
            }
        }

        window.mobileSearch.utils.toggleNavigation(false);
        Backbone.history.start();
    });
});

appview
photolist
resultlist



