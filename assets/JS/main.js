// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const chevUp = document.querySelector(".fa-chevron-up");
const chevDown = document.querySelector(".fa-chevron-down");
const figureHtml = document.querySelector("figure")

const imageHtml = [
{ 
    image: "./assets/img/image-1.jpg",
    title: "Spiderman",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis expedita saepe voluptatem aut maxime animi alias optio accusamus mollitia, voluptatibus et voluptas velit amet soluta nostrum dolor? Nulla, harum."  
}, 
{ 
    image: "./assets/img/image-2.jpg",
    title: "Monte Rosa",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis expedita saepe voluptatem aut maxime animi alias optio accusamus mollitia, voluptatibus et voluptas velit amet soluta nostrum dolor? Nulla, harum."  
},
{ 
    image: "./assets/img/image-4.jpg",
    title: "Monte Cervino",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis expedita saepe voluptatem aut maxime animi alias optio accusamus mollitia, voluptatibus et voluptas velit amet soluta nostrum dolor? Nulla, harum."  
},
{ 
    image: "./assets/img/image-5.jpg",
    title: "Batman",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis expedita saepe voluptatem aut maxime animi alias optio accusamus mollitia, voluptatibus et voluptas velit amet soluta nostrum dolor? Nulla, harum."  
},
{ 
    image: "./assets/img/image-6.jpg",
    title: "Monte Bianco",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis expedita saepe voluptatem aut maxime animi alias optio accusamus mollitia, voluptatibus et voluptas velit amet soluta nostrum dolor? Nulla, harum."  
}];
