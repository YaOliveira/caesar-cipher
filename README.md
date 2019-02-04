# Cifra de César

Primeiro projeto desenvolvido para o curso de Desenvolvedora Front-End no Bootcamp
**Laboratória** - campus SP - Brasil.

## O Projeto

Com base no prefácio fornecido pela **Laboratória** foi desenvolvido um site utilizando HTML, Javascript (Vanilla JS),  CSS, UX e UI, descrevendo a lógica da aplicação e eventos do DOM com a função de criptografar e descriptografar mensagens, utilizando o deslocamento (offset) que o usuário determinar.
Os códigos foram armazenados no github.
Também era objetivo deste projeto, ser implementado inteiramente em ES6, porém não foi possível implementa-lo durante o prazo fornecido para execução do mesmo, que foram 2 semanas. A ajuda do squad e da equipe de mentores da **Laboratória** foram essenciais para resolver dúvidas, bugs durante o desenvolvimento e para que o projeto funcionasse corretamente.

## A organização

No primeiro sprint foi utilizado o **kanban** e no segundo sprint foi utilizado a ferramenta **Trello**. Em ambas situações, dividi o projeto em mini partes e as mesmas foram priorizadas utilizando dois critérios: o que era necessário para formar o _esqueleto_ do site e o que eu como desenvolvedora tinha mais facilidade em desenvolver, deixando o que demandaria mais tempo de aprendizagem e de desenvolvimento por último. Todos os itens tinham data definida / prevista para término.

![Trello do Projeto 1 - Caesar Cipher](https://github.com/YaOliveira/caesar-cipher/blob/master/Trello%20-%20Projeto%20Caesar%20Cipher.png)


## O usuário
O desenvolvimento deste projeto foi pensado no usuário com o objetivo de ser intuitivo e que atendesse a necessidade dele que é codificar e descodificar mensagens utilizando o deslocamento(offset) fornecido pelo mesmo.

## Diagrama de Blocos

![Diagrama de blocos - Caesar Cipher](https://github.com/YaOliveira/caesar-cipher/blob/master/Diagrama_Caesar_Cipher.png)

## Conheça o site / projeto
![VISÃO DO SITE](https://github.com/YaOliveira/caesar-cipher/blob/master/Layout%20Caesar%20Cipher.png)

### Parte Opcional: "Hacker edition"

O projeto extra foi implementado com sucesso. Nesse projeto, os acentos e espaços são conservados e o usuário pode utilizar o _offset_ _negativo_.

### Parte Obrigatória

* [x] `README.md` com explicações e desenho do projeto
* [x] Usar VanillaJS.
* [x] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [x] Mostrar o resultado da cifra corretamente.
* [x] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [x] Mostrar o resultado descifrado corretamente.
* [x] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [x] Permite usar um `offset` (_deslocamento_) negativo
* [x] Cifra/descifra palavras, mantendo _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...) como foram escritos.