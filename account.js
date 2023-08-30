const items = { ...localStorage };

let paragraph = document.createElement("p");

const array = Object.keys(items);

function prettifyCamelCase(str) {
  var output = "";
  var len = str.length;
  var char;

  for (var i = 0; i < len; i++) {
    char = str.charAt(i);

    if (i == 0) {
      output += char.toUpperCase();
    } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
      output += " " + char;
    } else if (char == "-" || char == "_") {
      output += " ";
    } else {
      output += char;
    }
  }

  return output;
}

let elementlist = document.querySelector('.lezioni-preferite');

for (let i = 0; i < array.length; i++){
if (array[i].startsWith("bookmark")) {
let name = array[i].slice(9, -5).replace(1);
let Name = prettifyCamelCase(name);
elementlist.insertAdjacentHTML("afterbegin", `<div class="box box${i}"><a href="${array[i].slice(9)}"><p>${Name}</p></a></div><button class="o${i} buttond">
<svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button><br>`)
document.querySelector(`.o${i}`).addEventListener('click', function(){
  console.log(i);
  localStorage.removeItem(array[i]);
  location.reload();
})
}
}


