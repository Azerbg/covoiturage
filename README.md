# Réservation&Trajet

## Architecture de projet

 GraphQL | REST |
| ------- | ---- |
|         |      |

## Les composants de projet :

### NodeAPI

NodeAPI contient les schémas de trajet et de réservation. Le fichier `server.js` contient les routes des trajets:

- `GET /trajets`
- `POST /trajets`
- `GET /trajets/:id`
- `PUT /trajets/:id`

### ServiceTrajet

ServiceTrajet est un microservice qui contient les schémas de trajet dans le fichier `trajetSchema.js` dans les dossiers models.

Le schéma de trajet contient les champs suivants:

- `HeureDepart: String`
- `LieuDepart: String`
- `Destination: String`
- `PlacesDisponibles: Number`

### Graphql-query.js

`graphql-query.js` contient la requête GraphQL. La première fonction `sendGraphQLQuery` envoie une requête GraphQL à l'URL spécifiée, attend la réponse et renvoie les données de la réponse. Si une erreur se produit, elle est gérée et relancée pour une gestion ultérieure. La deuxième fonction `fetchtrajet` appelle `sendGraphQLQuery` pour récupérer les informations spécifiques d'un trajet à partir d'une requête GraphQL, puis affiche ces informations dans la console. Elle gère également les erreurs potentielles et les affiche dans la console en cas d'échec de la requête ou de récupération des données du trajet.

### Index.js

`index.js` permet de configurer un serveur Apollo GraphQL avec Express, définit un schéma GraphQL avec des types et des résolveurs, se connecte à une base de données Mongo DB et démarre le serveur pour écouter les requêtes GraphQL entrantes.

### ServiceUsers

ServiceUsers est un microservice qui crée un serveur Apollo GraphQL qui expose une requête `users` pour récupérer des utilisateurs à partir d'une liste pré-définie, en prenant en compte des filtres optionnels pour le nom et le prénom (avec une base de données statique).

Le schéma contient les champs suivants:

- `id: ID`
- `nom: String`
- `prenom: String`
- `occupation: String`
