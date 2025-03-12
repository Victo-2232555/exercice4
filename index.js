import express from 'express';
import pokemonRoute from './src/routes/pokemon.route.js';
// Créer une application express
const app = express();

// Importer les middlewares
app.use(express.json());

//connexion à la bd n'est pas necessaire

app.use('/api/pokemons', pokemonRoute);

app.use('/api/pokemons/liste', pokemonRoute);

// Démarrer le serveur
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});