
# the classic style
require "rubygems"
require "sinatra"

get '/' do
    erb :index
end

post '/signup' do
    Spam.deliver(params[:email])
end


mine :json, "application/json"

before do
    content_type :json
end

get '/events/recent.js' do
    Event.recent.to_json
end

# the modular style
module Postie
    class Applicatin < Sinatra::Base
        get '/' do
            erb :index
        end
    end
end

# deployment
# you could use the rackup cmd, but instead you should use 'shotgun' which handle reload for your app.
# config.ru for classic sinatra app
require "rubygems"
require "your-app-name"

run Sinatra::Application
# run Postie::Application

# More
amnesla - memecache
munch - recipes from websites re-presented
Postie - a rack middleware to provide postcode services

# rack
sinatra runs on rack

# Rack::Cache



# doc: Getting Started
Routes
Conditions
Return Values
Custom Route Matches
Static Files
Views/Templates
Filters
Helpers
Configuration
Environments
Error Handling
Rack middleware
Testing
Sinatra::Base - middlewares, Libraries, and Modular Apps
Scopes and Binding
Command Line
Requirement
The Bleeding Edge
Version
Further Reading

get '/hello/:name' do |n|
    "Hello #{n}!"
end

get '/download/*.*' do |path, ext|
    params[:splat]
  [path, ext] # => ["path/to/file", "xml"]
end

get '/foo', :agent => /Songbird (\d\.\d)[\d\/]*?/ do
    "You are using Songbird Version"
end

set(:probability) { |value| condition { rand <= value } }
get '/win_a_car', :probability => 0.1 do
  "You won!"
end

set(:auth) do |*roles|
    condition do
        unless logged_in? && roles.any? {|role| current_user.in_roles? role}
            redirect '/login/', '303'
        end
    end
end

get '/my/account', :auth => [:user, :admin] do
    "Your account details"
end

# Return Values
# an array with three elements: [status, headers, responsebody]
# responsebody, respond to #each
class Stream
    def each
        100.times {|i| yeild "#{i}\n"}
    end
end
get('/') {Stream.new}

# static Files
# nornally, static files are served from the ./public directory, you can specify a different location by setting the :public_folder option
set :public_folder, File.dirname(__FILE__) + '/Static'
file ./public/css/style.css is available as xx.com/css/style.css
use :static_cache_control setting to add Cache-Control Header info

get '/:id' do
  foo = Foo.find(params[:id])
  haml '%h1= bar.name', :locals => { :bar => foo }
end

less :stylesheet
sass :stylesheet, :style => :expanded

# named templates
template :layout do
  "%html\n  =yield\n"
end
template :index do
  '%div.title Hello World!'
end
get '/' do
  haml :index, :layout => !request.xhr?
end
# If a template named “layout” exists, it will be used each time a template is rendered.

# filters
before '/protected/*' do
  authenticate!
end

after '/create/:slug' do |slug|
  session[:last_slug] = slug
end

# helper, methods for use in route handlers and templates
helpers do
    def bar(name)
        "#{name} bar"
    end
end
module FooUtils
  def foo(name) "#{name}foo" end
end
helpers FooUtils, BarUtils


get '/:name' do
    bar(params[:name])
end

# using sessions
enable :sessions
use Rack::Session::Pool, :expire_after => 2592000
set :session_secret, 'super secret'

# passing
get '/guess/:who' do
  pass unless params[:who] == 'Frank'
  'You got me!'
end
get '/guess/*' do
  'You missed!'
end

# to get the result of calling another routes
get '/foo' do
    status, headers, body = call env.merge('PATH_INFO' => '/bar')
    [status, headers, body.map(&:upcase)]
end

get '/foo' do
  status 418
  headers \
    "Allow"   => "BREW, POST, GET, PROPFIND, WHEN",
    "Refresh" => "Refresh: 20; http://www.ietf.org/rfc/rfc2324.txt"
  body "I'm a tea pot!"
end

# using stream helper
# Server Sent Events and can be used as the basis for WebSockets.
get '/' do
  stream do |out|
    out << "It's gonna be legen -\n"
    sleep 0.5
    out << " (wait for it) \n"
    sleep 1
    out << "- dary!\n"
  end
