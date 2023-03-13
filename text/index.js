/*
                stilte.online

    text based online installation by Mick Broer

                text iframe
*/

//initialize variables
const audio = [];
const audioContext = new AudioContext();
const numAudiofiles = 21;
const rate = 10000 / screen.width;
const source = document.getElementById('wrapper');
const real = new Float32Array(1024);
const imag = new Float32Array(1024);
let increment = window.getComputedStyle(source).getPropertyValue('font-size');
let index = increment;
let text = 'Iemand zei ook tegen mij: nu heb je allemaal ziektes. Slaaplekker in t logeer bed stomme huisgenoot. Ik heb echt mezelf gecockblocked godver. Hate when that happens. Had gewoon knuffels en seks kunnen hebben. Ik wilde wel opzich maar ik wilde dan ook echt alleen voor hem gaan. Dus domme reden om met anxiety te bestaan. En z’n huisgenoot was ook van samen uit samen thuis dus die was ook een cockblocker. Helemaal omdat die uiteindelijk hem heeft geditched voor een meisje om 7 uur vanmorgen. Hypocriet! Zo blij dat ik niet tot 7 uur ‘s ochtends ergens heb bestaan bah bah bah. Ik vond hem grappig en leuk. Letterlijk alles wat we tegen elkaar zeiden was ik van: yo leuk dit voelt for some reason vertrouwd en funny.';

increment = parseFloat(increment); 
text = text.split();

//load files
for (let i = 0; i <= numAudiofiles; i++){
    audio[i] = new Audio('assets/audio/' + i + '.mp3');
}

//add markov chain function, to generate new text out of source text
function markov(array){
    const markovChain = {};

    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (!markovChain[word]) {
        markovChain[word] = []
        }
        if (array[i + 1]) {
        markovChain[word].push(array[i + 1]);
        }
    }
    const words = Object.keys(markovChain);
    let word = words[Math.floor(Math.random() * words.length)];
    let result = '';
    for (let i = 0; i < words.length; i++ ) {
        result += word + ' ';
        newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
        word = newWord;
        if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
    }
    return result;
}

//play random stolen audio
function playAudio(){
    const randomFile = Math.floor(Math.random() * numAudiofiles);
    const audioContent = audio[randomFile];
    audioContent.playbackRate = Math.random() / 2.0 + 0.75;
    audioContent.preservesPitch = false;
    if (audioContext === "suspended") {
        audioContext.resume();
        audioContent.play();
    }
    audioContent.play();
}

//synthesize fft and play it
function playfft(){
    for (let i = 0; i <= 1024; i++) {
        imag[i] = Math.random() - 1 * 2 * Math.random();
        real[i] = Math.random() - 1 * 2 * Math.random();
      };
    wave = new PeriodicWave(audioContext, { real, imag, disableNormalization: true });
    osc = new OscillatorNode(audioContext, { periodicWave: wave, frequency: Math.random() * 500});
    let gain = audioContext.createGain();
    gain.gain.value =  0.001;
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop((audioContext.currentTime + (rate - 1)));
}

//add text or link
async function addContent(sentence, linkBool, url){
    for (let i = 0; i < sentence.length; i++){

        let content;

        if (linkBool < 80){
            content = document.createTextNode(
                sentence[i]
            );
            await new Promise(r => setTimeout(r, rate));
            source.appendChild(content);
        }

        else {
            content = document.createElement('a');
            content.title = 'ha';
            content.href = "index.html";
            content.style.color = 'black';
            content.setAttribute('id', 'link');
            content.innerHTML = sentence[i]; 
            await new Promise(r => setTimeout(r, rate));
            source.appendChild(content);
        }
        
        window.scrollTo(0, index);

        index = index + increment;
    }
    sequence();
}

//pick random markov generated sentence
function chooseSentence(array){
    let sentence = array[
        Math.floor(Math.random() * array.length)
    ];
    return sentence;
}

//sequence different functions
function sequence(){
    let arr = markov(text);
    arr = arr.split();
    addContent(
        chooseSentence(arr),
        Math.floor(
            Math.random() * 100
        ),
        '/liefdesgezang');   
    playAudio();
    playfft();
    playfft();
}

sequence();