var id = parseInt(document.location.hash[1])-1;

var imagens = [
    "staying-macho-carente-pequeno",
    "bulldog-macho-carente-pequeno",
    "shaggy-macho-carente-medio",
    "curly-femea-independente-pequena",
    "cavalier-femea-brincalhona-media-",
    "femea-independente-pequena",
    "happy",
    "pug",
    "bulldog"
];


var sexo = ["macho", "femea", "macho"];

var temperamento = ["carente", "independente", "brincalh&atilde;o"];

var idade = [2, 1.5, 5];

var porte = ["pequeno", "m&eacute;dio", "grande" ];

var bios = [
   "Eu sou esse doguinho lindo e carentinho. Mas, olha... vou te contar que eu nem sempre estive tão em forma assim. Antes de ser resgatado pela Good Dogtor, eu vivia em um clube cheio de outros doguinhos e de animais silvestres. Mas agora eu posso ficar aqui seguro com meus amigos brincalhões, recebendo comida gostosa e água fresquinha. Para melhorar os meus dias só falta uma coisa: uma família que vai se apaixonar por mim e nunca mais me abandonar. Vem me fazer uma visita, quem sabe a sua família não acabe se tornando a minha também?",

   "Eu sou essa doguinha alegre e independente. Mas, olha... vou te contar que eu nem sempre estive tão em forma assim. Antes de ser resgatada pela Good Dogtor, eu vivia em um clube cheio de outros doguinhos e de animais silvestres. Mas agora eu posso ficar aqui segura com meus amigos brincalhões, recebendo comida gostosa e água fresquinha. Para melhorar os meus dias só falta uma coisa: uma família que vai se apaixonar por mim e nunca mais me abandonar. Vem me fazer uma visita, quem sabe a sua família não acabe se tornando a minha também?",

   "Eu sou esse doguinho alegre brincalhão. Mas, olha... vou te contar que eu nem sempre estive tão em forma assim. Antes de ser resgatado pela Good Dogtor, eu vivia em um clube cheio de outros doguinhos e de animais silvestres. Mas agora eu posso ficar aqui seguro com meus amigos brincalhões, recebendo comida gostosa e água fresquinha. Para melhorar os meus dias só falta uma coisa: uma família que vai se apaixonar por mim e nunca mais me abandonar. Vem me fazer uma visita, quem sabe a sua família não acabe se tornando a minha também?"
];

$("#bio").html(bios[parseInt(id/3)]);

$(".cachorrineo").css("background-image", "url(imagens/grandes/" + id + ".jpg)");

$(".femea").html(sexo[parseInt(id/3)]);

$(".carente").html(temperamento[parseInt(id/3)]);

$(".anos").html(idade[parseInt(id/3)]+ " anos");

$(".pequena").html(porte[parseInt(id/3)]);




