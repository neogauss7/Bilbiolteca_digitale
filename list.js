let img = [ ...document.querySelectorAll('img')];
let gulp = []
for (i in img) {
   gulp.push(img[i].src.slice(28));

}
console.log(gulp);
const titles = [
    'Moto rettilineo uniforme',
    'Moto rett. unif. accelerato',
    'Moto circolare',
    'Moto di caduta libera',
    'Moto su un piano inclunato', 'Moto armonico',
    'Moto parabolico'

]
const images = [
    'images/rettunifthumb.webp', 'images/unifaccthumb.webp', 'images/motocircthumb.webp', 'images/cadutathumb.webp', 'images/pianoinclinatothumb.webp', 'images/armonicothumb.webp', 'images/parabolicothumb.webp',
]
for (let i = 0; i< titles.length; i++) {
document.querySelector('.grid-container').insertAdjacentHTML("afterbegin", `<a href="motoRettilineoUniforme.html"
><div class="grid-element">
  <div class="photo photodiv">
    <img
      alt="${titles[i]} Theoremz"
      class="photo"
      src="${images[i]}"
    />
    <img
      class="level"
      alt="Level Theoremz"
      src="images/easy.svg"
    />
    <img
      class="blob"
      alt="Blob Theoremz"
      src="images/bloblu.svg"
    />
  </div>
  <div class="text">
    <h2 class="p2">${titles[i]}</h2>
  </div>
</div></a
>`)}
