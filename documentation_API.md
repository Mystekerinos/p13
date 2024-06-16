Documentation de Mise en Place de l'API de Transactions Client
Bienvenue dans la documentation de l'API de Transactions Client. Cette API permet aux utilisateurs de gérer leurs transactions personnelles. Vous trouverez ci-dessous une explication des principaux verbes HTTP utilisés dans cette API.

Terminologie des Verbes HTTP

1. POST
   Rôle : Le verbe HTTP POST est utilisé pour créer une nouvelle ressource sur le serveur. Dans le contexte de cette API, il est utilisé pour ajouter une nouvelle transaction à la base de données.

Endpoint : /transactions

Description : Lorsque vous envoyez une requête POST à /transactions, vous devez fournir les détails de la transaction dans le corps de la requête au format JSON. Après traitement par le serveur, une nouvelle transaction est créée et stockée dans la base de données.

Exemple : Vous pouvez utiliser POST pour enregistrer une nouvelle dépense ou un revenu sur votre compte.

2. GET
   Rôle : Le verbe HTTP GET est utilisé pour récupérer des informations sur une ressource à partir du serveur. Il ne modifie pas les données sur le serveur, mais les récupère uniquement à des fins de consultation.

Endpoints :

/transactions/grouped: Utilisé pour récupérer les transactions regroupées par compte pour le mois en cours.
/transactions/{transactionId}: Utilisé pour récupérer les détails spécifiques d'une transaction à partir de son ID.
Description :

GET /transactions/grouped : Cette opération permet de récupérer toutes les transactions regroupées par compte pour le mois en cours. Vous pouvez filtrer les résultats en spécifiant un mois différent via le paramètre month.

GET /transactions/detail/{transactionId} : Utilisé pour récupérer les détails spécifiques d'une transaction en fournissant son ID dans l'URL. Cela vous permet de consulter les détails d'une transaction particulière sans la modifier.

Exemple :

Utilisez GET /transactions/grouped/{accountId}
pour voir un résumé de toutes vos transactions par compte ce mois-ci.
Utilisez GET /transactions/detail/{transactionId} pour obtenir des détails spécifiques sur une transaction en particulier. 3. PUT
Rôle : Le verbe HTTP PUT est utilisé pour mettre à jour une ressource existante sur le serveur. Il remplace entièrement la ressource existante par la nouvelle version fournie.

Endpoint : /transactions/detail/{transactionId}

Description : Lorsque vous envoyez une requête PUT à /transactions/{transactionId}, vous devez fournir les nouvelles informations de la transaction dans le corps de la requête au format JSON, y compris la catégorie et la note. Cette opération met à jour les détails d'une transaction spécifique identifiée par {transactionId}.

Exemple : Vous pouvez utiliser PUT pour modifier la catégorie ou la note associée à une transaction déjà enregistrée.
