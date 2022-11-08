var n = parseInt(prompt("Informe um número inteiro:"));

var i = 1;
while(i <= 10){
    document.write(n + " x " + i + " = " + (n*i) + "<br>");
    i++;
}
document.write("<br>");

i = 1;
do{
    document.write(n + " x " + i + " = " + (n*i) + "<br>");
    i++;
}while(i <= 10);
document.write("<br>");


for(i = 1; i <= 10; i++){
    document.write(n + " x " + i + " = " + (n*i) + "<br>");
}
