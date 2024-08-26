console.log('JS OK');
/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1 fattoV
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Note:
- questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle 
*/

//function

const grid = document.getElementById('grid');
const button = document.getElementById('play');
const form = document.querySelector('form');
const levelSelect = document.getElementById('select-level');

// Funzione per creare una cella
const createCell = (cellNumber, level) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', level);
    cell.innerText = cellNumber;
    return cell; 
}

const startGame = event => {
    event.preventDefault();
    // Svuoto la griglia
    grid.innerHTML = '';
    // Cambio il testo del pulsante
    button.innerText = 'Ricomincia';
    // Prendo il valore dalla tendina
    const level = levelSelect.value;

    let rows;
    let cols;

    // Decido il numero di righe e colonne in base al livello selezionato
    switch (level){
        case 'hard':
            rows = 7;
            cols = 7;
            break;
        case 'normal':
            rows = 9;
            cols = 9;
            break;
        case 'easy':
            rows = 10;
            cols = 10;
            break;
    }

    const totalCells = rows * cols;

    // Setto la proprietà CSS per il numero di colonne
    const root = document.querySelector(':root');
    root.style.setProperty('--cols-per-row', cols);

    // Genero le celle della griglia
    for (let i = 1; i <= totalCells; i++){
        const cell = createCell(i, level);

        // Aggiungo un evento click a ogni cella
        cell.addEventListener('click', () => {
            console.log(cell.innerText);
            console.log(i);
            cell.classList.toggle('clicked');
        });

        // Inserisco la cella nella griglia
        grid.appendChild(cell);
    }
}

// Aggiungo l'evento submit al form per avviare il gioco
form.addEventListener('submit', startGame);

