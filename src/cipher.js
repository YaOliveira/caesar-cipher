console.log ("Passo 1 code")
let cipher ={};

function btnEncod(){
  let writtensentence = document.getElementById("writePhrase").value;
  let offset = document.getElementById("displacement").value;
  
    if (offset < 0){
      while (offset < 0) {
        offset = offset - 26
        return cipher.encode(offset,writtensentence);
      } 
    } else {
      return cipher.encode(offset,writtensentence);
  }
}

console.log("Passo 2 code")
cipher.encode = (offset,string) => {
  let resultEncode ="";
       
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i); 
     
  
    if (codAscii >= 65 && codAscii <= 90) {
      console.log("passou pela letra maiúscula");
      let result = ((codAscii - 65 + parseInt(offset))% 26 +26)%26 + 65;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 + parseInt(offset))% 26 +26) %26 + 97;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
    
    } else {
      resultEncode = resultEncode + string[i];
    }
   
  }
  console.log("legal", resultEncode)

  return document.getElementById("textResult").innerHTML = resultEncode;
}

/* ----PASSO DECODE ---*/

console.log ("Passo 1 DECO")
let xcipher ={};

function btnDecod(){
  let writtensentence = document.getElementById("writePhrase").value;
  let offset = document.getElementById("displacement").value;
  console.log(writtensentence);
  console.log(offset)
  if (offset < 0){
    while (offset < 0) {
      offset = offset - 26
      return xcipher.decode(offset,writtensentence);
      
    } 
  } else {
      return xcipher.decode(offset,writtensentence);
  }
}

console.log("Passo 2 DECO")
xcipher.decode = (offset,string) => {
  let resultDecode ="";
       
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i);
     
    if (codAscii >= 65 && codAscii <= 90) {

      let result = ((codAscii - 65 - parseInt(offset))%26 +26) %26 + 65;
      let resultLetterTransform = String.fromCharCode(result);
      resultDecode = resultDecode + resultLetterTransform;
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 - parseInt(offset))%26 +26) %26 + 97
      let resultLetterTransform = String.fromCharCode(result);
      resultDecode = resultDecode + resultLetterTransform;
    
    } else {

      resultDecode = resultDecode + string[i];
    }
   
  }
  return document.getElementById("textResult").innerHTML = resultDecode;
}


let btnClean = document.querySelector('#botaoClean');

function cleanText(){
  document.querySelector('#textResult').innerHTML = "";
}

btnClean.addEventListener('click', function(){
  cleanText();
});


