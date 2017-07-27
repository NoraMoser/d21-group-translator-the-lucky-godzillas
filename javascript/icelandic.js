var ToLanguage = (function(translator){
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

  var tranlatedArray = [];
  translator.toIcelandic = function(textArray){
    textArray.forEach(function(i) {
      tranlatedArray += ` ${icelandic[i]}`; 
    });
    output.innerHTML = tranlatedArray;
  }
   
  return translator
})(ToLanguage);



