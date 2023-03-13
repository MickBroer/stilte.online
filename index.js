const welcome = document.getElementById("welcome");
const wrapper = document.getElementById("wrapper");
welcome.setAttribute("onmouseenter", "changeColor(1)");
welcome.setAttribute("onmouseout", "changeColor(0)");
welcome.setAttribute("onclick", "siteEnter()");

let i = 1;
let resizeBool = 1;

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

function changeColor(bool){
    if (bool == 1){
        welcome.style.backgroundColor = "#D7D5EA";
        welcome.style.cursor = "pointer";
    }
    else{
        welcome.style.backgroundColor = "#FFFFFF";
    }
}

function siteEnter(){
    resizeBool = 0;
    slidingText.remove();
    welcome.remove();
    const siteTitle = document.createElement("p");
    siteTitle.innerHTML = "stilte.online";
    siteTitle.setAttribute("id", "websiteTitle")
    wrapper.appendChild(siteTitle);

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "/text/");
    iframe.setAttribute("frameBorder", "0");
    iframe.setAttribute("id", "text");

    wrapper.appendChild(iframe);
    const text = document.getElementById("text");

    text.style.height = screen.height * 0.6 + "px";

}

function animateTitle() {
    i >= title.length - 1 ? (i = 0) : i++,
    (document.title = title[i]),
    setTimeout('animateTitle()', 200);
    
}

const numText = 30;
let fontSize = window.innerHeight / numText * 0.65 + "px";
const slidingText = document.getElementById("slidingText");
const textArray = [];
const randomNumbers = [];
const intervalRate = 30;

function createText(){
    for (let i = 0; i < numText; i++){
        const element = document.createElement("p");
        element.style.fontSize = fontSize;
        element.style.margin = 1 / numText + "px";
        element.style.overflow = "hidden";
        element.style.alignItems = "center";
        element.style.position = "relative";
        element.setAttribute("id", "txt" + i);
        element.innerHTML = "txtxttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt";
        slidingText.appendChild(element);

        textArray[i] = new TextElement(Math.round(Math.random() * window.innerWidth), "txt" + i, i);
        randomNumbers[i] = Math.ceil( Math.random() * 100);
    }
};

async function animateText(){
    for (let i = 0; i < numText; i++){
        textArray[i].move()
    }
    await new Promise(r => setTimeout(r, intervalRate));
    animateText();
}

class TextElement {
    constructor(pos, element, index) {
        this.pos = pos;
        this.element = document.getElementById(element);
        this.index = index;
    }

    move(){
        
        this.pos++;
        this.element.style.left = this.pos + "px";

        if (this.pos >= window.innerWidth){
            this.reset();
            // randomNumbers[this.index] = 0;
        }
    }

    reset(){
        this.pos = window.innerWidth * -0.3;
        this.element.style.left = this.pos + "px";
    }
}

animateTitle();
createText();
animateText();

function resizeText(bool){
    fontSize = window.innerHeight / numText * 0.65 + "px";
    if (bool == 1){
        for (let i = 0; i < numText; i++){
            const element = document.getElementById("txt" + i);
            element.style.fontSize = fontSize;
        }
    }
    else{
        return;
    }
}

window.addEventListener('resize', resizeText(resizeBool), true);