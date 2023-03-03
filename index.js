const title = ['s tilte.online',
    'sti lte.online',
    'stil te.online',
    'stilt e.online',
    'stilte .online',
    'stilte. online',
    'stilte.o nline',
    'stilte.on line',
    'stilte.onl ine',
    'stilte.onli ne',
    'stilte.onlin e',
    'stilte.online',
    'stilte.onlin e',
    'stilte.onli ne',
    'stilte.onl ine',
    'stilte.on line',
    'stilte.o nline',
    'stilte. online',
    'stilte .online',
    'stilt e.online',
    'stil te.online',
    'sti lte.online',
    's tilte.online',
    ' stilte.online'
]

const text = document.getElementById('text');

text.style.height = screen.height * 0.65 + "px";

let i = 1;
function animateTitle() {
    i >= title.length - 1 ? (i = 0) : i++,
    (document.title = title[i]),
    setTimeout('animateTitle()', 200)
}
animateTitle();