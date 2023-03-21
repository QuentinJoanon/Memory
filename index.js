const PORT = process.env.PORT || 5050;

// Import avec "require"
const express = require("express");
const app = express();
const router = require("./app/routers/router");
const { upload, uploadRoute } = require("./app/js/upload");

// Paramétrage d'ejs
app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// Gestion des routes grâce au router
app.use(router);

// Gestion de la méthode POST du formulaire
app.post("/upload", upload.array("photo"), uploadRoute);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
