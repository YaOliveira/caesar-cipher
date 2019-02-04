
//TESTE DA CODIFICAÇÃO
let resultEncodeAll = encode(1, "Yara Zaza Pão Zuzu WxyzAbcde");
if(resultEncodeAll === "Zbsb Abab Qãp Avav XyzaBcdef"){
        console.log ("Teste aprovado de codificação das letras aleatórias com 1 de offset");
}else{
        console.log("Teste reprovado de codificação das letras aleatórias com 1 de offset");
};


let resultEncodeAlphPosit = encode(2, "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz");
if(resultEncodeAlphPosit === "CDEFGHIJKLMNOPQRSTUVWXYZAB cdefghijklmnopqrstuvwxyzab"){
        console.log ("Teste aprovado de codificação do alfabeto com 2 de offset");
}else{
        console.log("Teste reprovado de codificação do alfabeto com 2 de offset");
};


let resultEncodeAlphNeg = encode(-2, "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz");
if(resultEncodeAlphNeg === "YZABCDEFGHIJKLMNOPQRSTUVWX yzabcdefghijklmnopqrstuvwx"){
        console.log ("Teste aprovado de codificação do alfabeto com -2 de offset");
}else{
        console.log("Teste reprovado de codificação do alfabeto com -2 de offset");
};

//TESTE DA DECODIFICAÇÃO

let resultDecodeAll = decode(1, "Zbsb Abab Qãp Avav XyzaBcdef");
if(resultDecodeAll === "Yara Zaza Pão Zuzu WxyzAbcde"){
        console.log ("Teste aprovado de decodificação das letras aleatórias com 1 de offset");
}else{
        console.log("Teste reprovado de decodificação das letras aleatórias com 1 de offset");
};


let resultDecodeAlphPosit = decode(2, "CDEFGHIJKLMNOPQRSTUVWXYZAB cdefghijklmnopqrstuvwxyzab")
if(resultDecodeAlphPosit === "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"){
        console.log ("Teste aprovado de decodificação do alfabeto com 2 de offset");
}else{
        console.log("Teste reprovado de decodificação do alfabeto com 2 de offset ");
};


let resultDecodeAlphNeg = decode(-2, "YZABCDEFGHIJKLMNOPQRSTUVWX yzabcdefghijklmnopqrstuvwx")
if(resultDecodeAlphNeg === "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"){
        console.log ("Teste aprovado de decodificação do alfabeto com -2 de offset");
}else{
        console.log("Teste reprovado de decodificação do alfabeto com -2 de offset");
};