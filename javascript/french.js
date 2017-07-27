var ToLanguage = (function(translator){
  let french = {
    "HAPPY" : "Content",
    "HOLIDAYS":"vacances",
    "FROM": "de",
    "OUR": "notre",
    "TEAM": "equipe",
    "TO": "a",
    "YOUR": "le tier",
    "TEAM": "equipe"
  }

  var tranlatedArray = [];
  translator.toFrench= function(textArray){


    textArray.forEach(function(i) {
      tranlatedArray += ` ${french[i]}`;
    });
    output.innerHTML = tranlatedArray;
  }

  return translator

})(ToLanguage);
