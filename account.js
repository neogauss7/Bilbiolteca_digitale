const items = { ...localStorage };

let paragraph = document.createElement("p");

console.log(items.bookmark);

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

for (let i = 0; i < array.length; i++) {
  if (array[i].startsWith("bookmark")) {
    let name = array[i].slice(9, -5).replace(1);
    let Name = prettifyCamelCase(name);
    let paragraph = document.createElement("a");
    paragraph.classList.add("bookmark");
    paragraph.textContent = Name;
    paragraph.href = `${array[i].slice(9)}`;
    let parent = document.getElementById("parent1");
    parent.appendChild(paragraph);
    let p = document.createElement("p");
    parent.appendChild(p);
  }
}
