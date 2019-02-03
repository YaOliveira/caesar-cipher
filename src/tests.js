let resultEncodeAll = encode(1, "Yara Zaza Pão Zuzu WxyzAbcde")
if(resultEncodeAll === "Zbsb Abab Qãp Avav XyzaBcdef"){
        console.log ("Teste aprovado de codificação das letras aleatórias com 1 de offset");
}else{
        console.log("Teste reprovado de codificação das letras aleatórias com 1 de offset");
};


let resultEncodeAlphPosit = encode(2, "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz")
if(resultEncodeAlphPosit === "CDEFGHIJKLMNOPQRSTUVWXYZAB cdefghijklmnopqrstuvwxyzab"){
        console.log ("Teste aprovado de codificação do alfabeto com 2 de offset");
}else{
        console.log("Teste reprovado de codificação do alfabeto com 2 de offset");
};


let resultEncodeAlphNeg = encode(-2, "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz")
if(resultEncodeAlphNeg === "YZABCDEFGHIJKLMNOPQRSTUVWX yzabcdefghijklmnopqrstuvwx"){
        console.log ("Teste aprovado de codificação do alfabeto com -2 de offset");
}else{
        console.log("Teste reprovado de codificação do alfabeto com -2 de offset");
};


// let resultCipherDecode = decode(1,"teste")
// if(resultCipherDecode ==="x"){
//         console.log("Deu certo");
// }else{
//         console.log("Deu errado");
// };