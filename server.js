var util = require('util'), connect = require('connect'), port = 4567;

connect.createServer(connect.static(__dirname)).listen(port);

util.puts('Listening  on ' + port + '...');
util.puts('Press CTRL + C to stop.');