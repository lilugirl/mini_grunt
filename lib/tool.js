'use strict';

// Nodejs libs.
var path = require('path');

// This allows tool to require() .coffee files.
require('coffee-script');

// The module to be exported.
var tool = module.exports ={};

// Expose internal tool libs.
function gRequire(name){
    return tool[name]=require('./tool/'+name);
}
var util = gRequire('util');
gRequire('template');
gRequire('event');
var fail = gRequire('fail');
var file = gRequire('file');
var option = gRequire('option');
var config = gRequire('config');
var task = gRequire('task');
var log = gRequire('log');
var help = gRequire('help');
gRequire('cli');