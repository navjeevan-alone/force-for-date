
// Selecting DOM elements
const noBtn = document.querySelector('.btn-no-wrapper');
const yesBtn = document.querySelector('#yes');
const title = document.querySelector(".title");
const bodyElement = document.body;
const container = document.querySelector(".container");
const gif = document.querySelector("#gif")
let size = 1;

// Image sources (unused in current code, but kept for potential future use)
const imgSrc = {
    initial: "https://media.tenor.com/AKHj5e7v4pcAAAAi/cute.gif",
    ifNo: "https://media1.tenor.com/m/I3dzAXpujPQAAAAC/cry.gif",
    ifYes: "https://media.tenor.com/7Ie2NGeUuFgAAAAi/cutecat.gif"
};

// Event listeners for buttons
yesBtn.addEventListener('click', handleYesClick);
noBtn.addEventListener('mouseover', movenoBtnToRandomPosition);
noBtn.addEventListener("click", handleNoClick);

// Disable right-click, keyboard shortcuts, and developer tools access
disableRightClick();
disableKeyboardShortcuts();
blockDevTools();

// Function definitions
function movenoBtnToRandomPosition() {
    console.log("hello");
    noBtn.style.position = "absolute";
    const windowHeight = window.innerHeight - noBtn.offsetHeight;
    const windowWidth = window.innerWidth - noBtn.offsetWidth;

    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transform = `scale(${size})`;
    size -= 0.02
}

function handleNoClick() {
    title.innerHTML = `You broke my heart 💔 </br>
    <p>मुसाफ़िर हैं हम भी मुसाफ़िर हो तुम भी </br>
किसी मोड़ पर फिर मुलाक़ात होगी 
</p >`;
    alert("You clicked No! That's not fair.");
    gif.src = imgSrc.ifNo;
    yesBtn.innerText = "Please say yes!!";
    yesBtn.classList.add("flikker")

    noBtn.remove();

}
function handleYesClick() {
    title.innerHTML = "Humko koi na nhi bol sakta 😎";
    console.log(gif.src)
    gif.src = imgSrc.ifYes;
    yesBtn.remove();
    noBtn.remove();
    bodyElement.style.cursor = "pointer"
    bodyElement.style.cursor = ` url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewport="0 0 32 32" style="fill:black;font-size:24px;"><text y="50%" x="50%" dy=".35em" text-anchor="middle" style="font-family:Arial;">😃</text></svg>'), auto`

    setTimeout(displayEndMessage, 3000);
}


// function removeElements() {

// }
function displayEndMessage() {
    container.classList.add("end-message");
    bodyElement.style.background = "var(--black)";
    container.innerHTML = endMessageStr;

    const reloadBtn = document.querySelector('#reload');
    reloadBtn.addEventListener("click", () => window.location.reload());
}

function disableRightClick() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    alert("Don't Play Smart \nIf You are mad, I am your dad");
}

function disableKeyboardShortcuts() {
    document.addEventListener('keydown', event => {
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
            event.preventDefault();
        }
    });
}

function blockDevTools() {
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) {
            alert("Don't Play Smart \nIf You are mad, I am your dad");
            return false;
        }
    };
}

// End message HTML template
const endMessageStr = `
    <p>Jst developer things!!!</p>
    <p>Made with 💖 & 😀</p>
    <p><i>by</i></p>
    <p>The LEGEND</p>
    <p>
        <a class="btn btn-sm" href="https://www.instagram.com/navjeevanalone1/" target="_blank">@navjeevanalone1</a>
    </p>
    <button class="btn" id="reload">Ask again!</button>
`;
