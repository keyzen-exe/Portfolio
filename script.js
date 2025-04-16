function enableSliderDrag(container) {
  let isDragging = false;
  let startX;
  let scrollStart;

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
    if (isDragging) {
      isDragging = false;
      container.classList.remove('dragging');
    }
  });
}

// Appliquer la fonction aux deux sliders
enableSliderDrag(document.querySelector('#slider1'));
enableSliderDrag(document.querySelector('#slider2'));
