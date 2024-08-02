function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName ==="audio"){
        elemento.play();
    }
    else {
        alert("Element not found.");
        console.log("Element not found.");
    }
}
const listaDeTeclas = document.querySelectorAll(".tecla");


for(let i= 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    listaDeTeclas[i].onclick = function() {
        tocaSom(`#som_${instrumento}`);
    }

    tecla.onkeydown = function (event) {
        if(event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (event) {
        if(event.code === "Enter" || event.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }
}
