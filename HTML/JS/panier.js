const produits = document.getElementsByClassName("produit");
const quantites = document.getElementsByClassName("quantite");

let total = 0;
for(let i = 0; i < produits.length; i++){
    if (localStorage.getItem("produit"+(i+1)) != null) {
        produits[i].style.display = "block";
        quantites[i].innerText=localStorage.getItem("produit"+(i+1))
        switch (i+1) {
            case 1: total = total + 6780*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
            case 3: total = total +2739*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +5467*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +7654*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +450*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +878ç*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
            case 2: total = total +3922*localStorage.getItem("produit"+(i+1));
                break;
                
        
            default:
                break;
        }
    }
}