// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';

import { afficherUnPokemon } from '../controllers/pokemon.controller.js';
import { afficherTousLesPokemons } from '../controllers/pokemon.controller.js';
import { ajouterUnPokemon } from '../controllers/pokemon.controller.js';
import { modifierUnPokemon } from '../controllers/pokemon.controller.js';

// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();    

// Route pour afficher tous les pokemons
router.get('/liste', afficherTousLesPokemons);

// Route pour afficher un pokemon en fonction de son id
router.get('/:id', afficherUnPokemon);

// Route pour creer un pokemon
router.post('/', ajouterUnPokemon);

// Route pour modifier un pokemon
router.put('/:id', modifierUnPokemon);

// On exporte le router pour pouvoir l'utiliser dans index.js
export default router;
