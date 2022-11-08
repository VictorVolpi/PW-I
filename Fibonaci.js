
var r,g, a, v, i;
r = parseInt(prompt("Digite até o número for encontrado"));
a=0;
g=1;
document.write(g+" ");
for(i = 1; i<= r; i++){
    v=a;
    a=g;
    g=a+v;
    document.write(g+" ")
}

