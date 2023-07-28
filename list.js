let img = [ ...document.querySelectorAll('img')];
let gulp = []
for (i in img) {
   gulp.push(img[i].src.slice(28));

}
console.log(gulp);
const titlesP = [
    'Moto rettilineo uniforme',
    'Moto rett. unif. accelerato',
    'Moto circolare',
    'Moto di caduta libera',
    'Moto su un piano inclinato', 'Moto armonico',
    'Moto parabolico'

]
const imagesP = [
    'images/rettunifthumb.webp', 'images/unifaccthumb.webp', 'images/motocircthumb.webp', 'images/cadutathumb.webp', 'images/pianoinclinatothumb.webp', 'images/armonicothumb.webp', 'images/parabolicothumb.webp',
]
const levelsP = ['easy', 'easy', 'easy', 'easy', 'easy', 'medium', 'medium', ]
for (let i = 0; i< titlesP.length; i++) {
document.querySelector('.grid-container').insertAdjacentHTML("beforeend", `<a href="motoRettilineoUniforme.html"
><div class="grid-element">
  <div class="photo photodiv">
    <img
      alt="${titlesP[i]} Theoremz"
      class="photo"
      src="${imagesP[i]}"
    />
    <img
      class="level"
      alt="Level Theoremz"
      src="images/${levelsP[i]}.svg"
    />
    <img
      class="blob"
      alt="Blob Theoremz"
      src="images/bloblu.svg"
    />
  </div>
  <div class="text">
    <h2 class="p2">${titlesP[i]}</h2>
  </div>
</div></a
>`)}
