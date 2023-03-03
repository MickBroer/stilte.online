const text = document.getElementById('text');

text.style.height = screen.height * 0.65 + "px";

function animateTitle() {
    i >= title.length - 1 ? (i = 0) : i++,
    (document.title = title[i]),
    setTimeout('animateTitle()', 200)
}
animateTitle();