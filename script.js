//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Load preferences from cookies, if available
  if (localStorage.getItem('font-size')) {
    const savedFontSize = localStorage.getItem('font-size');
    fontSizeInput.value = savedFontSize;
    applyFontSize(savedFontSize);
  }

  if (localStorage.getItem('font-color')) {
    const savedFontColor = localStorage.getItem('font-color');
    fontColorInput.value = savedFontColor;
    applyFontColor(savedFontColor);
  }

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save preferences to cookies (localStorage)
    localStorage.setItem('font-size', fontSize);
    localStorage.setItem('font-color', fontColor);

    // Apply customizations
    applyFontSize(fontSize);
    applyFontColor(fontColor);
  });

  function applyFontSize(fontSize) {
    document.body.style.fontSize = fontSize + 'px';
  }

  function applyFontColor(fontColor) {
    document.body.style.color = fontColor;
  }
});
