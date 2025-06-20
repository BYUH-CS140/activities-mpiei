// Generate a random hex color string like #A1B2C3
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Update page and display area background and show hex code text
  function updateColor(color) {
    const displayArea = document.getElementById('displayArea');
    displayArea.style.backgroundColor = color;       // Set display area's background
    document.body.style.backgroundColor = color;     // Set whole page background
    document.getElementById('colorValue').textContent = color;  // Show hex code
  }
  
  // Set event listener on button to generate new color on click
  document.getElementById('randomColorBtn').addEventListener('click', () => {
    const newColor = getRandomColor();
    updateColor(newColor);
  });
  
  // Initialize with a random color on page load
  window.onload = () => {
    updateColor(getRandomColor());
  };
  