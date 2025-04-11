// Simple script to generate placeholder icons
// You can replace these with custom designed icons later

function generateIcon(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#4285f4'; // Google blue
  ctx.fillRect(0, 0, size, size);
  
  // Letter "W" (for word)
  ctx.fillStyle = 'white';
  ctx.font = `bold ${Math.floor(size * 0.6)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('W', size / 2, size / 2);
  
  // Border
  ctx.strokeStyle = '#3367d6'; // Darker blue
  ctx.lineWidth = Math.max(1, Math.floor(size * 0.03));
  ctx.strokeRect(0, 0, size, size);
  
  return canvas.toDataURL('image/png');
}

// Generate icons of different sizes
const sizes = [16, 48, 128];
sizes.forEach(size => {
  const link = document.createElement('a');
  link.download = `icon${size}.png`;
  link.href = generateIcon(size);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
