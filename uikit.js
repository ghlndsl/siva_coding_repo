function Emitter(){
    this.callbacks = {};
}

Emitter.prototype.on = function(event, fn){
    (this.callbacks[event] = this.callbacks[event] || []).push(fn);
    return this;
}
Emitter.prototype.off = function(event, fn){
    var callbacks = this.callbacks[event];
    if (!callbacks) return this;

    if (1 == arguments.length) {
        delete this.callbacks[event];
        return this;
    }
    var i = callbacks.indexOf(fn);
    callbacks.splice(i, 1);
    return this;
};
Emitter.prototype.emit = function(event){
    var args = [].slice.call(arguments, 1)
        , callbacks = this.callbacks[event];

    if (callbacks) {
        for (var i = 0, len = callbacks.length; i < len; ++i){
            callbacks[i].apply(this, args);
        }
    }
    return this;
}
Emitter.prototype.once = function(event, fn){
    var self = this;
    function on(){
        self.off(event, on);
        fn.apply(this, arguments);
    }
    this.on(event, on);
    return this;
}

function read(file, fn) {
    fs.readFile(file, 'utf8', function(err, str){
        if (err) throw err;
        fn(str);
    })
}
function next(i){
    var name = components[i];
    if (!name) return;
    build(name, function(){
        next(++i);
    })
}
function build(name, fn){
}


exports.notify = function(title, msg){
    switch (arguments.length) {
        case 2:
            return new Notfication({title: title, message: msg})
                .show()
                .hide(4000);
        case 1:
            return new Notfication().show().hide();
    }
};
var list;
exports.Notfication = Notfication;
$(function(){
    list = $('<ul id="notifications">');
    list.appendTo('body');
});


function Notfication(options) {
    ui.Emitter.call(this);
    options = options || {};
    this.template = html;
    this.el = $(this.template);
    this.render(options);
    if (Notfication.effect) this.effect(Notfication.effect);
}

Notfication.prototype = new ui.Emitter;
Notfication.prototype.render = function() {
    var el = this.el
        , title = options.title
        , msg = options.message
        , self = this;
    el.find('.close').click(function(){

    });
    el.click(function(el){
        e.preventDefault();
        self.emit('click', e);
    });
    el.find('h1').text(title);
    if (!title) el.find('h1').remove();

    if ('string' == typeof msg){
        el.find('p').text(msg);
    } else if (msg) {
        el.find('p').replaceWith(msg.el || msg);
    }
    setTimeout(function(){
        el.removeClass('hide');
    }, 0);
};
Notfication.prototype.closable = function() {
    this.el.addClass('closable');
    return this;
};
Notfication.prototype.effect = function(type) {
    this._effect = type;
    this.el.addClass(type);
    return this;
};

Notfication.prototype.remove = function() {
    this.el.remove();
    return this;
}
