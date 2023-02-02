module.exports = {
    async getRandomInt(req, res){
        try{
            //Récupération des variables min et max du body
            let min = parseInt(req.body.min);
            let max = parseInt(req.body.max);
            
            //on crée une variable random_number qui est un nombre aléatoire entre min et max
            random_number = Math.floor(Math.random() * (max - min) + min);

            //affichage de random_number
            res.status(200).send({random_number})

        }
        //Si les paramètres d'entré ne sont pas valide on affiche l'érreur suivant
        catch(error){
            res.status(400).send("Au moins un des paramètres d’entré n’est pas valide. Entier uniquement")
        }
        
    }
}