var nota1 = prompt('Digite a nota 1:  ');
var nota2 = prompt('Digite a nota 2: ');
var nota3 = prompt('Digite a nota 3:  ');
var media = (nota1 + nota2 + nota3)/3;

if((media > 8)){
    alert('Parabéns pelo empenho!');
}else if (media <=8) {
    alert('Boa chegou lá!');
} else {
    alert('Infelizmente foi reprovado');
}
