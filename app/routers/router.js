// On doit require de nouveau express dans le module
// En effet on est dans un nouveau module, donc on a pas accès à l'express require dans index.js
const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// Page principale
router.get("/", controller.homePage);

// Galerie
router.get("/gallery", controller.galleryPage);

// Page de confirmation de l'upload
router.get("/upload", controller.uploadPage);


module.exports = router;
