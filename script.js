const startBtn = document.getElementById('startBtn');
const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
const area3 = document.getElementById('area3');
const clue1 = document.getElementById('clue1');
const hiddenText = document.getElementById('hiddenText');
const treasure = document.getElementById('treasure');

startBtn.addEventListener('click', () => {
  area1.classList.remove('hidden');
  document.getElementById('intro').classList.add('hidden');
});

clue1.addEventListener('click', () => {
  alert('Você encontrou uma pista escondida na imagem!');
  area2.classList.remove('hidden');
  hiddenText.classList.remove('hidden');
});

hiddenText.addEventListener('click', () => {
  area3.classList.remove('hidden');
  alert('Parece que o tesouro está próximo...');
});

area3.addEventListener('click', () => {
  treasure.classList.remove('hidden');
});
