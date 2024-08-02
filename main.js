function tocaSom(idElement){
    document.querySelector(idElement).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");


for(let i= 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    listaDeTeclas[i].onclick = function() {
        tocaSom(`#som_${instrumento}`);
    }
}
