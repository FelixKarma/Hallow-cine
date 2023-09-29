class Film {
    constructor(titre, note, acteurp, rea, synopsis, image, ba, categorie, type, date) {
        this.titre = titre;
        this.note = note;
        this.acteurp = acteurp;
        this.rea = rea;
        this.synopsis = synopsis
        this.image = image;
        this.ba = ba;
        this.categorie = categorie;
        this.type = type;
        this.date = date;
    }
}

const films = [
    new Film("iZombie", 4, " Rose McIver, Malcolm Goodwin, Rahul Kholi, Robert Buckley, David Anders , Alyson Michalka", "Rob Thomas et Diane Ruggiero-Wrigh", "Olivia Moore, surnommée Liv, une étudiante transformée en zombie lors d'une soirée qui a très mal tourné, travaille en tant que médecin légiste afin de pouvoir profiter du festin que représentent pour elle les cervelles des défunts. A chaque bouchée, elle hérite des souvenirs de la personne. Cherchant désespérément un sens à sa vie, elle se rend compte qu'avec l'aide du détective Clive Babinaux, elle peut résoudre les affaires de meurtres et calmer ainsi les voix qui la tourmentent dans sa tête..", "Image/izombie.png", "https://www.youtube.com/watch?si=LlufEbVlPRhmjM2P&v=GEgKR6pvVlU&feature=youtu.be&ab_channel=WarnerTVFrance", "Thriller", "Série", 2015),

    new Film("Buffy contre les vampire", 4, "Sarah Michelle Gellar, Alyson Hannigan, Nicholas Brendon", "Joss Whedon", "Buffy Summers aspire à une vie simple et épanouie auprès de sa famille et de ses amis. Mais les démons qui rôdent à Sunnydale lui rappellent sans cesse qu'elle doit faire face à ses responsabilités de Tueuse.", "Image/buffy.jpg", "https://www.youtube.com/watch?v=4UjXrHF0q2M", "Fantastique", "Série", 1997),

    new Film("Supernatural", 4, "Jared Padalecki, Jensen Ackles, Misha Collins, Alexander Calvert", "Eric Kripke", "Deux frères, Sam et Dean Winchester sont chasseurs de créatures surnaturelles. Ils sillonnent les États-Unis à bord d'une Chevrolet Impala noire de 1967 pour enquêter sur des phénomènes paranormaux (souvent issus du folklore, des superstitions, mythes et légendes urbaines américaines, mais aussi des monstres surnaturels tels que les fantômes, loups-garous, démons, vampires…). Ils espèrent par la même occasion mettre la main sur le démon responsable de la mort de leur mère, 22 ans plus tôt, qu'ils appellent 'le démon aux yeux jaunes'", "Image/Affiche Supernatural.png", "https://youtu.be/NjkjXEzGatM?si=GZ5GHMlrEy1w6xgg", "Fantastique", "Série", 2005),

    new Film("Walking Dead", 5, "Andrew Lincoln, Sarah Wayne Callies, Jon Bernthal, Laurie Holden", "Scott M. Gimple", "Après avoir été blessé dans l’exercice de ses fonctions, le shérif Rick Grimes se réveille d’un coma de plusieurs semaines et découvre un monde post-apocalyptique où la quasi-totalité de la population américaine s’est transformée en zombies. Seul et déboussolé, Rick se rend à Atlanta pour rechercher sa femme Lori et son fils Carl. Sur son chemin, il fera la rencontre d’autres survivants avec lesquels il tentera de rester en vie dans ce monde métamorphosé, effrayant et périlleux.", "Image/walking dead.webp", "https://youtu.be/AbtiqJGhWyY?si=w3GS1jO72PCM8x9k", "Drame", "Série", 2010),

    new Film("THE HAUNTING OF HILL HOUSE", 4, "Michiel Huisman, Oliver Jackson-Cohen, Elizabeth Reaser, Carla Gugino", "Mike Flanagan", "Plusieurs frères et sœurs qui, enfants, ont grandi dans la demeure qui allait devenir la maison hantée la plus célèbre des États-Unis sont contraints de se retrouver pour faire face à cette tragédie ensemble. La famille doit enfin affronter les fantômes de son passé, dont certains sont encore bien présents dans leurs esprits alors que d’autres continuent de traquer Hill House.", "Image/HHH.png", "https://youtu.be/zr6pV2svobI?si=VluCatTZM6Lzkdyj", "Fantastique", "Série", 2018),

    new Film("Stranger Things", 4, "Winona Ryder, Gaten Matarazzo, David Harbour, Millie Bobby Brown, Finn Wolfhard", "Matt Duffer, Ross Duffer", "A Hawkins, en 1983 dans l'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d'amitié avec la demoiselle tatouée du chiffre '11' sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…", "Image/strangerthing.png", "https://youtu.be/l7nzodXfVsg?si=klJsWwsTWzlb4YrB", "Science Fiction", "Série", 2016),

    new Film("Scream Queens", 4, "Emma Roberts, Jamie Lee Curtis, John Stamos", "Ryan Murphy, Brad Falchuk, Ian Brennan", "Dirigée d’une main de fer par Chanel Oberlin, la maison Kappa Kappa Tau est la sororité la plus prisée de l’université de Wallace. Mais, alors que la doyenne Cathy Munsch, profondément anti-Kappa, déclare la guerre en ouvrant le recrutement à toutes les étudiantes, un tueur fou en costume de diable répand la terreur à travers le campus, décimant les membres de la sororité un par un…", "Image/screamqueen.png", "https://youtu.be/_Kk8lJ4kUZ0?si=2qYW31IPIYarI6VG", "Horreur", "Série", 2015),

    new Film("American Horror Story", 4, "Lily Rabe, Emma Roberts, Billie Lourd", "Brad Falchuk, Ryan Murphy", "A chaque saison, son histoire. American Horror Story nous embarque dans des récits à la fois poignants et cauchemardesques, mêlant la peur, le gore et le politiquement correct. De quoi vous confronter à vos plus grandes frayeurs !", "Image/AHS.png", "https://youtu.be/TTFkLL0Gh5A?si=pjQgLo3dYDZqMLjD", "Horreur", "Série", 2011),

    new Film("Ash vs Evil Dead", 4, "Bruce Campbell, Ray Santiago, Dana DeLorenzo", "Craig DiGregorio, Sam Raimi, Ivan Raimi", "Alors qu'il vit caché depuis 30 ans, Ash se voit contraint de reprendre du service et d'affronter ses démons. Au sens propre comme au figuré. Mais cette fois, il n'est plus seul pour combattre les forces du Mal.", "Image/ash.jpg", "https://youtu.be/H-udky-EMfQ?si=zO9Y8eFILqa-1TsH", "Thriller", "Série", 2015),

    new Film("Penny Dreadful", 4, "Eva Green, Josh Hartnett, Timothy Dalton", "John Logan", "Dans le Londres de l'époque Victorienne, Vanessa Ives, une jeune femme puissante aux pouvoirs hypnotiques, allie ses forces à celles d'Ethan, un garçon rebelle et violent aux allures de cowboy, et de Sir Malcolm, un vieil homme riche aux ressources inépuisables. Ensemble, ils combattent un ennemi inconnu, presque invisible, qui ne semble pas humain et qui massacre la population...", "Image/penny.png", "https://www.youtube.com/watch?v=Op4CStBDCSM", "Thriller", "Série", 2014),

    new Film("Scream", 4, "Neve Campbell, Courteney Cox, David Arquette", "Kevin Williamson, Wes Craven", "Casey Becker, une belle adolescente, est seule dans la maison familiale. Elle s'apprête à regarder un film d'horreur, mais le téléphone sonne. Au bout du fil, un serial killer la malmène, et la force à jouer à un jeu terrible : si elle répond mal à ses questions portant sur les films d'horreur, celui-ci tuera son copain...", "Image/Scream.png", "https://youtu.be/3VhZvuMlIF8?si=bDI7DqrL4J1JacFY", "Horreur", "Film", 1997),

    new Film("REC", 4, "Manuela Velasco, Ferran Terraza, Jorge Yamam", "Paco Plaza, Jaume Balagueró, Jaume Balagueró, Paco Plaza", "Angéla est journaliste pour une télévision locale. Accompagnée de son caméraman, elle relate le quotidien de ceux qui travaillent la nuit. Ce soir, elle est dans une caserne de pompiers. La nuit est calme, aucune urgence. Jusqu'au coup de fil d'une vieille dame qui réclame du secours. Le tandem suit les pompiers et découvre en arrivant sur place des voisins très inquiets. D'horribles cris ont été entendus dans l'appartement de la vieille dame. Angéla perçoit la tension des habitants, son reportage devrait enfin sortir de la routine... Elle n'imagine pas à quel point !", "Image/rec.jpg", "https://youtu.be/S79ZZtCGNFE?si=DRz6ZeyRukNotJrJ", "Horreur", "Film", 2008),

    new Film("Massacre à la tronçonneuse", 3, "Jessica Biel, Jonathan Tucker, Erica Leerhsen", "Marcus Nispel, Scott Kosar, Tobe Hooper", "En 1973, lors d'une perquisition à la ferme de Thomas Hewitt, ancien employé de l'abattoir de Travis County, au Texas, la police découvrait les restes de 33 êtres humains. Cette effroyable trouvaille mit en émoi la population locale. Arborant les grotesques masques de chair de ses victimes et brandissant une tronçonneuse, le tueur fut macabrement surnommé Leatherface. Les autorités locales abattirent un homme portant un masque de cuir, mettant ainsi fin à l'affaire, mais au cours des années suivantes, plusieurs personnes accusèrent la police d'avoir bâclé l'enquête et d'avoir tué un innocent en toute connaissance de cause. Pour la première fois, la seule victime ayant survécu au massacre brise le silence et raconte ce qui est vraiment arrivé cette nuit-là, sur une route déserte du Texas, à cinq personnes qui sans le savoir, roulaient vers leur pire cauchemar...", "Image/massacre.jpg", "https://youtu.be/AmEpPJ1MKP8?si=Lg38mtmcHqsB3Qh3", "Horreur", "Film", 2004),

    new Film("Saw", 4, "Leigh Whannell, Cary Elwes, Danny Glover", "James Wan, James Wan, Leigh Whannell", "Deux hommes se réveillent enchaînés au mur d'une salle de bains. Ils ignorent où ils sont et ne se connaissent pas. Ils savent juste que l'un doit absolument tuer l'autre, sinon dans moins de huit heures, ils seront exécutés tous les deux... Voici l'une des situations imaginées par un machiavélique maître criminel qui impose à ses victimes des choix auxquels personne ne souhaite jamais être confronté un jour. Un détective est chargé de l'enquête...", "Image/SAW.png", "https://youtu.be/8Swsh-up3iM?si=wekVYbmzF_qIvYI1", "Thriller", "Film", 2005),

    new Film("Les oiseaux", 4, "Tippi Hedren, Rod Taylor, Suzanne Pleshette", "Alfred Hitchcock", "San Francisco, 1962. Une jeune femme et un avocat entament un jeu de séduction chez un oiseleur. Afin de le revoir, elle use d’un stratagème et décide de lui livrer elle-même un couple d’oiseaux, 'les inséparables'. Sur la route, elle est attaquée par une mouette. Bientôt d’étranges phénomènes liés au comportement des oiseaux annoncent un drame imminent…", "Image/birds.jpg", "https://youtu.be/0fJh2gIBOto?si=ZJL6ZXUDrJ9ODNUK", "Thriller", "Film", 1963),

    new Film("Ca: chapitre 2", 4, "Bill Skarsgård, Jaeden Martell, Finn Wolfhard", "Cary Joji Fukunaga, Chase Palmer", "À Derry, dans le Maine, sept gamins ayant du mal à s'intégrer se sont regroupés au sein du 'Club des Ratés'. Rejetés par leurs camarades, ils sont les cibles favorites des gros durs de l'école. Ils ont aussi en commun d'avoir éprouvé leur plus grande terreur face à un terrible prédateur métamorphe qu'ils appellent 'Ça'. Car depuis toujours, Derry est en proie à une créature qui émerge des égouts tous les 27 ans pour se nourrir des terreurs de ses victimes de choix : les enfants. Bien décidés à rester soudés, les Ratés tentent de surmonter leurs peurs pour enrayer un nouveau cycle meurtrier. Un cycle qui a commencé un jour de pluie lorsqu'un petit garçon poursuivant son bateau en papier s'est retrouvé face-à-face avec le Clown Grippe-Sou …", "Image/ca.png", "https://youtu.be/Tw3yT-qAbvc?si=FbsXVp5WjaQbsp97", "Horreur", "Film", 2019),

    new Film("The Witch", 3, "Anya Taylor-Joy, Ralph Ineson, Kate Dickie", "Robert Eggers", "1630, en Nouvelle-Angleterre. William et Katherine, un couple dévot, s’établit à la limite de la civilisation, menant une vie pieuse avec leurs cinq enfants et cultivant leur lopin de terre au milieu d’une étendue encore sauvage. La mystérieuse disparition de leur nouveau-né et la perte soudaine de leurs récoltes vont rapidement les amener à se dresser les uns contre les autres…", "Image/witch.jpg", "https://youtu.be/MXLPTcCNwWY?si=pBi6mrGuudtl_lSy", "Horreur", "Film", 2016),

    new Film("The Shining", 4, "Jack Nicholson, Jean-Louis Trintignant, Shelley Duvall", "Stanley Kubrick, Diane Johnson", "Écrivain, Jack Torrance est engagé comme gardien, pendant tout l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il espère surmonter enfin sa panne d’inspiration. Il s’y installe avec sa femme Wendy et son fils Danny, doté d’un don de médium. Tandis que Jack n’avance pas dans son livre et que son fils est de plus en plus hanté par des visions terrifiantes, il découvre les terribles secrets de l’hôtel et bascule peu à peu dans une forme de folie meurtrière où il s’en prend à sa propre famille", "Image/shining.jpg", "https://youtu.be/7gQNjXJPlzc?si=vpateyM9ynFUABgV", "Thriller", "Film", 1980),
    
    new Film("Hérédité", 3, "Toni Collette, Gabriel Byrne, Alex Wolff", "Ari Aster", "Lorsque Ellen, matriarche de la famille Graham, décède, sa famille découvre des secrets de plus en plus terrifiants sur sa lignée. Une hérédité sinistre à laquelle il semble impossible d’échapper.", "Image/heredite.png", "https://youtu.be/vntI9lAQyyw?si=jVzSpBP7IJdtCYZa", "Drame", "Film", 2018),
    
    new Film("L'Exorciste", 4, "Linda Blair, Ellen Burstyn, Max von Sydow", "William Peter Blatty", "L'actrice Chris McNeil est inquiète au sujet de sa fillette Regan : après que l'on ait entendu des bruits curieux venant de sa chambre, la petite a changé, proférant de constantes insanités. Une force para-normale l'habite, qui coûte la vie au metteur en scène de Chris. Désespérée, cette dernière fait appel à deux exorcistes...", "Image/exorcist.jpg", "https://youtu.be/kuowPVqvnRk?si=BZCmDuwQ-gAv4lQ4", "Horreur", "Film", 1974)
    
]
let affiche = document.getElementsByClassName("affiche");
let categ;
let typeg;


