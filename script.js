const noButton = document.querySelector(".noButton");

noButton.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * 1200) + 1;
  const j = Math.floor(Math.random() * 500) + 1;
  noButton.style.display = "block";
  noButton.style.position = "absolute";
  noButton.style.left = i + "px";
  noButton.style.top = j + "px";
});
