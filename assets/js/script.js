// HEADER
window.addEventListener('scroll', function () {
  var menu = document.getElementById('header-container');
  if (window.scrollY > 1) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});

// TOGGLE MENU
function toggleMenu() {
  var x = document.getElementById("topbar");
  x.classList.toggle("show");
}

document.querySelectorAll('.nav-link a').forEach(item => {
  item.addEventListener('click', event => {
      var menu = document.getElementById("topbar");
      menu.classList.remove("show");
  });
});

// COPY 
function copyToClipboard(type) {
  const textToCopy = document.getElementById(type).innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      const message = document.getElementById(`${type}-message`);

      message.style.display = "inline";

      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    })
    .catch((error) => {
      console.error("Ошибка при копировании:", error);
    });
}