if (document.location.href.includes("catalogue")) {
    
    let images = "";

    for (const film of films) {
        images += `<a href="FilmDark.html#${film.titre}"><img src="${film.image}" alt="${film.titre}" /></a>`;
    }
    affiche[0].innerHTML = images;
}

function triage(tri) {
    switch (tri) {
        case 1:
            films.sort((a, b) => (a.date < b.date ? 1 : -1));
            break;
        case 2:
            films.sort((a, b) => (a.date > b.date ? 1 : -1));
            break;
        case 3:
            films.sort((a, b) => (a.note > b.note ? 1 : -1));
            break;

        default:
            break;
    }
    let images = "";

    for (const film of films) {
        images += `<a href="FilmDark.html#${film.titre}"><img src="${film.image}" alt="${film.titre}" /></a>`;
    }
    affiche[0].innerHTML = images;
}

function cate(tri) {
    switch (tri) {
        case 1:
            categ = "Fantastique";

            break;
        case 2:
            categ = "Horreur";
            break;
        case 3:
            categ = "Science Fiction";
            break;
        case 4:
            categ = "Thriller";
            break;
        case 5:
            categ = "Drame";
            break;

        default:
            break;
    }

    let images = "";

    for (const film of films) {
        if (categ == film.categorie) {
            images += `<a href="FilmDark.html#${film.titre}"><img src="${film.image}" alt="${film.titre}" /></a>`;
        }
    }
    affiche[0].innerHTML = images;
}

function type(tri) {
    
    switch (tri) {
        case 1:
            typeg = "Film";

            break;
        case 2:
            typeg = "Série";
            break;
        default:
            break;
    }
    let images = "";

    for (const film of films) {
        if (typeg == film.type) {
            images += `<a href="FilmDark.html#${film.titre}"><img src="${film.image}" alt="${film.titre}" /></a>`;
        }
    }
    affiche[0].innerHTML = images;
}