/*
why jQuery Style?
1 80% of time cost of a software goes to maintain.
2 hardly any software is maintained by the original author
3 code conventions improve readability, make new engineers understand new code quickly and throughly
*/

!(function(factory){
    if(typeof define === 'function'){
        define(['$'],factory);
    }else{
        factory($);
    }
})(function($){
    'use strict';
    var pluginName = 'pluginName';
    // blahblah
});

// kind of factory
(function($){
    'use strict';
    var pluginName = 'default';
    function plugin(opt){
        //
    }

    $[pluginName] = plugin;
})

// kind of factory
$('.foo').pluginName({
    // options
});
(function($){
    'use strict';
    var pluginName = 'default';
    function plugin(element, opt){
        //
    }
    $.fn[pluginName] = function(opt){
        return this.each(function(){
            // blahblah
        })
    };
})

// $.ajax({dataType: 'jsonpi'})
(function ($) {
    'use strict';
    var pluginName = 'jsonpi';

    $.ajaxTransport( pluginName , function(opts, originalOptions, jqXHR) {
        // ...
    });
})

// custom jQuery selector
$('div:inline')
(function ($) {
    'use strict';
    var pluginName = 'defaultPluginName';

    $.expr[':'][pluginName] = function(element) {
        return $(element).css('display') === 'inline';
    };

    $(':inline');  // Selects ALL inline elements
    $('a:inline'); // Selects ALL inline anchors
})

// custom jQuery Event
$('#ele').on('customEvent', function(){}); // bind
$('#ele').trigger('customEvent');// trigger

(function ($) {
    'use strict';
    var eventName = 'customEventName';

    $.event.special[eventName] = {
        // called when the event is bound
        setup: function(data, namespaces) {
            var $this = $(this);
        },
        // called when event is unbound
        teardown: function(namespaces) {
            var $this = $(this);
        },
        // called when event is dispatched
        handler: function(event) {
            var $this = $(this);
        },
        // similar to setup, but is called for each event being bound
        add: function(event) {
            var $this = $(this);
        },
        // similar to teardown, but is called for each event being unbound
        remove: function(event) {
            var $this = $(this);
        }
    };

    // bind custom event
    $("#element").on("customEventName.myNamespace", function(evt) {});
    // remove all events under the myNamespace namespace
    $("#element").off(".myNamespace");

})

// custom form element value hook
$('textarea.foo').val()
(function ($) {
    'use strict';

    $.valHooks.textarea = {
        get: function( elem ) {
            return elem.value.replace( /\r?\n/g, "\r\n" );
        }
    };

})

/*
indention: the unit of indentations is four spaces
variable name: camelCase: var thisIsMyValue = 'foo'
method name: camelCase: function thisisMyMethod(){}
when we write write Ruby or Python, you use under_scored method names and CamelCase class names.
@javascript world, Consider:
In browsers, all methods are camelCase.
In node.js's standard library, all methods are camelCase.
In commonjs, all methods are camelCase.
In jQuery, all methods are camelCase.
In MooTools, all methods are camelCase.
In Prototype, all method are camelCase.
In YUI, all method are camelCase.
In JavaScript: The Good Parts, all methods are camelCase.
*/

// Constant
var REMOTE_PORT = '8080';

// Class Nmae
var Greeter = Class.extend({
    name: null,
    _constructor: function(name){
        this.name = name;
    },
    greet: function(){
        alert('xx:' + this.name);
    }
})

// Variables Declare
var a = "alpha";
var b = "beta";
var c = "chi";
// why?
var a = "alpha",
    b = "beta" // <-- note the forgotten comma
    c = "chi"; // <-- and now c is global


// Leading Commas
var hero = {
    firstName: 'Bob'
  , lastName: 'Parr'
  , heroName: 'Mr. Incredible'
  , superPower: 'strength'
};

// Why?

// jQuery Object


// Prefix jQuery object variables with a $. The dollar notation on all jQuery-related variables helps us easily distinguish jQuery variables from standard JavaScript variables at a glance.
// bad
var sidebar = $('.sidebar');
var that = $(this);

// good
var $sidebar = $('.sidebar');
var $this = $(this);
Method Chains

// Use indentation when making long method chains, and avoid more than 6 methods chained. Less method chains, more friendly debugging.
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();
// good
$('#items')
.find('.selected')
  .highlight()
  .end()
.find('.open')
  .updateCount();

// Determine jQuery Object

// Determine if an object is a jQuery object
// bad (fast)
if( obj.jquery ){}

// good (slow)
if( obj instanceof jQuery){}

// Document Ready
// bad
$(function() {
    // Handler for .ready() called.
});

// good
$(document).ready(function() {
    // Handler for .ready() called.
});


// Event Bind
// bad
$( "#members li a" ).bind( "click", function( e ) {} );

// good
$( "#members li a" ).on( "click", function( e ) {} );

// good
$( "#members li a" ).click( function( e ) {} );


// Event Live
// bad
$( "#members li a" ).live( "click", function( e ) {} );

// good
$( document ).on( "click", "#members li a", function( e ) {} );

Event Delegate

// bad
$( "#members" ).delegate( "li a", "click", function( e ) {} );

// good
$( "#members" ).on( "click", "li a", function( e ) {} );


// Event Prevent
// bad
$(".btn").click(function(event){
    // @more: http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/
    return false;
});

// good
$(".btn").click(function(event){
    event.preventDefault();
});
// good
$(".btn").click(function(event){
    event.preventDefault();
    event.stopImmediatePropagation()
});
// good
$(".btn").click(function(event){
    event.stopPropagation();
    event.preventDefault();
    event.stopImmediatePropagation();
});


// Element Create
// bad
$('<a />')
  .attr({
    id : 'someId',
    className : 'someClass',
    href : 'somePath.html'
  });

// good
$('</a>', {
    id : 'someId',
    className : 'someClass',
    href : 'somePath.html'
});


// Element Exists
// bad
if ($('#myElement')[0]) {
    // balabala...
}

// good
if ($('#myElement').length) {
    // balabala...
}


// Element Access

// Number Compare

/*
    Array Traversal
*/
var array = new Array(100);
// bad (faster)
for (var i=0,l=array.length; i<l; i++) {
    console.log(i, array[i]);
}

// good (slow)
$.each (array, function (i, value) {
    console.log(i, value);
});

// better (fast)
array.forEach(function(value, i){
    console.log(i, value);
});


/*
    Async Programing
*/
// bad
$.ajax({
    url: "cgi/example"
    , success: function() { alert("success"); }
    , error: function() { alert("error"); }
    , complete: function() { alert("complete"); }
});

// good
var jqxhr = $.ajax( "cgi/example" )
    .done(function() { alert("success"); })
    .fail(function() { alert("error"); })
    .always(function() { alert("complete"); });


// Type Determine



// Performance

/*
Cache jQuery lookups
*/
// bad
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// good
function setSidebar() {
  var $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
For DOM queries use Cascading $('.sidebar ul') or parent > child $('.sidebar > .ul'). jsPerf


/*
    Use find with scoped jQuery object queries.
*/
// bad
$('.sidebar', 'ul').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good (slower)
$sidebar.find('ul');

// good (faster)
$($sidebar[0]).find('ul');


