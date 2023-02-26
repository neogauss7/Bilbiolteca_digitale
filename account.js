const items = { ...localStorage };

let paragraph = document.createElement("p");

console.log(items.bookmark);

const array = Object.keys(items);

for (let i = 0; i < array.length; i++) {
  if (array[i].startsWith("bookmark")) {
    let name = array[i].slice(9, -5).replace(1);
    let Name = name.charAt(0).toUpperCase() + name.slice(1);
    let paragraph = document.createElement("p");
    paragraph.textContent = Name;
    let parent = document.getElementById("parent1");
    parent.appendChild(paragraph);
  }
}
