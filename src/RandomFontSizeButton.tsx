function drawFontSizeFromDistribution() {
  const fontSize = Math.floor(Math.random() * 40);
  return `${fontSize}px`;
}

function RandomFontSizeButton() {
  return (
    <button style={{ fontSize: drawFontSizeFromDistribution() }} >Button</button>
  )
}

export default RandomFontSizeButton;
