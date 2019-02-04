/* ----PROCESSO DE CODIFICAÇÃO ---*/

function btnEncod(){
  let writtensentence = document.getElementById("writePhrase").value;
  let offset = document.getElementById("displacement").value;
  
    if (offset < 0){
      while (offset < 0) {
        offset = offset - 26
        return encode(offset,writtensentence);
      } 
    } else {
      return encode(offset,writtensentence);
  }
}


function encode (offset,string) {
  let resultEncode ="";
       
// Transforma a letra em ASC
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i); 
     
    if (codAscii >= 65 && codAscii <= 90) {

      let result = ((codAscii - 65 + (offset))% 26 +26)%26 + 65;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 + parseInt(offset))% 26 +26)%26 + 97;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
    
    } else {
      resultEncode = resultEncode + string[i];
    }
   
  }

  return document.getElementById("textResult").innerHTML = resultEncode;
}

/* ----PROCESSO DE DECODIFICAÇÃO ---*/


function btnDecod(){
  let writtensentence = document.getElementById("writePhrase").value;
  let offset = document.getElementById("displacement").value;

  if (offset < 0){
    while (offset < 0) {
      offset = offset - 26
      return decode(offset,writtensentence);
      
    } 
  } else {
      return decode(offset,writtensentence);
  }
}


function decode(offset,string) {
  let resultDecode ="";
       
// Transforma a letra em ASC
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

/* ----PROCESSO PARA APAGAR DADOS DA TEXTAREA ---*/

let btnClean = document.querySelector('#botaoClean');

function cleanText(){
  document.querySelector('#textResult').innerHTML = "";
}

btnClean.addEventListener('click', function(){
  cleanText();
});

