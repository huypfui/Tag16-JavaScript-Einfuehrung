
let gallery = document.getElementById("gallery");

gallery.innerHTML = '<figure> <img src="../img/beach1.jpg" alt="Alt text"> <figcaption>Caption for image 1</figcaption> </figure>' + '<figure> <img src="../img/beach1.jpg" alt="Alt text"> <figcaption>Caption for image 2</figcaption></figure>' + '<figure> <img src="../img/beach1.jpg" alt="Alt text"> <figcaption>Caption for image 3</figcaption> </figure>';

let headlineThree = document.querySelector("gallery")

gallery.style.display = "flex";
gallery.style.justifyContent = "center";