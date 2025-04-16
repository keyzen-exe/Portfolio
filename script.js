const container = document.querySelector('.sliderProjets-container');

let isDown = false;
let startX;
let scrollLeft;
container.addEventListener('dragstart', (e) => e.preventDefault());

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  container.classList.add('dragging');
  startX = e.clientX;
  scrollStart = container.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const delta = e.clientX - startX;
  container.scrollLeft = scrollStart - delta;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.classList.remove('dragging');
});