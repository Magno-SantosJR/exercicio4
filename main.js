alert("hello word!");

var num1 = 5;
var num2 = 10;
var soma = num1 + num2;
alert('A soma de ' + num1 + ' e ' + num2 + ' é igual a: ' + soma);

var divId = document.getElementById("div");
var buttonId = document.getElementById("trocaId");

buttonId.addEventListener("click", function () {
    divId.innerHTML = "Texto alterado pelo ID";
});

var divName = document.getElementsByName("troca")[0];
var buttonName = document.getElementById("trocaName");

buttonName.addEventListener("click", function () {
    divName.innerHTML = "Texto alterado pelo Name";
});


var divClass = document.querySelector(".class");
var buttonClass = document.getElementById("trocaClass");


buttonClass.addEventListener("click", function () {
    divClass.innerHTML = "Texto alterado pela Class";
});

