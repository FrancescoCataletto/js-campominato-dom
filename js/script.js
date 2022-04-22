/*

**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

document.getElementById("start-btn").addEventListener("click", initFunction);
const container = document.getElementById("square-container");

// SELEZIONE DEL LIVELLO DALL'HTML
const options = document.getElementById("level");
const easy = options[0].value;
const medium = options[1].value;
const hard = options[2].value;

function initFunction(){
    // SCELTA DEL NUMERO IN BASE AL LIVELLO DEL GIOCO E PULIZIA DEL CONTAINER
    container.innerHTML = " ";
    const userLevel = numList();

    // CREA QUADRATINI IN BASE AL NUMERO CORRISPONDENTE AL LIVELLO SCELTO DLL'USER
    for(let i = 1; i <= userLevel; i++){
        const cell = squareGenerator(container);
        cell.innerHTML = `<span class="hidden">${i}</span>`;
        cell.addEventListener("click", function(){
            cell.classList.add("clicked", "white");
            cell.firstChild.classList.add("visible");
        })
    }
    
}

// ----------------

// FUNZIONE CHE CREA IL DIV DEI QUADRATI, GLI METTE LE CLASSI ADEGUATE AL LIVELLO E STAMPA TUTTO NEL CONTAINER DELL'HTML
function squareGenerator(target){
    const cell = document.createElement("div");
    if(options.value === hard){
        cell.classList.add("cell", "x7");
    }else if(options.value === medium){
        cell.classList.add("cell", "x9");
    }else if(options.value === easy){
        cell.classList.add("cell", "x10");
    }
    target.append(cell);
    console.log(cell);
    return cell;
}

// ----------------

// FUNZIONE PER ASSEGNARE UN NUMERO AD UN LIVELLO

function numList(){
    let num;
    if(options.value === hard){
        num = 49;
    }else if(options.value === medium){
        num = 81;
    }else if(options.value === easy){
        num = 100;
    }
    return num;
}