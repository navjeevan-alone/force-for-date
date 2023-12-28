
const wrapper = document.querySelector('.btn-wrapper');
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
wrapper.addEventListener('mouseover', function () {
    moveWrapperToRandomPosition();
});

function moveWrapperToRandomPosition() {
    const windowHeight = window.innerHeight - wrapper.offsetHeight;
    const windowWidth = window.innerWidth - wrapper.offsetWidth;

    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;

    wrapper.style.left = newX + 'px';
    wrapper.style.top = newY + 'px';
}
const buttonYes = document.getElementById('yes');
const image = document.getElementById('gif');

buttonYes.addEventListener('click', () => {
    image.src = 'https://media1.tenor.com/m/1A6yNLKJIx0AAAAC/hi.gif'; // Update this path to your new image
    buttonYes.remove();
    wrapper.remove();
    title.innerHTML = "Hello you clicked"
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