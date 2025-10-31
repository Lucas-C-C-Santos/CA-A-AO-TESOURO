const startBtn = document.getElementById('startBtn');
const treasure = document.getElementById('treasure');

// Seções
const areas = [];
for (let i = 1; i <= 6; i++) {
  areas[i] = document.getElementById(`area${i}`);
}

// Palavras e textos ocultos
const words = [];
const hiddenTexts = [];
for (let i = 1; i <= 5; i++) {
  words[i] = document.getElementById(`word${i}`);
  hiddenTexts[i] = document.getElementById(`hiddenText${i}`);
}
const word6 = document.getElementById('word6');

// Iniciar o jogo
startBtn.addEventListener('click', () => {
  areas[1].classList.remove('hidden');
  document.getElementById('intro').classList.add('hidden');
});

// Dica 1: imagem
document.getElementById('clue1').addEventListener('click', () => {
  alert('Você encontrou uma pista escondida na imagem!');
  areas[2].classList.remove('hidden');
});

// Dica 2 a 5
for (let i = 2; i <= 5; i++) {
  words[i].addEventListener('click', () => {
    hiddenTexts[i].classList.remove('hidden');
    alert(`Você descobriu a Pista ${i}!`);
    areas[i + 1].classList.remove('hidden');
  });
}

// Dica final (tesouro)
word6.addEventListener('click', () => {
  treasure.classList.remove('hidden');
  alert('🎉 Parabéns! Você encontrou o Tesouro da Inclusão Digital!');
});
