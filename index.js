const welcome = document.getElementById("welcome");
const wrapper = document.getElementById("wrapper");
welcome.setAttribute("onmouseenter", "changeColor(1)");
welcome.setAttribute("onmouseout", "changeColor(0)");
welcome.setAttribute("onclick", "siteEnter()");

let i = 1;
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

    text.style.height = screen.height * 0.5 + "px";

}

function animateTitle() {
    i >= title.length - 1 ? (i = 0) : i++,
    (document.title = title[i]),
    setTimeout('animateTitle()', 200);
    
}

animateTitle();