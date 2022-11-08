var b,e,i,v=0;
b=parseInt(prompt("Digite o valor da base"));
e=parseInt(prompt("Digite o valor do expoente"));
for(i = 1; i<=e; i++){
    v=v+b*b;
    document.write(b+"x");
}
document.write("="+v);