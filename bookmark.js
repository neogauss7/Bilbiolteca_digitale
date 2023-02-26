const checkbox = document.getElementById("bookmark");
const save = function () {
  if (checkbox.checked) {
    localStorage.setItem(`bookmark${window.location.pathname}`, true);
  } else localStorage.removeItem(`bookmark${window.location.pathname}`);
};
checkbox.checked = localStorage.getItem(`bookmark${window.location.pathname}`);
