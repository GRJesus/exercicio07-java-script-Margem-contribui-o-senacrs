// var a = valor da fábrica
// var b = 28%
// Var c = 45%
// calcular o preço do veiculo

var a = parseInt (prompt("Digite aqui o valor do veiculo"));
var b = parseInt (prompt("Digite aqui % de quanto quer ganhar"));
var c = parseInt (prompt("Digite aqui % dos impostos"));
var errormessage = "Valor errado";
var divider = 1 - ((b+c)/100);//
var tax = x1 * ((c)/100);

var p1 = document.createElement ("p")//valor de venda
var p2 = document.createElement ("p")//valor de imposto
var p3 = document.createElement ("p")//valor de compra
var p4 = document.createElement ("p")//margem

if (divider <= 0) {
    document.body.append (errormessage);
} else { 
     if (divider >0) {
    var x1 = parseFloat(a / (divider));
    p1.append ("Valor de venda =R$ " + x1);
    var x2 = tax;
    p2.append ("Valor dos impostos =R$ " + x2);
    var x3 = a;
    p3.append ("Valor de compra =R$ " + x3);
    var x4 = x1 - (x2 + x3);
    p4.append ("Valor ganho = R$ " + x4)

    document.body.appendChild (p1);
    document.body.appendChild (p2);
    document.body.appendChild (p3);
    document.body.appendChild (p4);}
      }
