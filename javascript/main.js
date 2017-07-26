let translate = document.getElementById("button");



translate.addEventListener("click", () => {
  let whichLanguage;
  let textInputHTML = document.getElementById("textInput").value;
  let textArray = textInputHTML.toUpperCase().split(" ");

  let radios = document.getElementsByClassName("whichLanguage");
 for (let i = 0; i < radios.length; i++) {
    // 1 = French, 2 = Icelandic, 3 = Jamaican, 0 = Hawaiian
  
    if (radios[i].checked){
      whichLanguage = radios[i].value;
      break;
    }
  }
    if(whichLanguage == 0){
     // ToLanguage.toHawaiian();
    } else if (whichLanguage == 1) {
     // ToLanguage.toFrench.function(textArray);
    } else if (whichLanguage == 2) {
      // ToLanguage.toIcelandic();
    } else {
      ToLanguage.toJamaican.translate(textArray);
    }
    
  let output = document.getElementById("output").innerHTML;

});