
/*
handlebars, mustache.js, jade
underscore.js

backbone.js
angular.js
$.widget factory, jQuery.Controller, jQuery plugin

code structure
modular pattern, inheritance pattern, prototype pattern, sandbox pattern, observer(pubsub) pattern, revealing module pattern

routes.js, history.js

store.js, jQuery offline, persistjs - (localstorage)

modernizr

LAB.JS
require.js
lazyload

grunt.js

*/



// Router.js
// a minimalist url-style routing library, extracted from connect
var Router = require('routes');
var router = Router();
var noop = function(){};

router.addRouter('/articles/:title?', noop);
router.addRouter('/:controller/:action/:id.:format?', noop);

console.log(router.match("/articles"));
console.log(router.match("/posts/show/1.json"))
{
    params: {
        controller: 'posts',
        action: 'show',
        id: '1',
        format: 'json'
    },
    splats: [],
    route: '/:controller/:action/:id.:format?',
    fn:[function]
}
route.fn.apply([req, res, route.params, route.splats]);

// store.js
// store.js exposes a simple API for cross browser local storage
// Store 'marcus' at 'username'
store.set('username', 'marcus')
// Get 'username'
store.get('username')
// Remove 'username'
store.remove('username')
// Clear all keys
store.clear()
// Store an object literal - store.js uses JSON.stringify under the hood
store.set('user', { name: 'marcus', likes: 'javascript' })
// Get the stored object - store.js uses JSON.parse under the hood
var user = store.get('user')
alert(user.name + ' likes ' + user.likes)
// Get all stored values
store.getAll().user.name == 'marcus'

var storeWithExpiration = {
    set: function(key, val, exp){
        store.set(key, {val: val, exp: exp, time: new Date().getTime()})
    },
    get: function(key){
        var info = store.get(key);
        if(!info){return null}
        if (new Date().getTime() - info.time > info.exp) return null;
        return info.val;
    }
}

// mockjax.js
https://github.com/appendto/jquery-mockjax
// ajax request mocking, provides request/response mocking for ajax requests with jQuery and provides all standard behaviors in request/response flow
// Defining a JSON string inline requires a JSON.stringify method to be available. For some browsers you may need to include json2.js, which is included in the lib folder
// What Mockjax does at this point is replace the $.ajax method with a wrapper that transparently checks the URL being requested. If the URL matches one defined by $.mockjax(), Mockjax intercepts the request and sets up a mock XMLHttpRequest object before executing the jQuery.ajax handler. Otherwise, the request is handed back to the native $.ajax method for normal execution. One benefit in this implementation detail is by simulating the XMLHttpRequest object, the plugin continues to make use of jQuery’s native ajax handling.
$.getJSON('/restful/fortune', function(response) {
  if ( response.status == 'success') {
    $('#fortune').html( 'Your fortune is: ' + response.fortune );
  } else {
    $('#fortune').html( 'Things do not look good, no fortune was told' );
  }
});
$.mockjax({
    url: '/result/fortune', // url: /^\/data\/(quote|tweet)$/i
    responseTime: 750,
    responseText: {
        status: 'success',
        fortune: 'are you a turtle?!'
    }
});
// to capture url parameteres, use a capturing regexp for the url and a urlParams array to indicate the name of the parameters that will be captured.
$.mockjax{
    url: /^\/author\/([\d]+)\/isbn\/([\d\-]+)$/,
    urlParams: ['authorID','isbnNumber'],
    response: function(settings){
        var authorID = settings.urlParams.authorID;
        // etc
        //   response: function() {
        //    this.responseText = 'Hello world!';
        //  }
    }
}
// misc
// contentType: 'text/json'
headers: {
    etag: 'xyz123'
},
$.mockjaxSettings = {
  status:        200,
  statusText     'OK',
  responseTime:  500,
  isTimeout:     false,
  contentType:   'text/plain',
  response:      '',
  responseText:  '',
  responseXML:   '',
  proxy:         '',
  lastModified:  null,
  etag:          ''
};


// noty
// https://github.com/needim/noty
noty({
  text: 'Do you want to continue?',
  buttons: [
    {addClass: 'btn btn-primary', text: 'Ok', onClick: function($noty) {

        // this = button element
        // $noty = $noty element

        $noty.close();
        noty({text: 'You clicked "Ok" button', type: 'success'});
      }
    },
    {addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
        $noty.close();
        noty({text: 'You clicked "Cancel" button', type: 'error'});
      }
    }
  ]
});

$.noty.defaults = {
  layout: 'top',
  theme: 'defaultTheme',
  type: 'alert',
  text: '',
  dismissQueue: true, // If you want to use queue feature set this true
  template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
  animation: {
    open: {height: 'toggle'},
    close: {height: 'toggle'},
    easing: 'swing',
    speed: 500 // opening & closing animation speed
  },
  timeout: false, // delay for closing event. Set false for sticky notifications
  force: false, // adds notification to the beginning of queue when set to true
  modal: false,
  closeWith: ['click'], // ['click', 'button', 'hover']
  callback: {
    onShow: function() {},
    afterShow: function() {},
    onClose: function() {},
    afterClose: function() {}
  },
  buttons: false // an array of buttons
};



// alertify.js
// https://github.com/fabien-d/alertify.js
// alert dialog
alertify.alert("Message");
// confirm dialog
alertify.confirm("Message", function (e) {
    if (e) {
        // user clicked "ok"
    } else {
        // user clicked "cancel"
    }
});
// prompt dialog
alertify.prompt("Message", function (e, str) {
    // str is the input text
    if (e) {
        // user clicked "ok"
    } else {
        // user clicked "cancel"
    }
}, "Default Value");


// standard notification
// setting the wait property to 0 will
// keep the log message until it's clicked
alertify.log("Notification", type, wait);
// success notification
// shorthand for alertify.log("Notification", "success");
alertify.success("Success notification");
// error notification
// shorthand for alertify.log("Notification", "error");
alertify.error("Error notification");

