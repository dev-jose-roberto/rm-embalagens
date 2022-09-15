// Variáveis de controle
let images = [...document.querySelectorAll(".carousel-image")],
  buttons = [...document.querySelectorAll(".carousel-button")],
  carousel = document.querySelector("#carousel-images");
index = 0;

// Mecanismo de animação
slider = (i) => {
  // Reset
  if (i >= images.length) {
    index = 0;
    i = index;
  }
  // Efeito slide
  carousel.style.transform = "translate(-" + i + "00%,0)";
  // Reset e seleção do botão
  buttons.forEach((botao) => {
    botao.classList.remove("active");
  });
  buttons[i].classList.add("active");
  // Pós execução
  index += 1;
};

// Loop do carousel
let loop = setInterval(() => {
  slider(index);
}, 3000);

// Selecionar slide

buttons.forEach((botao) => {
  botao.addEventListener("click", () => {
    clearInterval(loop);
    slider(botao.dataset.index);
    loop = setInterval(() => {
      slider(index);
    }, 4000);
  });
});
