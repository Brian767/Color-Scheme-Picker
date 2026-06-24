const form = document.getElementById("color-form");
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");

const colorsArray = [color1, color2, color3, color4, color5];

const colorHex1 = document.getElementById("color-hex-1");
const colorHex2 = document.getElementById("color-hex-2");
const colorHex3 = document.getElementById("color-hex-3");
const colorHex4 = document.getElementById("color-hex-4");
const colorHex5 = document.getElementById("color-hex-5");

const colorHexes = [colorHex1, colorHex2, colorHex3, colorHex4, colorHex5];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const colorInput = document.getElementById("color-seed");
  const colorValue = colorInput.value.slice(1);
  const schemeSelect = document.getElementById("color-scheme-options");
  const schemeValue = schemeSelect.value;

  console.log(`Color Value: ${colorValue}`);
  console.log(`Scheme Value: ${schemeValue}`);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeValue}&count=5`,
  )
    .then((response) => response.json())
    .then((data) => {
        
        for (const color of colorsArray) {
            color.style.backgroundColor =
            data.colors[colorsArray.indexOf(color)].hex.value;
        }
        
        for (const colorHex of colorHexes) {
            colorHex.textContent =
            data.colors[colorHexes.indexOf(colorHex)].hex.value;
        }
    });
});
