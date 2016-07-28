
var blacklist = [
  'lily',
  'matty',
  'chelsea',
  'khellie',
  'willie',
]

var isUsername = function (name) {

if (blacklist.indexOf(name) > -1){
  return true;
}
return false;
}
