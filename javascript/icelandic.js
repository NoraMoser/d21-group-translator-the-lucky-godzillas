
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
   var tranlatedArray = [];
  translator.toIcelandic = function(textArray){

    textArray.forEach(function(i) {
      tranlatedArray += ` ${icelandic[i]}`; 
    });
    output.innerHTML = tranlatedArray;
  }
   // console.log(textArray);
   
  return translator
})(ToLanguage);



