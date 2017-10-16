var mongoose = require('mongoose');
var dbURI = 'mongodb://aip2017:12345@ds121535.mlab.com:21535';

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);
