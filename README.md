# Mon Vieux Grimoire - Projet OpenClassrooms

Bienvenue dans le projet **Mon Vieux Grimoire**, développé dans le cadre de ma formation OpenClassrooms. Ce projet consiste à créer une plateforme de gestion de livres où les utilisateurs peuvent enregistrer, consulter et modifier des informations sur leurs livres préférés.

## Table des matières

- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement du projet](#lancement-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Auteurs](#auteurs)
- [Contributions](#contributions)
- [Licence](#licence)

## Aperçu

**Mon Vieux Grimoire** est une application web composée d'un backend et d'un frontend. Le backend gère l'API et les interactions avec la base de données, tandis que le frontend offre une interface utilisateur intuitive pour gérer les livres.

## Technologies utilisées

### Backend
- **Node.js** : Serveur côté backend.
- **Express** : Framework pour construire l'API REST.
- **MongoDB** : Base de données NoSQL pour stocker les informations des livres.
- **dotenv** : Gestion des variables d'environnement.

### Frontend
- **React** : Framework JavaScript pour le développement de l'interface utilisateur.
- **CSS** : Stylisation de l'application.

## Installation

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (installé avec Node.js)
- Une base de données MongoDB fonctionnelle (locale ou hébergée).

### Étapes d'installation

1. **Cloner le dépôt GitHub** :
   ```bash
   git clone https://github.com/Yassoea/mon-vieux-grimoire.git
   cd mon-vieux-grimoire
2. **Installer les dépendances du backend :**
   ```bash
      cd backend
      npm install

3. **Installer les dépendances du frontend :**
    ```bash
        cd ../frontend
        npm install
### Configuration
**Configurer les variables d'environnement :**

Dans le répertoire backend, vous trouverez un fichier nommé .env.example.
Renommez ce fichier en '.env' :

       ' mv .env.example .env'

Ouvrez le fichier .env et remplacez les informations par celles correspondant à votre base de données MongoDB

## Lancement du projet

1. **Lancer le backend :**
   - Ouvrez un terminal et accédez au répertoire `backend`.
   - Exécutez la commande suivante pour démarrer le serveur backend :
     ```bash
     npm start
     ```

2. **Lancer le frontend :**
   - Ouvrez un autre terminal et accédez au répertoire `frontend` :
     ```bash
     cd frontend
     ```
   - Exécutez la commande suivante pour démarrer l'application frontend :
     ```bash
     npm start
     ```

3. **Accéder à l'application :**
   - Une fois les deux serveurs lancés, ouvrez votre navigateur et accédez à l'application en visitant l'URL suivante :
     [http://localhost:3000](http://localhost:3000).
## Scripts disponibles

### Backend
- **`npm start`** : Démarrer le serveur backend.
- **`npm run dev`** : Démarrer le serveur backend en mode développement avec rechargement automatique (si configuré).

### Frontend
- **`npm start`** : Démarrer l'application frontend en mode développement.

## Auteurs
- **Yassin El Akhal** - Étudiant OpenClassrooms  
  

## Contributions
Les contributions ne sont pas acceptées sur ce projet éducatif. Cependant, les suggestions sont les bienvenues via des issues sur le dépôt GitHub.

## Licence
Ce projet est développé dans un cadre éducatif et n'est pas destiné à un usage commercial.


