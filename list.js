
const imagesM =['images/funzionethumb.webp', 'images/ruffinithumb.webp', 'images/scompthumb.webp', 'images/entigeomthumb.webp', 'images/assiomithumb.webp', 'images/trasversalethumb.webp','#', '#', 'images/scompthumb.webp', 'images/monepolthumb.webp', 'images/divisionethumb.webp', 'images/ppotenzethumb.webp', 'images/prodottinotthumb.webp', 'images/circthumb.webp', 'images/frattethumb.webp', 'images/sistemathumb.webp', 'images/modulothumb.webp', 'images/biquadratichethumb.webp', '#', 'images/parabolathumb.webp', 'images/rettathumb.webp', 'images/ellissethumb.webp', 'images/vettorithumb.webp', 'images/equazionethumb.webp', 'images/secondogradothumb.webp', 'images/radicalithumb.webp', 'images/razzionthumb.webp', 'images/disequazionethumb.webp', 'images/parametricathumb.webp', 'images/immaginarithumb.webp', 'images/complessithumb.webp', '#', 'images/funespthumb.webp', 'images/eqlogthumb.webp', "images/funlogthumb.webp", "images/disespthumb.webp", "images/eqdisespthumb.webp",
"images/eqespthumb1.webp"]

const linksM = ['/funzioni.html', '/regolaDiRuffini.html', '/scomposizioneDeiPolinomi.html', '/entiGeometriciFondamentali.html', '/teoremiEAssiomi.html', '/retteTagliateDaUnaTrasversale.html', '/triangoliParticolari.html', '/trapezio.html', '/scomposizioneDeiPolinomi.html', '/monomiEPolinomi.html', '/divisioneTraPolinomi.html', '/propriet%C3%A0DellePotenze.html', '/prodottiNotevoli.html', '/circonferenza.html', '/equzioniFratte.html', '/sistemi.html', '/moduli.html', '/equazioniBiquadratiche.html', '/luogoGeometrico.html', '/parabole.html', '/rette.html', '#', '#', '/equazioni.html', '/equazioniDiSecondoGrado.html', '/radicali.html', '/razionalizzazione.html', '/disequazioniDiSecondoGrado.html', '/equazioniParametriche.html', '/numerImmaginari.html', '/numeriComplessi.html', '/formaTrigonometricaDeiNumeriComplessi.html', '/funzioneEsponenziale.html', '/logaritmi.html', '/funzioneLogaritmica.html', '/equazioniEDisequazioniLogaritmiche.html', '/equazioniEsponenziali.html', '/disequazioniEsponenziali.html']

const titlesM = ['Funzioni', 'Regola di Ruffini', 'Scomposizione di polinomi', 'Enti geometrici fondamentali', 'Teoremi e assiomi', 'Rette con trasversale', 'Triangoli particolari', 'Trapezio', 'Scomposizione di polinomi', 'Monomi e polinomi', 'Divisione tra polinomi', 'Proprietà delle potenze', 'Prodotti notevoli', 'Circonferenza', 'Equazioni fratte', 'Sistemi di equazioni', 'Equazioni con moduli', 'Equazioni biquadratiche', 'Luogo geometrico', 'Parabole', 'Rette', 'Ellisse', 'Vettori', 'Equazioni di 1° grado', 'Equazioni di 2° grado', 'Radicali', 'Razionalizzazione', 'Disequazioni di 2° grado', 'Equazioni parametriche', 'Numeri immaginari', 'Numeri complessi', 'Forma trig. dei numeri c.', 'Funzioni esponenziali', 'Logaritmi e proprietà', 'Funzione logaritmica', 'Eq. e diseq. logaritmiche', 'Equazione esponenziale', 'Disequazione esponenziale']

const levelsM = ['medium', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'medium', 'easy', 'easy', 'medium', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy','medium', 'medium', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', ]

const linksP = ['motoRettilineoUniforme.html', 'mrua.html', 'motoCircolare.html', 'motoDiCadutaLibera.html', 'motoSuPianoInclinato.html', 'motoArmonico.html', 'motoParabolico.html']
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

if (window.location.href == 'https://www.theoremz.com/Fisica.html') {
for (let i = 0; i< titlesP.length; i++) {
document.querySelector('.grid-container').insertAdjacentHTML("beforeend", `<a href="${linksP[i]}"
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
>`)}}

if (window.location.href == 'https://www.theoremz.com/Matematica.html') {

for (let i = 0; i< titlesM.length; i++) {
    document.querySelector('.grid-container').insertAdjacentHTML("beforeend", `<a href="${linksM[i]}"
    ><div class="grid-element">
      <div class="photo photodiv">
        <img
          alt="${titlesM[i]} Theoremz"
          class="photo"
          src="${imagesM[i]}"
        />
        <img
          class="level"
          alt="Level Theoremz"
          src="images/${levelsM[i]}.svg"
        />
        <img
          class="blob"
          alt="Blob Theoremz"
          src="images/bloblu.svg"
        />
      </div>
      <div class="text">
        <h2 class="p2">${titlesM[i]}</h2>
      </div>
    </div></a
    >`)}}