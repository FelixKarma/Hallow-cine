const moins = document.getElementsByClassName ("moins");

const plus = document.getElementsByClassName("plus");

const nombre = document.getElementsByClassName("nombre");

function ajout(num){
    let nbr = parseInt(nombre[num-1].innerText);
    nombre[num-1].innerText = nbr +1 
};

function supp(num){
    if (nombre[num-1].innerText >0 ){
    let nbr = parseInt(nombre[num-1].innerText);
    nombre[num-1].innerText = nbr -1;
}
}
const produits = document.getElementsByClassName("btnAjoutPanier");

function ajoutPanier(num) {
    let nbr = parseInt(nombre[num-1].innerText);
    if (nbr != 0) {
        localStorage.setItem("produit"+(num),nbr);
    }
}