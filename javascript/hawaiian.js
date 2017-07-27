var ToLanguage = (function(translator){
	let hawaiian = {
		"HAPPY": "hau'oli",
		"HOLIDAYS": "icai",
		"FROM": "mai",
		"OUR": "ka",
		"TEAM": "hui",
		"TO": "a hiki i",
		"YOUR": "kou",
		"TEAM": "hui"
	}

	var translatedArray = [];
	translator.toHawaiian = function(textArray){
		textArray.forEach(function(i) {    
			translatedArray += ` ${hawaiian[i]}`;
		});
		output.innerHTML = translatedArray;
	}

  return translator

})(ToLanguage);