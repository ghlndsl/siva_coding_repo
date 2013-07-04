
# for nodejs
using node-inspector and logger to record sth

# for php
remote debug using phpStrom and xdebug (sftp download!!)


# for python
wingide remote debug /w console

# for ruby
binding.pry

Chrome Logger
it is a chrome extension for debugging server side applications in Chrome console.
most languages include their own logging capabilities, but sometimes it is easier to see logs right in their browser.
it uses an HTTP Headers to send log data from application server to the browser. the extension decodes the data and outputs it to chrome javascript console.

a chrome extension with a server side library
# django example
import chromelogger as console
from django.http import HttpResponse

def index(request):
    response = HttpResponse('hello, you're at index!)
    console.log('hello world')
    console.log(request.user)
    return response

# ruby
# for sinatra
# firstly: use ChromeLogger
# then use env['console].log
app = lambda do |env|
    env['console'].group 'Big Group'
    env['console'].log 'hi', 'there'
    env['console'].log({ :key => 1234})
    env['console'].groupEnd

    [200, {}, []]
end

run app






