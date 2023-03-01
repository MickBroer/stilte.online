const audio = [];
const audioContext = new AudioContext();
const numAudiofiles = 13;

//load files
for (let i = 0; i <= numAudiofiles; i++){
    audio[i] = new Audio('assets/audio/' + i + '.wav');
}

function playAudio(){
    const randomFile = Math.floor(Math.random() * numAudiofiles);
    const content = audio[randomFile];
    content.playbackRate = Math.random() / 2.0 + 0.5;
    content.preservesPitch = false;
    console.log(content.playbackRate);
    if (audioContext === "suspended") {
        audioContext.resume();
        content.play();
    }

    content.play();
}

for (let i = 0; i <= numAudiofiles; i++){
    playAudio();
}