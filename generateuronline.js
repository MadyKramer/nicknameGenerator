const noms = [
    "Lune",
    "Chaise",
    "Chouette",
    "Carapace",
    "Chaussure",
    "Crotte",
    "Fourchette",
    "Jupe",
    "Narine",
    "Hirondelle",
    "Jument",
    "Graîne",
    "Vache",
    "Cuvette",
    "Litière",
    "Bouteille",
    "Guêpe",
    "Branche",
    "Serviette",
    "Banane",
    "Algue",
    "Ecrevisse",
    "Etoile",
    "Galaxie",
    "Rivière",
    "Mangue",
    "Pie",
    "Cigarette",
    "Chevelure",
    "Plaie",
    "Bassine",
    "Lumière",
    "Coquille",
    "Pustule",
    "Fleur",
    "Souris",
    "Gerbille",
    "Télévision",
    "Assiette",
    "Pomme",
    "Patate"
  ];
  const adjectif = [
    "folle",
    "légendaire",
    "rose",
    "dorée",
    "moisie",
    "entretenue",
    "chaude",
    "froide",
    "allumée",
    "sale",
    "volumineuse",
    "assoiffée",
    "méchante",
    "cool",
    "verte",
    "baraquée",
    "maline",
    "saoule",
    "nauséeuse",
    "odorante",
    "brûlée",
    "tendue",
    "consternée",
    "vulnérable",
    "idiote",
    "stupide",
    "vantarde",
    "sympa",
    "fragile",
    "sanglante",
    "dépressive",
    "verdâtre",
    "amère",
    "anxieuse",
    "généreuse",
    "rouge",
    "enflamée",
    "âgée",
    "débile",
    "raide",
    "molle",
    "drôle",
    "cassée",
    "agressive",
    "gentille",
    "heureuse",
    "attachante",
    "brillante",
    "propre",
    "serviable"
  ];
  
  const randomPseudo = () => {
    const generator = document.getElementById('generator');
    generator.innerHTML = '';

    const randomNom = () => {
      let random = Math.floor(Math.random() * noms.length);
      if (noms.length > 0) {
        return noms[random];
      }

    };

    const randomAdj = () => {
      let random = Math.floor(Math.random() * adjectif.length);
      if (adjectif.length > 0) {
        return adjectif[random];
      }
    };

    const name = randomNom();
    const adj = randomAdj();

    generator.innerHTML = name + ' ' + adj;
    
  };

  const btn = document.getElementById('btn');
  btn.addEventListener('click', randomPseudo); 

  
 
 
