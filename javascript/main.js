let translateBtn = document.getElementById("button");


translateBtn.addEventListener("click", () => {
  let whichLanguage;
  
  let radios = document.getElementsByClassName("whichLanguage");
  let textInputHTML = document.getElementById("textInput").value;
  let textArray = textInputHTML.toUpperCase().split(" ");
 for (let i = 0; i < radios.length; i++) {
    // 1 = French, 2 = Icelandic, 3 = Jamaican, 0 = Hawaiian
  
    if (radios[i].checked){
      whichLanguage = radios[i].value;
      break;
    }
  }
    if(whichLanguage == 0){
      ToLanguage.toHawaiian(textArray);
    } else if (whichLanguage == 1) {
      ToLanguage.toFrench(textArray);
    } else if (whichLanguage == 2) {
      ToLanguage.toIcelandic(textArray);
    } else {
      ToLanguage.toJamaican(textArray);
    }
    
  let output = document.getElementById("output");

});