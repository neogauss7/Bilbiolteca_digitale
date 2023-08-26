const box = document.querySelector('.welcome')
let count = 0;
let xp = 0;
let score = 0;
const page = window.location.pathname.slice(1, -5)

const clickk = function() {
    document.querySelector('.board').classList.remove('invisible');
    document.querySelector('.overlay').classList.remove('invisible');
    window.onscroll = function () { window.scrollTo(0, 0); };
}

const domande = {
  funzioni: [['Cosa si pone diverso da zero per trovare il dominio di una funzione razionale fratta?', ['Il denominatore', true], ['Il numeratore', false], ['La funzione', false], ['La frazione', false]
  ], ['Una funzione contemporaneamente iniettiva e suriettiva è...', ['Reale', false], ['Complessa', false], ['Biettiva', true], ['Razionale', false]], ["L'insieme dei valori che può assumere la variabile indipendente di una funzione è...", ['Il dominio', true], ['Il codominio', false], ["L'insieme dei numeri reali", false], ["L'insieme dei numeri complessi", false]], ['Si deve porre maggiore di zero per trovare il dominio di funzioni logaritmiche...', ['Il logaritmo', false], ['La funzione', false], ["L'argomento del logaritmo", true], ['Il dominio', false]], ['Funzione strettamente crescente o strettamente decrescente è...', ['Invertibile', false], ['Monotona', true], ['Iniettiva', false], ['Suriettiva', false]]]
  
}


box.insertAdjacentHTML('beforeend', `<div class="board invisible" style="overflow: auto; height: fit-content !important; min-height: 410px; position: absolute; left: 20%; right: 20%; border-radius: 15px; z-index: 10;
  width: 60%; display: block; 
  color: black;"><div class="radio-input">
  <div class="progress">
  <div class="progress-value" style="width: 0"></div>
</div>
  <div class="info">
  <span class="question">${domande[page][count][0]}</span>
  <span class="steps">${count +1}/${domande[page].length}</span>
  </div>
  <span class="result success">Congratulations!</span>
  <span class="result error">Bad answer</span>
  <div style="display: flex; justify-content: space-between;">
   <button onclick="window.onscroll = function () {}
   count = 0
   xp = 0;
   score = 0;
   document.querySelector('body').classList.remove('papa')
   document.querySelector('.board').remove();
   build()
   document.querySelector('.board').classList.add('invisible')
   document.querySelector('.overlay').classList.add('invisible');
   suc()" class="esci">
    Esci
  </button>
  <button class="suc">
  Successivo
  </button>
  </div>
  </div></div>`)
  for (let index = 0; index < 4; index ++) {
    if (index != 4){
    document.querySelector('.info').insertAdjacentHTML('afterend', `<div><input type="radio" id="value-1" name="value-radio" value="value-1">
    <label class="pappa${index+1}"  for="value-1">${domande[page][count][index+1][0]}</label>`)
    if (domande[page][count][index+1][1]) {
      document.querySelector(`.pappa${index+1}`).addEventListener('click', function() {
        if (document.querySelector(`body`).classList.contains('papa') == false){
          document.querySelector(`body`).classList.add('papa')
        document.querySelector(`.pappa${index+1}`).style.color = 'green';
        document.querySelector(`.pappa${index+1}`).style.border = 'solid green 1px';
        xp = xp + 15;
        score++;
        }
  
      })
    } else document.querySelector(`.pappa${index+1}`).addEventListener('click', function() {
      if (document.querySelector(`body`).classList.contains('papa') == false){
        document.querySelector(`body`).classList.add('papa')
      document.querySelector(`.pappa${index+1}`).style.color = 'red';
      document.querySelector(`.pappa${index+1}`).style.border = 'solid red 1px';
      for (let index = 0; index < domande[page].length; index++) {
        if (domande[page][count][index+1][1]) {
          document.querySelector(`.pappa${index + 1}`).style.color = 'green';
          document.querySelector(`.pappa${index +1}`).style.border = 'solid green 1px';
        }
        }
      }
    })
    }}