end

# using keep_open, long polling with server which support it.
# long polling
set :server, :thin
connections = []
get '/subscribe' do
  # register a client's interest in server events
  stream(:keep_open) { |out| connections << out }
  # purge dead connections
  connections.reject!(&:closed?)
  # acknowledge
  "subscribed"
end

post '/message' do
  connections.each do |out|
    # notify client that a new message has arrived
    out << params[:message] << "\n"
    # indicate client to connect again
    out.close
  end
  # acknowledge
  "message received"
end

# logger
logger.info 'sivasiva'
class MyApp < Sinatra::Base
  configure :production, :development do
    enable :logging
  end
end

# generating urls
%a{:href => url('/foo')} foo
redirect to('/bar')

before do
  cache_control :public, :must_revalidate, :max_age => 60
end

# request object
# app running on http://example.com/example
get '/foo' do
  t = %w[text/css text/html application/javascript]
  request.accept              # ['text/html', '*/*']
  request.accept? 'text/xml'  # true
  request.preferred_type(t)   # 'text/html'
  request.body                # request body sent by the client (see below)
  request.scheme              # "http"
  request.script_name         # "/example"
  request.path_info           # "/foo"
  request.port                # 80
  request.request_method      # "GET"
  request.query_string        # ""
  request.content_length      # length of request.body
  request.media_type          # media type of request.body
  request.host                # "example.com"
  request.get?                # true (similar methods for other verbs)
  request.form_data?          # false
  request["some_param"]       # value of some_param parameter. [] is a shortcut to the params hash.
  request.referrer            # the referrer of the client or '/'
  request.user_agent          # user agent (used by :agent condition)
  request.cookies             # hash of browser cookies
  request.xhr?                # is this an ajax request?
  request.url                 # "http://example.com/example/foo"
  request.path                # "/example/foo"
  request.ip                  # client IP address
  request.secure?             # false (would be true over ssl)
  request.forwarded?          # true (if running behind a reverse proxy)
  request.env                 # raw env hash handed in by Rack
end

get '/' do
  attachment "info.txt"
  "store it!"
end

configure do
  # setting one option
  set :option, 'value'
  # setting multiple options
  set :a => 1, :b => 2
  # same as `set :option, true`
  enable :option
  # same as `set :option, false`
  disable :option
  # you can also have dynamic settings with blocks
  set(:css_dir) { File.join(views, 'css') }
end

configure :production do
    # ...
end

# Rack Middleware
sinatra rides on Rack, a minimal standard interface for ruby web framework.
 “middleware” – components that sit between the server and your application monitoring and/or manipulating the HTTP request/response to provide various types of common functionality.

use Rack::Auth::Basic do |username, password|
    username == 'admin' && password == 'secret'
end
for logging, debugging, URL routing, authentication, and session handling.
You can find useful middleware in rack, rack-contrib, with CodeRack or in the Rack wiki.


Contributed Rack Middleware and Utilities
This package includes a variety of add-on components for Rack, a Ruby web server interface:

Rack::JSONP - Adds JSON-P support by stripping out the callback param and padding the response with the appropriate callback format.

Rack::LighttpdScriptNameFix - Fixes how lighttpd sets the SCRIPT_NAME and PATH_INFO variables in certain configurations.

Rack::Locale - Detects the client locale using the Accept-Language request header and sets a rack.locale variable in the environment.

Rack::MailExceptions - Rescues exceptions raised from the app and sends a useful email with the exception, stacktrace, and contents of the environment.

Rack::NestedParams - parses form params with subscripts (e.g., * “post[title]=Hello”) into a nested/recursive Hash structure (based on Rails’ implementation).

Rack::PostBodyContentTypeParser - Adds support for JSON request bodies. The Rack parameter hash is populated by deserializing the JSON data provided in the request body when the Content-Type is application/json.

Rack::ProcTitle - Displays request information in process title ($0) for monitoring/inspection with ps(1).

