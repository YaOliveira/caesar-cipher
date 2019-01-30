window.cipher = {
  
 
  // ... 
};

console.log ("Passo 1 code")
    let cipher ={};

function btnEncod(){
    let writtensentence = document.getElementById("writePhrase").value;
    let offset = document.getElementById("displacement").value;
    let result = cipher.encode(offset,writtensentence);
  document.getElementById("textResult").innerHTML = result;
}

console.log("Passo 2 code")
cipher.encode = (offset,string) => {
       let resultEncode ="";
      
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i);

       if (offset < 0) {
        offset += 26
        console.log(offset + "code não está ok")
      }
       
    if (codAscii >= 65 && codAscii <= 90) {
      console.log("passou pela letra maiúscula");
      let result = ((codAscii - 65 + parseInt(offset)) % 26) + 65;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 + parseInt(offset)) % 26) + 97;
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
    
    } else {
      resultEncode = resultEncode + string[i];
    }
  }

  return resultEncode;
}

console.log ("Passo 1 DEC")
let xcipher ={};

function btnDecod(){
        
    let writtensentence = document.getElementById("writePhrase").value;
    let offset = document.getElementById("displacement").value;
    let result = xcipher.decode(offset,writtensentence);
         document.getElementById("textResult").innerHTML = result;
  
}

console.log("Passo 11 DEC")
xcipher.decode = (offset,string) => {
       let resultDecode ="";
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i);

       if (offset < 0) {
        offset -=26
      }
      console.log (offset + "decode não está ok")
       
    if (codAscii >= 65 && codAscii <= 90) {
      console.log("passou pela letra maiúscula");
      let result = ((codAscii - 90 - parseInt(offset %26)) %26) + 90;
      let resultLetterTransform = String.fromCharCode(result);
      resultDecode = resultDecode + resultLetterTransform;
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 122 - parseInt(offset %26)) % 26) + 122;
      let resultLetterTransform = String.fromCharCode(result);
      resultDecode = resultDecode + resultLetterTransform;
    
        console.log("passou pela letra minúscula");
    } else {
      resultDecode = resultDecode + string[i];
        console.log(string);
        console.log(resultDecode);
        console.log("passou pela concatenação");
    }
  }
  console.log(resultDecode);
  return resultDecode;
}
