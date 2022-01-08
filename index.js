let button = document.querySelector(".btn");
let search = document.querySelector(".search");
let img = document.querySelector(".img");
let imgMain = document.querySelector(".img-main");
const CAT_URL = "https://api.thecatapi.com/v1/breeds";

search.addEventListener("change", (event) => {
  let lower = event.target.value[0].toLowerCase() + event.target.value.slice(1);
  getImage(lower);
});

function getImage() {
  imgMain.textContent = "";
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        let allImg = document.createElement("img");
        allImg.classList.add("allImg");
        allImg.src = element.url;
        imgMain.append(allImg);
      });
    });
}

function getName() {
  fetch(CAT_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((element) => {
        console.log(element);
        let opt = document.createElement("option");
        opt.classList.add(".opt");
        let name = element;
        opt.textContent = name;
        search.append(opt);
      });
    });
}

getName();
