/*
                stilte.online

    text based online installation by Mick Broer

                 HOME-PAGE
*/

//initialize variables

const welcome = document.getElementById("welcome");
const wrapper = document.getElementById("wrapper");
const numText = 40;
const slidingText = document.getElementById("slidingText");
const textArray = [];
const randomNumbers = [];
const intervalRate = 30;
let i = 1;
let resizeBool = 1;
let fontSize = window.innerHeight / numText * 0.65 + "px";
const title = ["s tilte.online",
    "sti lte.online",
    "stil te.online",
    "stilt e.online",
    "stilte .online",
    "stilte. online",
    "stilte.o nline",
    "stilte.on line",
    "stilte.onl ine",
    "stilte.onli ne",
    "stilte.onlin e",
    "stilte.online",
    "stilte.onlin e",
    "stilte.onli ne",
    "stilte.onl ine",
    "stilte.on line",
    "stilte.o nline",
    "stilte. online",
    "stilte .online",
    "stilt e.online",
    "stil te.online",
    "sti lte.online",
    "s tilte.online",
    " stilte.online"
]

//set up Text element class, to add movement to text
class TextElement {
    constructor(pos, element){
        this.pos = pos;
        this.element = document.getElementById(element);
    }

    move(){
        
        this.pos++;
        this.element.style.left = this.pos + "px";

        if (this.pos >= window.innerWidth){
            this.reset();
        }
    }

    reset(){
        this.pos = window.innerWidth * -1;
        this.element.style.left = this.pos + "px";
    }
}

//change background color of welcome button
function changeColor(bool){
    if (bool == 1){
        welcome.style.backgroundColor = "#D7D5EA";
        welcome.style.cursor = "pointer";
    }
    else{
        welcome.style.backgroundColor = "#FFFFFF";
    }
}

//initialize site
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

//move through title array, to animate the website title
function animateTitle() {
    i >= title.length - 1 ? (i = 0) : i++,
    (document.title = title[i]),
    setTimeout("animateTitle()", 200);
    
}

//add text in background
//TO-DO: change text in innerHTML
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

//add movement to text made in previous function
async function animateText(){
    for (let i = 0; i < numText; i++){
        textArray[i].move()
    }
    await new Promise(r => setTimeout(r, intervalRate));
    animateText();
}

//scale text when windowsize is changed
function resizeText(){
    fontSize = window.innerHeight / numText * 0.65 + "px";
    if (resizeBool == 1){
        for (let i = 0; i < numText; i++){
            const element = document.getElementById("txt" + i);
            element.style.fontSize = fontSize;
        }
    }
    else{
        return;
    }
}

//add interaction to welcome button
welcome.setAttribute("onmouseenter", "changeColor(1)");
welcome.setAttribute("onmouseout", "changeColor(0)");
welcome.setAttribute("onclick", "siteEnter()");

//call resizeText function
window.addEventListener("resize", resizeText, true);

//run animation functions
animateTitle();
createText();
animateText();