Rack::Profiler - Uses ruby-prof to measure request time.

Rack::Sendfile - Enables X-Sendfile support for bodies that can be served from file.

Rack::Signals - Installs signal handlers that are safely processed after a request

Rack::StaticCache - Modifies the response headers to facilitiate client and proxy caching for static files that minimizes http requests and improves overall load times for second time visitors.

Rack::TimeZone - Detects the client’s timezone using JavaScript and sets a variable in Rack’s environment with the offset from UTC.

Rack::Evil - Lets the rack application return a response to the client from any place.

Rack::Callbacks - Implements DSL for pure before/after filter like Middlewares.

Rack::Config - Shared configuration for cooperative middleware.

Rack::NotFound - A default 404 application.

Rack::CSSHTTPRequest - Adds CSSHTTPRequest support by encoding responses as CSS for cross-site AJAX-style data loading

Rack::Deflect - Helps protect against DoS attacks.

Rack::ResponseCache - Caches responses to requests without query strings to Disk or a user provider Ruby object. Similar to Rails’ page caching.

Rack::RelativeRedirect - Transforms relative paths in redirects to absolute URLs.

Rack::Backstage - Returns content of specified file if it exists, which makes it convenient for putting up maintenance pages.

Rack::AcceptFormat - Adds a format extension at the end of the URI when there is none, corresponding to the mime-type given in the Accept HTTP header.

Rack::HostMeta - Configures /host-meta using a block

Rack::Cookies - Adds simple cookie jar hash to env

Rack::Access - Limits access based on IP address

Rack::ResponseHeaders - Manipulates response headers object at runtime

Rack::SimpleEndpoint - Creates simple endpoints with routing rules, similar to Sinatra actions

Rack::TryStatic - Tries to match request to a static file

Rack::Printout - Prints the environment and the response per request


# building Modular Web App with Rack & Sinatra
## Collection of mini-apps

class HostsApp < Sinatra::Base
    require "models/host"
    register Mustache::Sinatra
    require "views/hosts/layout"
    set :mustache, {
        :views => 'views/hosts',
        :templates => 'templates/hosts'
    }
    set :session, true
    get '/list', :provides => :json do
        Host.all.to_json
    end
    get 'list' do
        @hosts = Host.all
        @flash = flash
        unless @hosts.include?(:error)
            mustache :list
        else
            puts "Error: " + @hosts[:error]
            "<h1>Oops.. An Error occurred. #{@hosts[:error]}"
        end
    end
end

# Template with Mustache
# Routing with Rack::Mount
- it simply routes requests to individual Rack apps based on the path
# route paths to different apps
Routes = Rack::Mount::RouteSet.new do |set|
  set.add_route UserSessionApp, { :path_info => %r{^/user_session*} }, {}, :user_session
  set.add_route HostsApp, { :path_info => %r{^/host*} }, {}, :host
  set.add_route VirtualNetworksApp, { :path_info => %r{^/vnet*} }, {}, :vnet
  set.add_route VirtualMachinesApp, { :path_info => %r{^/vm*} }, {}, :vm
  set.add_route UsersApp, { :path_info => %r{^/user*} }, {}, :user
  set.add_route DashboardApp, { :path_info => %r{^/$} }, {}, :dashboard
  #public file routes
  set.add_route Rack::File.new(File.dirname(__FILE__) + "/public"), { :path_info => %r{^/public*} }, {}, :public
end
# run the routeset
run Routes

# user authentication
- using Warden

Warden::Strategies.add(:password) do
  def valid?
    params["user_name"] || params["password"]
  end
  def authenticate!
    u = get_one_client
    (u.one_auth == "#{params["user_name"]}:#{Digest::SHA1.hexdigest(params["password"])}") ? success!(u) : fail!("Could not log in")
  end
end

before do
    # check for authentication
    unless env['warden'].authenticated?
        session['return_to'] = request.path
        redirect '/user_session/new'
    end
end

One such middleware is Rack::NestedParams (available in Rack Contrib package), which is used handle nested form parameters properly.
Also, Rack::Flash is useful, which gives the option of adding flash messages (success, errors and warnings) to the app.

