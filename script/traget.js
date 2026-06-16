// Not my CODE (unfortunatly, Holy Ai) I do understand what it does though.
const popupButton = document.getElementById('popupButton');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const loadingBar = document.getElementById('loadingBar');
const loadingInner = loadingBar.querySelector('.loading-inner');
const panels = document.querySelectorAll('.panel');

function triggerLoad() {
  loadingBar.style.display = 'block';
  loadingInner.style.width = '0%';
  void loadingInner.offsetWidth;
  loadingInner.style.width = '100%';
}

popupButton.addEventListener('click', () => {
  popupButton.classList.add('pressed');
  triggerLoad();
  setTimeout(() => {
    modalBackdrop.classList.remove('hidden');
    popupButton.classList.remove('pressed');
    loadingInner.style.width = '0%';
    loadingBar.style.display = 'none';
  }, 900);
});

modalClose.addEventListener('click', () => {
  modalBackdrop.classList.add('hidden');
});

modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.add('hidden');
  }
});

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.add('flash');
    setTimeout(() => panel.classList.remove('flash'), 250);
  });
});

// Add small hover glow effect to interactive areas.
const hoverTargets = [popupButton, ...document.querySelectorAll('.crimes-panel li')];
hoverTargets.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.boxShadow = '0 0 18px rgba(255, 0, 0, 0.35)';
  });
  element.addEventListener('mouseout', () => {
    element.style.boxShadow = '';
  });
});


