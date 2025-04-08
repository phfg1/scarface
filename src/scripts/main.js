document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');
    const btnTopo = document.getElementById("btnTopo");

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }


    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
        btnTopo.classList.add("visible");
        } else {
        btnTopo.classList.remove("visible");
        }
    });


})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}
