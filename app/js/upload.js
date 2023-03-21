/* Script pour la gestion de l'upload des fichiers vers le dossier "uploads" */

// Import des modules requis
const multer = require('multer');
const path = require('path');

// Configuration du stockage des fichiers uploadés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Définit le dossier où stocker les fichiers
  },
  filename: function (req, file, cb) {
    // Définit le nom du fichier uploadé pour éviter les doublons
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialisation du middleware avec son parametre de stockage
const upload = multer({ storage: storage });

module.exports = {
  upload: upload, // Exportation du middleware de gestion des uploads
  uploadRoute: (req, res, next) => {
    // On vérifie qu'il y a bien une photo séléctionnée
    if (!req.file) {
      // Si aucun fichier n'a été sélectionné,on renvoie l'utilisateur à la page "missing_file.ejs"
      return res.render("missing_file");
    }
    // Sinon on l'envoie sur la page de confirmation
    res.render("upload");
  }
};
