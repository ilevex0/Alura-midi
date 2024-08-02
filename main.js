function tocaSom(idElement){
    document.querySelector(idElement).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let i = 0;
while(i < listaDeTeclas.length) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    listaDeTeclas[i].onclick = function() {
        tocaSom(`#som_${instrumento}`);
    };
    i++;
}
