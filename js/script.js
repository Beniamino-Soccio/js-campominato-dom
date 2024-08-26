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
const createCell = content => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content);
    return cell;
}

//Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
//! prep
//recupero gli elementi del DOM che mi servono
const grid = document.getElementById('grid');
const button = document.getElementById('play');

const row = 10;
const col = 10;
const cells = row * col;

//! elaboration
//  al click del bottone ciclo per tante volte sono le celle desiderate
button.addEventListener("click", function(){
    
    for (let i = 1; i <= cells; i++){
        const cell = createCell(i);
        
        // event della cella
        cell.addEventListener("click", function(){
            console.log(i)
            cell.classList.add('clicked');
         })
        // "stampo"
        grid.appendChild(cell);

    }
 });

 


