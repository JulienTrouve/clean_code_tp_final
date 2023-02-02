// On récupère express
const express = require("express");

// On récupère routes
const router = require("./routes");

const app = express();

// On définit le port
const PORT = process.env.PORT || 4000;

// On lis le json 
app.use(express.json());

// On définit le endpoint
app.use("/myMath", router);

// On lance l'API sur le port
app.listen(PORT);

// On affiche le port dans les log
console.log(`Server is listening on PORT ${PORT}`);