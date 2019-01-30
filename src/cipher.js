/*window.cipher = {
  
 
  // ... 
};
*/
// function paloma (){
//   console.log("paloma");
// }
// paloma()

console.log ("Passo 1")
let cipher ={};

function btnEncod(){
        console.log("inicia função btn")
    let writtensentence = document.getElementById("writePhrase").value;
    let offset = document.getElementById("displacement").value;
    let result = cipher.encode(offset,writtensentence);
  document.getElementById("textResult").innerHTML = result;
  
        console.log(btnEncod);
        console.log(writtensentence);
        console.log(offset);
        console.log(result);
        console.log("finaliza função btn");

}


console.log("Passo 2")
cipher.encode = (offset,string) => {
       let resultEncode ="";
// tranforma letra em asc
  for (let i = 0; i < string.length; i++) {
       let codAscii = string.charCodeAt(i);
       
    if (codAscii >= 65 && codAscii <= 90) {
      console.log("passou pela letra maiúscula");
      let result = ((codAscii - 65 + parseInt(offset)) % 26 + 65);
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
        console.log(resultLetter);
        console.log(resultEncode);
        console.log(parseInt);
        console.log(String);
        console.log(codAscii);
      //resultEncode += String.fromCharCode((codAscii - 65 + offset) % 26 + 65);
         
    } else if (codAscii >= 97 && codAscii <= 122) {

      let result = ((codAscii - 97 + parseInt(offset)) % 26 + 97);
      let resultLetterTransform = String.fromCharCode(result);
      resultEncode = resultEncode + resultLetterTransform;
      //resultEncode += String.fromCharCode((codAscii - 97 + parseInt(offset)) % 26 + 97);
        console.log("passou pela letra minúscula");
    } else {
      resultEncode = resultEncode + string[i];
      //   resultEncode += String.fromCharCode((resultEncode));
        console.log(string);
        console.log(resultEncode);
        console.log("passou pela concatenação");
    }
  }
  console.log(resultEncode);
  return resultEncode;
  
  
}
