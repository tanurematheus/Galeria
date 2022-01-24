const btnLateral = document.querySelector(".barraLateral .menu");
const barraLateral = document.querySelector(".barraLateral");
const favoritos = document.querySelector(".favoritos");
const inicio = document.querySelector(".inicio");
const configuracoes = document.querySelector(".configuracoes");
const body = document.querySelector("body");
const titulo = document.querySelector(".titulo h1");

btnLateral.addEventListener("click", () => {
    const img = btnLateral.querySelector("img");
    const flag = barraLateral.classList.contains("closed");
    img.src = flag ? './assets/close-menu.svg' : './assets/open-menu.svg';
    barraLateral.classList.toggle("closed");
});

favoritos.addEventListener("click", () => {
    titulo.textContent = "Favoritos";
    imagens.forEach(imagem => {
        const like = imagem.querySelector(".like");
        if (like.classList.contains("hidden")) {
            imagem.classList.add("hidden");
        }
    })
});

inicio.addEventListener("click", () => {
    titulo.textContent = "Início";
    imagens.forEach(imagem => {
        imagem.classList.remove("hidden");
    })
});

configuracoes.addEventListener("click", () => {
    body.classList.toggle("dark");
});