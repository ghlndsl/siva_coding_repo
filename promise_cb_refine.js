var promisify = require('deferred').promisify;
var fs = require('fs');

var readdir = promisify(fs.readdir);
var readfile = promisify(fs.readfile);
var writefile = promisify(fs.writefile);

writefile(_dirname + 'lib.js',
    readdir(_dirname)
    .invoke('filter', function(file){
        return (file.slice(-3) === '.js' && (file !== 'lib.js'));
    })
    .map(readfile)
    .invoke('join', '\n')
).end();