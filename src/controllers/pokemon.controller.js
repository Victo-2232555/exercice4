import pokemonModel from "../models/pokemon.model.js";

const afficherUnPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const resultat = await pokemonModel.trouvePokemon(id);

        if (!resultat) {
            return res.status(404).json({ erreur: `Pokemon introuvable avec l'id ${id}` });
        }

        res.status(200).json(resultat);
    } catch (erreur) {
        console.error(`Erreur SQL (${erreur.code}): ${erreur.message}`);
        res.status(500).json({ erreur: `Échec lors de la récupération du Pokémon avec l'id ${req.params.id}` });
    }
}

const afficherTousLesPokemons = async (req, res) => {
    try {
        const resultat = await pokemonModel.trouveTousLesPokemons();

        if (!resultat) {
            return res.status(404).json({ erreur: `Aucun Pokémon trouvé` });
        }

        res.status(200).json(resultat);
    } catch (erreur) {
        console.error(`Erreur SQL (${erreur.code}): ${erreur.message}`);
        res.status(500).json({ erreur: `Échec lors de la récupération des Pokémons` });
    }
}

const ajouterUnPokemon = async (req, res) => {
    try {
        const pokemon = req.body;
        const resultat = await pokemonModel.ajouterUnPokemon(pokemon);

        if (!resultat) {
            return res.status(404).json({ erreur: `Échec lors de l'ajout du Pokémon` });
        }

        res.status(201).json(resultat);
    } catch (erreur) {
        console.error(`Erreur SQL (${erreur.code}): ${erreur.message}`);
        res.status(500).json({ erreur: `Échec lors de l'ajout du Pokémon` });
    }
}

const modifierUnPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body;
        const resultat = await pokemonModel.modifierUnPokemon(id, pokemon);

        if (!resultat) {
            return res.status(404).json({ erreur: `Le pokemon id = ${id} n'existe pas dans la base de données` });
        }

        res.status(200).json({
            message: `Le Pokémon ${pokemon.nom} a été modifié avec succès`,
            pokemon: pokemon
        });
    } catch (erreur) {
        console.error(`Erreur SQL (${erreur.code}): ${erreur.message}`);
        res.status(500).json({ erreur: `Échec lors de la modification du Pokémon ${nom.pokemon}` });
    }
}

export {
    afficherUnPokemon,
    afficherTousLesPokemons,
    ajouterUnPokemon,
    modifierUnPokemon
}



