const connectButtons = document.querySelectorAll('.connect-btn');

connectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.textContent;
    button.textContent = 'Requested';
    button.disabled = true;
    button.style.opacity = '0.8';

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = '1';
    }, 1400);
  });
});
