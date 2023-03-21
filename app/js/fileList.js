/* Script pour récupérer la liste des fichiers du dossier uploads dans un tableau */

// Import des modules requis
const fs = require("fs");
const path = require("path");

// Création d'une expression régulière pour filtrer les fichiers par extension
const regex = new RegExp(/(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);

// Création d'une fonction qui va renvoyer une promesse pour récupérer tous les fichiers d'images
function getAllImages() {
  return new Promise((resolve, reject) => {

    // On utilise la méthode "readdir" du module "fs" pour récupérer la liste des fichiers du dossier uploads
    fs.readdir(path.join(__dirname, "../../public/uploads"), (err, files) => {
      if (err) {
        // En cas d'erreur, on rejette la promesse avec l'erreur associée
        reject(err);
      } else {
        // Sinon, on boucle sur la liste des fichiers retournée par la méthode "readdir"
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!regex.test(path.extname(file))) {
            files.splice(i, 1);
            i--; // On décrémente le compteur pour ne pas sauter d'élément lors de la suppression
          }
        }
        // On résout la promesse en renvoyant la liste des fichiers d'images filtrée
        resolve(files);
      }
    });
  });
}

module.exports = getAllImages;
