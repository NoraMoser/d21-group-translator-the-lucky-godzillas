// console.log("hi");
var ToLanguage = (function(translator){
    // console.log(ToLanguage);
  
let icelandic = {
    "HAPPY": "hamingjusöm",
    "HOLIDAYS": "frídagar",
    "FROM": "frá",
    "OUR": "okkar",
    "TEAM": "lið",
    "TO": "til",
    "YOUR": "Þitt",
    "TEAM": "lið"
}
  //console.log(icelandic);
  
  translator.toIcelandic = function(textArray){
   console.log(textArray);
   
  }
  return translator
})(ToLanguage);

// toIcelandic.translate