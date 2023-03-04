///HOME

const textArray = 
    [
        "Racistische passages verwijderd uit James Bond-boeken. ",
        
        "Passages die volgens de uitgever racistisch zijn in de Engelstalige boeken van schrijver Ian Fleming over James Bond worden volgens de krant The Telegraph in een nieuwe uitgave verwijderd of aangepast. ",
        
        "Uitgever Ian Fleming Books liet een groep sensitivity readers zich over de klassiekers buigen, zoals dat recent ook is gebeurd bij de boeken van Roald Dahl. ", "Deze proeflezers controleren teksten op content en woordkeuze die gevoelig kunnen liggen. ",
        
        "Het is dit jaar zeventig jaar geleden dat het eerste verhaal over James Bond verscheen, Casino Royale, daarom worden nieuwe edities van alle Bond-titels uitgegeven. ",
        
        "In de nieuwe versie zal het n-woord volgens de Britse krant niet meer worden gebruikt. ", "Dat wordt vervangen door omschrijvingen als 'zwarte persoon'. ", "Ook is in sommige passages de etniciteit van personages weggelaten. ",
        
        "The Telegraph geeft enkele voorbeelden van andere aangepaste passages, hoewel de uitgever hier nog niet op heeft gereageerd. ", "Zo stond in de oorspronkelijke tekst van Live and Let Die (1954) in een beschrijving van een groep Afrikaanse mannen die in de goud- en diamantenindustrie werken dat zij 'behoorlijk gezagsgetrouwe kerels zijn, naar mijn mening, tenzij zij te veel hadden gedronken (pretty law-abiding chaps, I should have thought, unless they've drunk too much).' ", "In de nieuwe versie zou volgens The Telegraph tenzij zij te veel hadden gedronken zijn weggelaten. ",
        
        "Toen auteur Fleming (1908-1964) nog leefde, gaf hij toestemming om sommige erotisch getinte passages uit zijn boeken te verwijderen of te censureren voor de Amerikaanse uitgaves. ",
        
        "Ook stemde hij ermee in om enkele racistische passages in Live and Let Die aan te passen. ", "In navolging van Ians aanpak, hebben wij gekeken naar voorbeelden van racistische termen in de boeken, laat de uitgever weten aan The Telegraph. ",
        
        "Wij hebben een aantal woorden verwijderd of ze veranderd in woorden die tegenwoordig meer geaccepteerd worden, maar in lijn met de periode waarin de boeken geschreven werden. ",
        
        "Sommige teksten die de tand des tijds slecht hebben doorstaan zijn wel gebleven. ", "Zo spreekt Bond ergens over deze praatzieke vrouwen die denken het werk van een man te kunnen doen. ", "Ook een passage waarin wratten, alcoholisme en homoseksuele neigingen worden beschreven als hardnekkige beperkingen blijft staan. ",
        
        "In de nieuwe editie van de boeken wordt volgens de krant in een uitleg geschreven dat de boeken geschreven zijn in een tijd waarin termen die nu als beledigend gezien worden gemeengoed waren en dat sommige passages zijn aangepast. ",
        
        "Vorige week ontstond ophef nadat de Engelse uitgeverij Puffin bekendmaakte delen van de kinderboeken van Roald Dahl te hebben laten aanpassen. ", "Onder meer de woorden dik en lelijk werden weggelaten bij de beschrijving van een personage. ",
        
        "Na de ophef die hierover ontstond volgde besloot de uitgever dat naast de originele edities naast de nieuwe teksten beschikbaar blijven. ", "De Nederlandse uitgever van Dahls boeken verandert vooralsnog niets aan de vertaalde teksten. "
    ];


const rate = 10000 / screen.width;
const source = document.getElementById('wrapper');
let increment = window.getComputedStyle(source).getPropertyValue('font-size');
increment = parseFloat(increment); 
let index = increment;

async function addContent(sentence, linkBool, url){
    for (let i = 0; i < sentence.length; i++){

        let content;

        if (linkBool == 0){
            content = document.createTextNode(
                sentence[i]
            );
            await new Promise(r => setTimeout(r, rate));
            source.appendChild(content);
            }

        else {
            content = document.createElement('a');
            content.title = "ha";
            content.href = url;
            content.innerHTML = sentence[i]; 
            await new Promise(r => setTimeout(r, rate));
            source.appendChild(content);
        }
        
        window.scrollTo(0, index);

        index = index + increment;
    }
    main();
}

function chooseSentence(array){
    let sentence = array[
        Math.floor(Math.random() * array.length)
    ];
    return sentence;
}

function main(){
    addContent(
        chooseSentence(textArray),
        Math.round(
            Math.random()
        ),
        '/liefdesgezang');    
}

main();