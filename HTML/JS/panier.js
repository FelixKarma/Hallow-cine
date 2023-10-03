const produits = document.getElementsByClassName("produit");
const quantites = document.getElementsByClassName("quantite");
const totalpanier = document.getElementById("totalpanier");

affichagepanier();
function affichagepanier() {
    let total = 0;
    for (let i = 0; i < produits.length; i++) {
        if (localStorage.getItem("produit" + (i + 1)) != null) {
            produits[i].style.display = "block";
            quantites[i].innerText = localStorage.getItem("produit" + (i + 1))
            switch (i + 1) {
                case 1: total = total + 6780 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 2: total = total + 3922 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 3: total = total + 2739 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 4: total = total + 5467 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 5: total = total + 7654 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 6: total = total + 450 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 7: total = total + 8789 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 8: total = total + 743 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 9: total = total + 2876 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 10: total = total + 2154 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 11: total = total + 4565 * localStorage.getItem("produit" + (i + 1));
                    break;
                case 12: total = total + 165 * localStorage.getItem("produit" + (i + 1));
                    break;
                default:
                    total=0;
                    break;
            }
            
        }
    }
    console.log(total);
    totalpanier.innerText = total + "€";
}


function suppproduit(num) {
    localStorage.removeItem("produit" + num);
    produits[num-1].style.display = "none";
    affichagepanier();

}