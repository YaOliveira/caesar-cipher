// window.cipher = {
  
 
//   // ... 
// };


console.log ("Passo 1 code")
    let cipher ={};

function btnEncod(){
  let writtensentence = document.getElementById("writePhrase").value;
  let offset = document.getElementById("displacement").value;
  console.log(writtensentence);
  console.log(offset)
  if (offset < 0){
    while (offset < 0) {
      offset = offset + 26
      return cipher.encode(offset,writtensentence);
      console.log("wi")
    } 
  } else {
    return cipher.encode(offset,writtensentence);
  }
  
  // let result = cipher.encode(offset,writtensentence);
  // console.log(result);
  // document.getElementById("textResult").innerHTML = result;
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
      offset = offset + 26
      return xcipher.decode(offset,writtensentence);
      console.log("wi")
    } 
  } else {
    return xcipher.decode(offset,writtensentence);
  }
  
  // let result = cipher.encode(offset,writtensentence);
  // console.log(result);
  // document.getElementById("textResult").innerHTML = result;
}

console.log("Passo 2 DECO")
xcipher.decode = (offset,string) => {
  let resultDecode ="";
       
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i);
     
  
    if (codAscii >= 65 && codAscii <= 90) {
      console.log("passou pela letra maiúscula");
      let result = ((codAscii - 65 - parseInt(offset))%26 +26) %26 + 65;
      console.log(codAscii + "antes")
      console.log(offset +"antes")
      let resultLetterTransform = String.fromCharCode(result);
      console.log(codAscii + "depois")
      console.log(offset +"depois")
      resultDecode = resultDecode + resultLetterTransform;
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 - parseInt(offset))%26 +26) %26 + 97;

      let resultLetterTransform = String.fromCharCode(result);
      resultDecode = resultDecode + resultLetterTransform;
    
    } else {
      resultDecode = resultDecode + string[i];
    }
   
  }
  console.log("legal dec", resultDecode)

  return document.getElementById("textResult").innerHTML = resultDecode;
}
