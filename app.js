const MY_COLOR = document.getElementById("my-color");
const MY_BUTTON = document.getElementById("my-button");

function getRandomColor() {
  const letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

MY_BUTTON.addEventListener("click", () => {
  const randomColor = getRandomColor();
  MY_COLOR.style.backgroundColor = randomColor;
});