to put the “hello” view in /myapp/views/hello.erb. Here’s what that file looks like:
<h1>Hello <%= @user %>!</h1>

# large projects
thin -R config.ru start

monk add riblits git://github.com/Phrogz/riblits.git
monk init -s riblits

config.ru
root = ::File.dirname(__FILE__)
require ::File.join(root, 'app')
run MyApp.new

app.rb
# encoding: utf-8
require "sinatra"
require "haml"

class MyApp < Sinatra::Application
    enable :sessions

    configure :production do
        set :haml, {:ugly=>true}
        set :clean_trace, true
    end
    configure :development do
        # ...
    end
    helpers do
        include Rack::Utils
        alias_method :h, :escape_html
    end
end
require_relative "models/init"
require_relative "helpers/init"
require_relative "routes/init"

# helpers/init.rb
# encoding: utf-8
require_relative 'partials'
MyApp.helpers PartialPartials
require_relative 'nicebytes'
MyApp.helpers nicebytes

# helers/partials.rb
# encoding: utf-8
module PartialPartials
  def spoof_request(uri,env_modifications={})
    call(env.merge("PATH_INFO" => uri).merge(env_modifications)).last.join
  end
  def partial( page, variables={} )
    haml page, {layout:false}, variables
  end
end
# helpers/nicebytes.rb
# encoding: utf-8
module NiceBytes
  K = 2.0**10
  M = 2.0**20
  G = 2.0**30
  T = 2.0**40
  def nice_bytes( bytes, max_digits=3 )
    value, suffix, precision = case bytes
      when 0...K
        [ bytes, 'B', 0 ]
      else
        value, suffix = case bytes
          when K...M then [ bytes / K, 'kiB' ]
          when M...G then [ bytes / M, 'MiB' ]
          when G...T then [ bytes / G, 'GiB' ]
          else            [ bytes / T, 'TiB' ]
        end
        used_digits = case value
          when   0...10   then 1
          when  10...100  then 2
          when 100...1000 then 3
          else 4
        end
        leftover_digits = max_digits - used_digits
        [ value, suffix, leftover_digits > 0 ? leftover_digits : 0 ]
    end
    "%.#{precision}f#{suffix}" % value
  end
  module_function :nice_bytes  # Allow NiceBytes.nice_bytes outside of Sinatra
end

# models
# encoding: utf-8
require "sequel"
DB = Sequel.postgres 'dbname', user:'dbuser', password:'dbpass', host:'localhost'
DB << "SET CLIENT_ENCODING TO 'UTF8';"

require_relative "users"

# models/user.rb
# encoding: utf-8
class User < Sequel::Model
    # ...
end

# routes/init.rb
# encoding: utf-8
require_relative "login"
require_relative "main"

# routes/login.rb
class MyApp < Sinatra::Application
    get '/login' do
        @title = "Login"
        haml :login
    end
    post "/login" do
        if user = check_login
            session[:user] = user.pk
            redirect '/'
        else
            redirect '/login'
        end
    end
    get 'logout' do
        session[:user] = session[:pass] = nil
        redirect '/'
    end
end

# routes/main.rb
# encoding: utf-8
class Myapp < Sinatra::Application
    get '/' do
        @title = "Welcome to Myapp"
        haml :main
    end
end

views/layout.haml
!!! XML
!!! 1.1
%html(xmlns="http://www.w3.org/1999/xhtml")
  %head
    %title= @title
    %link(rel="icon" type="image/png" href="/favicon.png")
    %meta(http-equiv="X-UA-Compatible" content="IE=8")
    %meta(http-equiv="Content-Script-Type" content="text/javascript" )
    %meta(http-equiv="Content-Style-Type" content="text/css" )
    %meta(http-equiv="Content-Type" content="text/html; charset=utf-8" )
    %meta(http-equiv="expires" content="0" )
    %meta(name="author" content="MeWho")
  %body{id:@action}
    %h1= @title
    #content= yield


# learning by examples
blog engine: https://github.com/wagnerandrade/wind

# i_shoot_film.rb





