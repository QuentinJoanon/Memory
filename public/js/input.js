/* Dynamisation de l'input "upload" */

// Sélection de tous les éléments avec la classe "input-photo"
var inputs = document.querySelectorAll('.input-photo');

// Pour chaque élément sélectionné, exécuter la fonction suivante
Array.prototype.forEach.call(inputs, function(input) {

  // Récupération de l'élément "label" qui suit immédiatement l'élément "input"
  var label = input.nextElementSibling;

  // Stockage de la valeur initiale du contenu HTML de l'élément "label"
  var labelVal = label.innerHTML;

  // Ajout d'un événement d'écoute pour détecter les changements dans l'élément "input"
  input.addEventListener('change', function(element) {

    // Stockage du nom de fichier sélectionné par l'utilisateur
    var fileName = '';

    // Si l'utilisateur a sélectionné plusieurs fichiers, créer un texte indiquant le nombre de fichiers sélectionnés
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    }
    // Sinon, stocker simplement le nom du fichier unique sélectionné
    else {
      fileName = element.target.value.split('\\').pop();
    }
    // Si un nom de fichier a été détecté, mettre à jour le contenu de l'élément "label" pour afficher le nom du
    if( fileName ) {
      label.querySelector( 'span' ).innerHTML = fileName;
    }
    // Restaurer le contenu HTML initial de l'élément "label" si aucun fichier n'a été sélectionné
    else {
      label.innerHTML = labelVal;
    }
  });
});