const build = function() {
  box.insertAdjacentHTML('beforeend', `<div class="board" style="overflow: auto; height: fit-content !important; min-height: 410px; position: absolute; left: 20%; right: 20%; border-radius: 15px; z-index: 10;
  width: 60%; display: block;
  color: black;"><div class="radio-input">
  <div class="progress">
  <div class="progress-value" style="width: ${(count) / domande[page].length * 100}%"></div>
</div>
  <div class="info">
  <span class="question">${domande[page][count][0]}</span>
  <span class="steps">${count +1}/${domande[page].length}</span>
  </div>
  <span class="result success">Congratulations!</span>
  <span class="result error">Bad answer</span>
  <div style="display: flex; justify-content: space-between;">
   <button onclick="window.onscroll = function () {}
   count = 0
  xp = 0;
  score = 0;
   document.querySelector('body').classList.remove('papa')
   document.querySelector('.board').remove();
   build()
   document.querySelector('.board').classList.add('invisible')
   document.querySelector('.overlay').classList.add('invisible');
   suc()" class="esci">
    Esci
  </button>
  <button class="suc">
  Successivo
  </button>
  </div>
  </div></div>`)
  for (let index = 0; index < 4; index ++) {
    if (index != 4){
    document.querySelector('.info').insertAdjacentHTML('afterend', `<div><input type="radio" id="value-1" name="value-radio" value="value-1">
    <label class="pappa${index+1}"  for="value-1">${domande[page][count][index+1][0]}</label>`)
    if (domande[page][count][index+1][1]) {
      document.querySelector(`.pappa${index+1}`).addEventListener('click', function() {
        if (document.querySelector(`body`).classList.contains('papa') == false){
          document.querySelector(`body`).classList.add('papa')
          document.querySelector(`.pappa${index+1}`).style.color = 'green';
          document.querySelector(`.pappa${index+1}`).style.border = 'solid green 1px';
          xp = xp + 15;
          score++;
        }
  
      })
    } else document.querySelector(`.pappa${index+1}`).addEventListener('click', function() {
      if (document.querySelector(`body`).classList.contains('papa') == false){
        document.querySelector(`body`).classList.add('papa')
      document.querySelector(`.pappa${index+1}`).style.color = 'red';
      document.querySelector(`.pappa${index+1}`).style.border = 'solid red 1px';
      for (let index = 0; index < domande[page].length; index++) {
      if (domande[page][count][index+1][1]) {
        document.querySelector(`.pappa${index + 1}`).style.color = 'green';
        document.querySelector(`.pappa${index + 1}`).style.border = 'solid green 1px';
      }
      }
      }
    })
    }}
}

const make = function() {
  if (count == 0) {
    document.querySelector('html').insertAdjacentHTML('afterbegin', `<div class="overlay invisible" onclick="window.onscroll = function () {}
    count = 0
    xp = 0;
    score = 0;
    document.querySelector('body').classList.remove('papa')
    document.querySelector('.board').remove();
    build()
    document.querySelector('.board').classList.add('invisible')
    document.querySelector('.overlay').classList.add('invisible');
    suc()"  style="overflow: auto; height: 200%; position: absolute; left: 0; right: 0; z-index: 9;
width: 100%; display: block; background-color: black; opacity: 50%;
color: black;"> Quiz
</div>`)

box.insertAdjacentHTML('beforeend', `
<button onclick="clickk()" class="quiz"> Quiz
</button>`)
    }
}
const displayResult = function () {
  box.insertAdjacentHTML('beforeend', `<div class="board" style="overflow: auto; height: fit-content !important; min-height: 460px !important; position: absolute; left: 20%; right: 20%; border-radius: 15px; z-index: 10;
  width: 60%; display: block; background-color: green; 
  color: black;"><div class="radio-input">
  <div class="progress">
  <div class="progress-value" style="width: 100%"></div>
</div>
  <div class="results-summary-container">
      <div class="confetti">
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
      </div>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">IL tuo risultato:</div>
        <div class="result-box">
          <div class="heading-primary">${score}/${domande[page].length}</div>
          <p class="result">of ${domande[page].length}</p>
        </div>
        <div class="result-text-box">
          <div class="heading-secondary">${((score) / domande[page].length * 100) > 80 ? 'Eccellente': ((score) / domande[page].length * 100) > 50 ? 'Ottimo': ((score) / domande[page].length * 100) > 50 ? 'Bene' : 'OK'}</div>
          <p class="paragraph">
          ${xp} punti XP sono stati aggiunti al tuo account!
          </p>
        </div>
      </div>
    </div>
   <button onclick="window.onscroll = function () {}
   count = 0;
   xp = 0;
   score = 0;
   document.querySelector('body').classList.remove('papa')
   document.querySelector('.board').remove();
   build()
   document.querySelector('.board').classList.add('invisible')
   document.querySelector('.overlay').classList.add('invisible');
   suc()" style="width: auto" class="suc">
    Esci
  </button>
  </div></div>`)
  if (((score) / domande[page].length * 100) <= 50) {
    document.querySelector('.confetti').remove()
  }
}



make()
const suc = function() {
  document.querySelector('.suc').addEventListener('click', function() {
  if (document.querySelector(`body`).classList.contains('papa')) {
      document.querySelector('.board').remove()
      count = count + 1;
      if(domande[page].length == count){
        displayResult()
        console.log(xp);
        console.log(score);
      }
      document.querySelector(`body`).classList.remove('papa')
      build()
      suc()
    }})
}
suc()
// for (let i = 0;i < domande[page].length; i++) {
//   if (i == 0) {
//   build()
//   make()
// }
// document.querySelector('.suc').addEventListener('click', function() {
//   if (document.querySelector(`body`).classList.contains('papa')) {
//     document.querySelector('.board').remove()
//     count++
//     build()
//   }
// })
// }