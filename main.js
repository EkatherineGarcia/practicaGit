function sumar(){
    var num1 = parseInt(document.getElementById('a').value);
    var num2 = parseInt(document.getElementById('b').value);
    var suma = num1+num2;
    alert('La suma es: '+suma)
}

function restar(){
    var num1 = parseInt(document.getElementById('a').value);
    var num2 = parseInt(document.getElementById('b').value);
    var resta = num1-num2;
    alert('La resta es: '+resta)
}

function mult(){
    var num1 = parseInt(document.getElementById('a').value);
    var num2 = parseInt(document.getElementById('b').value);
    var mult = num1*num2;
    alert('El producto es: '+mult)
}

function div(){
    var num1 = parseInt(document.getElementById('a').value);
    var num2 = parseInt(document.getElementById('b').value);
    var div = num1/num2;
    alert('El producto de la divisón es: '+div)
}