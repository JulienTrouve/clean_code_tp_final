// On récupère express
const express = require("express");
const app = express();

// On récupère routes
const router = require("./routes");

// On définit le port
const PORT = process.env.PORT || 4000;

// On permet à l'API d'utiliser un json en body
app.use(express.json());

// On définit le endpoint
app.use("/myMath", router);

// On lance l'API sur le port
app.listen(PORT);

// On affiche le port dans les log
console.log(`Server is listening on PORT ${PORT}`);