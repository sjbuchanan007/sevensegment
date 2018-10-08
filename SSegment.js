
var fs = require("fs");
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");

console.log(words.length);

var badLetters = /[gikmoqvwxz]/;

var longestAcceptableWord="";

for(var testword of words){

  if(testword.length <= longestAcceptableWord.length){
    continue;
  }
  if(testword.match(badLetters)) {
    continue;
  }

  longestAcceptableWord = testword;
  console.log (longestAcceptableWord);
}
