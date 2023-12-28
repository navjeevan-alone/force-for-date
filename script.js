
const noBtn = document.querySelector('.btn-no-wrapper');
const title = document.querySelector(".title")
const bodyElement = document.body;
const container = document.querySelector(".container")
const endMessageStr = `<p>Jst developer things!!!</p>
      <p>Made with 💖 & 😀</p>
      <p><i>by</i></p>
      <p>The LEGEND</p>
      <p>
        <a href="https://www.instagram.com/navjeevanalone1/" target="_blank"
          >@navjeevanalone1</a  >
      </p>`;
let size = 1;
noBtn.addEventListener('mouseover', movenoBtnToRandomPosition);

function movenoBtnToRandomPosition() {
    console.log("hello")
    noBtn.style.position = "absolute"
    const windowHeight = window.innerHeight - noBtn.offsetHeight;
    const windowWidth = window.innerWidth - noBtn.offsetWidth;

    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.padding = "5rem"
    noBtn.style.transform = `scale(${size})`
    if (size != 0)
        size -=0.05;
}
const buttonYes = document.getElementById('yes');
const image = document.getElementById('gif');

buttonYes.addEventListener('click', () => {
    image.src = 'https://media1.tenor.com/m/1A6yNLKJIx0AAAAC/hi.gif'; // Update this path to your new image
    buttonYes.remove();
    noBtn.remove();
    title.innerHTML = "Humko koi na nhi bol sakta 😎"
    bodyElement.style.cursor = `url(./assets/huggingface.png), auto`;
    setTimeout(displayFooter, 3000);

});
function disableRightClick() {
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
}

function disableKeyboardShortcuts() {
    document.addEventListener('keydown', function (event) {
        // You can add specific key combinations you want to block
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
            event.preventDefault();
        }
    });
}

function blockDevTools() {
    // This is a simple and not very effective way to discourage opening DevTools
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0)))) {
            alert('Developer tools are blocked on this page');
            return false;
        }
    }
}

// disableRightClick();
// disableKeyboardShortcuts();
// blockDevTools();

function displayFooter() {
    container.classList.add("end-message")
    bodyElement.style.background = "var(--black)"
    container.innerHTML = endMessageStr;
}