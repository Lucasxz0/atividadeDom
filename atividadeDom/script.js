let valor = 0;

let contador = document.getElementById("contador");
let btnMais = document.getElementById("btnMais");
let btnMenos = document.getElementById("btnMenos");

let input = document.getElementById("inputTexto");
let contadorCaracteres = document.getElementById("contadorCaracteres");
let areaParagrafos = document.getElementById("paragrafos");

let tipoLista = document.getElementById("tipoLista");
let btnLista = document.getElementById("btnLista");
let areaListas = document.getElementById("listas");

let btnReset = document.getElementById("btnReset");


btnMais.addEventListener("click", function(){
    valor++;
    contador.innerText = valor;
});

btnMenos.addEventListener("click", function(){
    if(valor > 0){
        valor--;
    } else {
        alert("O contador já está em zero!");
    }
    contador.innerText = valor;
});


input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let p = document.createElement("p");
        p.innerText = input.value;

        areaParagrafos.appendChild(p);

        input.value = "";
        atualizarContador();
    }
});


input.addEventListener("input", atualizarContador);

function atualizarContador(){
    let texto = input.value.replace(/\s/g, "");
    contadorCaracteres.innerText = texto.length + " caracteres";
}


btnLista.addEventListener("click", function(){
    let lista = document.createElement(tipoLista.value);

    for(let i = 1; i <= 3; i++){
        let item = document.createElement("li");
        item.innerText = "Item " + i;
        lista.appendChild(item);
    }

    areaListas.appendChild(lista);
});


btnReset.addEventListener("click", function(){
    valor = 0;
    contador.innerText = 0;

    areaParagrafos.innerHTML = "";
    areaListas.innerHTML = "";

    input.value = "";
    atualizarContador();
});