console.log('WHAT UP THO, main.js works');

let translate = document.getElementById("button");
translate.addEventListener("click", () => {
  let whichLanguage;

  let radios = document.getElementsByClassName("whichLanguage");
 for (let i = 0; i < radios.length; i++) {
    // 1 = French, 2 = Icelandic, 3 = Jamaican, 0 = Hawaiian
  
    if (radios[i].checked){
      whichLanguage = radios[i].value;
      console.log(whichLanguage);
      
      break;
    }
    
  }
    if(whichLanguage == 0){
      console.log('this will be in Hawaiian');
    } else if (whichLanguage == 1) {
      console.log('this will be French');
    } else if (whichLanguage == 2) {
      console.log('this will be Icelandic');
    } else {
      console.log('this will be Jamaican');
    }


});