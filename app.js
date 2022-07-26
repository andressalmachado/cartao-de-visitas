function alterar() {
  document.body.classList.toggle("light");

  var image = document.getElementById("image");
  console.log(image.src);
  if (image.src === "http://127.0.0.1:5500/img/light-mode.png") {
    image.src = "http://127.0.0.1:5500/img/dark-mode.png";
  } else if (image.src === "http://127.0.0.1:5500/img/dark-mode.png") {
    image.src = "http://127.0.0.1:5500/img/light-mode.png";
  }
}
