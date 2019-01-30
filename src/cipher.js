/*window.cipher = {
  
 
  // ... 
};
*/

let cipher ={};

function btnEncod(){
  console.log ("inicia função btn")
  let writtensentence = document.getElementById("writePhrase");
  let offset = document.getElementById("displacement");
  let result = cipher.encode (offset,writtensentence);
  document.getElementById("textResult").innerHTML = result;
  console.log(btnEncod);
  console.log(writtensentence);
  console.log(offset);
  console.log(result);
  console.log("finaliza função btn");

}
/* --- explicação da vanessa em 29/01

cipher = (offset,string) => {


  string.charcode(i)

  for (let i = 0; i < writtensentence.length; i++){
    (string.charcodeAt(i) - 65 + offset)%26 - 65);

  } if {
    (string.charcodeAt(i) - 97 + offset)%26 - 97);

  }
*/
 
cipher = (offset,string) => {

for (let i = 0; i < string.length; i++) {
    let convAscii = string.charCodeAt(i);

    if (convAscii >= 65 && convAscii <= 90) {

      let result = ((convAscii - 65 + parseInt(offset)) % 26 + 65);
      let resultLetter = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetter;
      console.log(resultLetter);
      console.log(resultEncode);
      console.log(parseInt);
      console.log(String);
      console.log(convAscii);
      //resultEncode += String.fromCharCode((convAscii - 65 + offset) % 26 + 65);
         
    } else if (convAscii >= 97 && convAscii <= 122) {
      resultEncode += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97);
    } else {
      resultEncode = resultEncode + string[i];
      //   resultEncode += String.fromCharCode((resultEncode));
    }
  }
  return resultEncode;
},

}
(variavelDaFrase.charcodeAt(i) - 65 + desloc) %26 - 65)


