const encodeInput = document.getElementById("btn-encode");
const decodeInput = document.getElementById("btn-decode");
const btnClean = document.querySelector('#btn-clean');

encodeInput.addEventListener('click', function(){
  btnEncode(encode);
});

decodeInput.addEventListener('click', function(){
  btnEncode(decode);
});

function btnEncode(func){
  let writtenSentence = document.getElementById("write-phrase").value;
  let offset = document.getElementById("displacement").value;
  
    if (offset < 0){
      while (offset < 0) {
        offset = offset - 26
        return document.getElementById("text-result").innerHTML = func(offset,writtenSentence);
      } 
    } else {
      return document.getElementById("text-result").innerHTML = func(offset,writtenSentence);
  }
}



function encode (offset,string) {
  let resultEncode ="";
       

  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i); 
     
    if (codAscii >= 65 && codAscii <= 90) {

      let result = ((codAscii - 65 + parseInt(offset))% 26 +26)%26 + 65;
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
  return  resultEncode;
}



function decode(offset,string) {
  let resultDecode ="";
       

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
  return resultDecode;
}

btnClean.addEventListener('click', function(){
  cleanText();
});

function cleanText(){
  document.querySelector('#text-result').innerHTML = "";
}
