let result = cipher("aBc",1);
if(result === "bCd"){
        console.log ("Deu certo");
}else{
        console.log("Deu errado");
}

// Tests
let result = 'veni, vidi, vici';
for (let i = 0; i<26; i++) {
  console.log(i+': '+caesar(text,i));
}