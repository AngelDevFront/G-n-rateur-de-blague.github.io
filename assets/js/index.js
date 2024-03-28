// https://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const content = document.getElementById("content");

// englober le fetch dans une function pour l'appeler quant on veut
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);
      header.textContent = joke.text_head;
      content.textContent =
        joke.text !== "" // si il n'as pas juste des "" tu affiche text
          ? joke.text //si vrai tu affiche le text si faut tu afficher l'autre text
          : joke.text_hidden;
    });
}
getJoke();

document.body.addEventListener("click", getJoke);
