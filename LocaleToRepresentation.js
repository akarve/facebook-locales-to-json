//convert FacebookLocales.json to simpler format
var assert = require('assert');
var fs = require('fs');
//cli syntax is `node <script> <JSON file to process>`
var fname = process.argv[2];
assert(typeof(fname) !== 'undefined');
fs.readFile(fname, {encoding: 'utf8'}, function(err, data){
  assert(!err);
  var raw_json = JSON.parse(data);
  var locales = raw_json['locales']['locale'];
  lang_to_code = {}
  for(var i = 0; i < locales.length; i++){
    var name = locales[i]['englishName'];
    var repr = locales[i]['codes']['code']['standard']['representation'];
    lang_to_code[name] = repr;
  }
  //for 'compressed' output
  //console.log(JSON.stringify(lang_to_code));
  //for pretty printed output, use this
  console.log(JSON.stringify(lang_to_code, null, 4));
});
