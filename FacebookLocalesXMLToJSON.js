//Convert https://www.facebook.com/translations/FacebookLocales.xml to JSON
var assert = require('assert');
var fs = require('fs');
//cli syntax is node <script> <file_name.xml>
var fname = process.argv[2];
assert(typeof(fname) !== 'undefined');
fs.readFile(fname, {encoding: 'utf8'}, function(err, xml){
  assert(!err);
  var parse_xml = require('xml2js').parseString;
  //explicitArray:false prevents tragic sprinkling of [] lists in output
  parse_xml(xml, {'explicitArray':false}, function(err, data){
    console.log(JSON.stringify(data, null, 2));
  });
});
