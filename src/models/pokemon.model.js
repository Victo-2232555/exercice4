// À ajuster selon la structure
import db from '../config/db_pg.js';

const trouvePokemon = (id) => {
    return new Promise((resolve, reject) => {

        const requete = `SELECT * FROM pokemon WHERE id = $1`; // On prépare la requête SQL
        const params = [id]
        // Le paramètre sera ajouter à query si la requete est préparée avec where id = ?
        db.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        });
    });
};

const trouveTousLesPokemons = () => {
    return new Promise((resolve, reject) => {
        const requete = `SELECT * FROM pokemon`;
        db.query(requete, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat.rows);
        });
    });
}

const ajouterUnPokemon = (pokemon) => {
    return new Promise((resolve, reject) => {
        const requete = `INSERT INTO pokemon (nom, type_primaire, type_secondaire, pv, attaque, defense) values ( ?, ?, ?, ?, ?, ?)`;
        const params = [pokemon.nom, pokemon.type_primaire, pokemon.type_secondaire, pokemon.pv, pokemon.attaque, pokemon.defense];
        //souvient toi que les paramètres sont ajoutés à la requête si elle est préparée
        db.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat.rows);
        });
    });
}

const modifierUnPokemon = (id, pokemon) => {
    return new Promise((resolve, reject) => {
        const requete = `UPDATE pokemon SET nom = $1, type_primaire = $1, type_secondaire = $1, pv = $1, attaque = $1, defense = $1 WHERE id = $1`;
        const params = [pokemon.nom, pokemon.type_primaire, pokemon.type_secondaire, pokemon.pv, pokemon.attaque, pokemon.defense, id];
        db.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat.rows);
        });
    });
}

export default {
    trouvePokemon,
    trouveTousLesPokemons,
    ajouterUnPokemon,
    modifierUnPokemon

}