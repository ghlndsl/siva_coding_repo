
// @express lib/express.js
function createApplication() {
    var app = connect();
    utils.merge(app, proto); //proto = require('./application') @express
    app.request = { __proto__: req };
    app.response = { __proto__: res };
    app.init();
    return app;
}

//@ connect/lib/connect.js
exports = module.exports = createServer;
function createServer() {
    function app(req, res) { app.handle(req, res); }
    utils.merge(app, proto);
    utils.merge(app, EventEmitter.prototype);
    app.route = "/";
    app.stack = [];
    for (var i = 0; i < arguments.length; ++i) {
        app.use(arguments[i]);
    }
    return app;
};

// @express/lib/application -> proto of express
// proxy connect#use() to apply settings to mounted applications
app.use = function(){};

// express/application.js
app.init = function(){
    this.cache = {};
    this.settings = {};
    this.engines = {};
    this.viewCallbacks = {};
    this.defaultConfiguration();
};
app.defaultConfiguration = function(){
    // important!!
    this.enable('x-powered-by');
    this.set('env', process.env.NODE_ENV || 'development');

    this.use(connect.query());
    this.use(middleware.init(this));

    this.on('mount', function(parent){
        this.request.__proto__ = parent.request;
        this.response.__proto__ = parent.response;
        this.engines.__proto__ = parent.engines;
    });
    this._router = new Router(this);
    this.routes = this._router.map;
    this.__defineGetter__('router', function(){
        this._usedRouter = true;
        return this._router.middleware; // important!!!
    })
    this.locals = locals(this);

    this.set('views', process.cwd() + '/views');
    this.set('jsonp callback name', 'callback');

    this.configure('development', function(){
        this.set('json spaces',2);
    });
    this.configure('production', function(){
        this.enable('view cache');
    });
};

// @express/lib/application -> proto of express
// 同时挂载上了如get,post等http methods的方法，all等 其他如set, 辅助
methods.forEach(function(method){
    app[method] = function(path){
        if ('get' == method && 1 == arguments.length) return this.set(path);
        if (!this._usedRouter) this.use(this.router); // use, 类同于middleware 见defaultConfiguration中的__defineGetter__('router',cb);
        this._router[method].apply(this._router, arguments);
        return this;
    };
});



//@@ router/index.js && router/route.js
function Router(options) {
    this.map = {}; // mostly important
    this.middleware = function router(req, res, next){
        self._dispatch(req, res, next);
    };
}
// Router.prototype.param:  * Register a param callback `fn` for the given `name`.
methods.forEach(function(method){
    Router.prototype[method] = function(path){
        var args = [method].concat([].slice.call(arguments));
        this.route.apply(this, args);
        return this;
    };
});
Router.prototype.route = function(method, path, cbs){
    var route = new Route(method, path, cbs, {
        sensitive: this.sensitive//
    });
    // add it
    (this.map[method] = this,map[method] || []).push(route);
    return this;
};
// end @@router
// route dispatch aka the route middleware
Router.prototype._dispatch = function(){

}
app.path = function() {
    return this.parent
        ? this.parent.path() + this.route
        : '';
}
/* check if `setting` is enabled */
app.enabled = function(setting) {
    return !!this.set(setting);
};


for (var key in connect.middleware) {
    Object.defineProperty(
        exports,
        key,
        Object.getOwnPropertyDescriptor(connect.middleware, key)
    );
}

//@ connect

//@ connect/lib/connect.js
var EventEmitter = require('events').EventEmitter
    , proto = require('./proto')
    , utils = require('./utils');



// @connect/lib/proto.js
var app = module.exports = {};
var env = process.env.NODE_ENV || 'development';

app.use = function (route, fn){
    this.stack.push({ route: route, handle: fn }); // important!! fn -> function(req, res, next)
};
/*  handle server requests, punting them down the middleware stack. */
app.handle = function(req, res, out){
    function next(){
        layer = stack[index++];
        if (0 != path.toLowerCase().indexOf(layer.route.toLowerCase())) return next(err);
        layer.handle(req, res, next);
        next()
    }
    next();
};

app.listen = function(){
    var server = http.createServer(this);
    return server.listen.apply(server, arguments);
};