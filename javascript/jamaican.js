var ToLanguage = (function(translator){
  let jamaican = {
    "HAPPY": "Happy",
    "HOLIDAYS": "holidays",
    "FROM": "fram",
    "OUR": "fi wi",
    "TEAM": "team",
    "TO": "to",
    "YOUR": "fi yuh",
    "TEAM": "team"
  }
  
  var tranlatedArray = [];
  translator.toJamaican = function(textArray){


    textArray.forEach(function(i) {
      tranlatedArray += ` ${jamaican[i]}`; 
    });
    output.innerHTML = tranlatedArray;
  }

  return translator

})(ToLanguage);