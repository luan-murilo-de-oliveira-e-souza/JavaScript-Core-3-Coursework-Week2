function displayImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let imageCartoon = document.getElementById("image");
      imageCartoon.src = data.img;
    })
    .catch((error) => console.log(error));
}

displayImage();
