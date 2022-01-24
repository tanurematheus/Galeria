const imagens = document.querySelectorAll(".imagem");
const modal = document.querySelector(".modal");

const closeModal = modal.querySelector(".modal__close");
const imgModal = modal.querySelector(".modal__image");
const likeModal = modal.querySelector(".like");
const btnPrevious = modal.querySelector(".modal__previous");
const btnNext = modal.querySelector(".modal__next");

let imagemAtual = null;

const updateModal = (elemento) => {
    console.log(imagemAtual);
    const imagem = elemento.querySelector(".foto");
    const like = elemento.querySelector(".like");
    imgModal.src = imagem.src;
    updateBtn(elemento);
    like.classList.contains('hidden') ? likeModal.classList.add('hidden') : likeModal.classList.remove('hidden');
}

const updateBtn = (elemento) => {
    if (elemento.previousElementSibling) {
        btnPrevious.classList.remove("hidden");
    } else {
        btnPrevious.classList.add("hidden");
    }
    if (elemento.nextElementSibling) {
        btnNext.classList.remove("hidden");
    } else {
        btnNext.classList.add("hidden");
    }
}

imagens.forEach(imagem => {
    imagem.addEventListener("click", () => {
        modal.classList.remove("hidden");
        imagemAtual = imagem;
        updateModal(imagemAtual);
    })
})

btnPrevious.addEventListener("click", () => {
    imagemAtual = imagemAtual.previousElementSibling;
    updateModal(imagemAtual);
})

btnNext.addEventListener("click", () => {
    imagemAtual = imagemAtual.nextElementSibling;
    updateModal(imagemAtual);
})

imgModal.addEventListener('dblclick', () => {
    const like = imagemAtual.querySelector('.like');
    like.classList.toggle('hidden');
    updateModal(imagemAtual);
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
})