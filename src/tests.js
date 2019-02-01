let resultCipherEncode = encode(1, "Yara Zaza Pão Zuzu WxyzAbcde");
if(resultCipherEncode === "Zbsb Abab Qãp Avav XyzaBcdef"){
        console.log ("Deu certo resultCipherEncode");
}else{
        console.log("Deu errado resultCipherEncode");
}

let resultadoxCipherDecode = decode(1,"Yara Zaza Pão Zuzu WxyzAbcde");
if(resultadoxCipherDecode === "Xzqz Yzyz Oãn Ytyt VwxyZabcd"){
        console.log ("Deu certo resultadoxCipherDecode");
}else{
        console.log("Deu errado resultadoxCipherDecode");
}

