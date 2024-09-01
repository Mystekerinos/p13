

<img width="844" alt="Capture d’écran 2024-09-01 à 20 44 38" src="https://github.com/user-attachments/assets/6d8fbf93-d395-4e67-9140-4dd32c3f079c">

Formation Développeur d'application - JavaScript React




# P13 -Argent Bank - Utilisez une API pour un compte utilisateur bancaire avec React
<img width="832" alt="Capture d’écran 2024-09-01 à 22 05 02" src="https://github.com/user-attachments/assets/17209e86-2863-4cdc-a452-22b889ed0666">




Technologies and Dependencies
Javascript
CSS
Visual Studio code
Npm 
NodeJS 
React 
React-router-dom 
Axios 
Redux Toolkit 


Créer une application web complète et responsive avec React permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
fournir un document décrivant les endpoints API proposés pour les transactions, en utilisant Swagger / OpenAPI, et permettant :
de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
de visualiser les détails d'une transaction dans une autre vue ;
d'ajouter, de modifier ou de supprimer des informations sur une transaction.

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
