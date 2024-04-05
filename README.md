# Projet : développement d’une application web de recrutement

# Cahier des charges

## 1. Besoin  
Une application web de type plateforme numérique de recrutement qui servira de liaison entre les
entreprises qui cherchent à recruter et des personnes qui cherchent un emploi. Ainsi, cette plateforme
permettra aux recruteurs d’une entreprise de déposer des offres d’emplois décrivant le profil
recherché et également aux personnes en recherche d’emploi de trouver une offre en fonction de
leurs ambitions professionnelles.  
Les fonctionnalités de l’application :  
• Ajouter une organisation (entreprise, association ou toute entité qui recrute)  
• Ajouter des offres (+ éditer et supprimer une offre)  
• Lister les offres (+ ajouter des filtres sur la liste)  
• Chercher une offre par lieu, titre, type de poste, etc.  
• Candidater à une offre  
• Afficher la liste des candidats à une offre  
• Télécharger les dossiers des candidats  

## 2. Description fonctionnelle  
**« Utilisateur » :** acteur pouvant accéder à l’application de recrutement. Il existe trois types
d’utilisateurs : administrateur, recruteur et candidat.  
L'authentification à l’application s'effectue grâce à une adresse email et un mot de passe qui respecte
les recommandations du CNIL (les mots de passe doivent être composés d'au minimum 12 caractères
comprenant des majuscules, des minuscules, des chiffres et des caractères spéciaux à choisir dans
une liste d'au moins 37 caractères spéciaux possibles). Le compte d’un utilisateur comportera son
nom, son prénom, ses coordonnées téléphoniques, la date de création et le statut du compte
(actif/inactif).  
NB. : Libre à vous d'ajouter d'autres informations si besoin  
Chaque utilisateur doit créer un compte avant de pouvoir utiliser la plateforme. Par défaut ce compte
donne uniquement accès à des fonctionnalités de base (de type candidat) telles que la recherche des
offres, la candidature à une offre, etc.  
Un compte de type recruteur d’une organisation donne accès aux fonctionnalités de gestion des offres
(ajout, suppression, modification, etc.) de l’organisation dont il fait partie. Les comptes recruteurs
d’une organisation sont validés par l’administrateur de la plateforme. Les recruteurs de l’organisation
utilisent le formulaire qui permet de joindre une organisation existante. L’ajout d’organisation se fait
via un formulaire et est validé par l’administrateur.  
L'administrateur est le seul qui peut donner les droits d’administration sur la plateforme à un compte.
L’utilisateur reçoit des notifications par mail lorsque son compte est créé, sa demande d’ajouter / de
joindre une organisation est validée, ou les droits d’administration lui sont octroyés.  

**«Organisation» :** représente une entreprise ou une association qui cherche à recruter des
collaborateurs. L’organisation possède un Siren comme un identifiant unique, un nom, un type
(association, Eurl, Sarl, SASU, etc.) et son siège social (son adresse administrative).  

**« Offre d’emploi/fiche de poste » :** une offre possède un numéro unique, un rattachement à une fiche
de poste, un état ("non publiée" [en cours d’édition], "publiée", "expirée"), une date de validité, une
indication (texte) sur la liste des pièces demandées dans le dossier de candidature, nombre des pièces
demandées. Une fiche de poste appartient à une organisation et elle possède un intitulé, un statut de
poste (cadre, ETAM, etc.), un responsable hiérarchique, un type de métier (ex. cybersécurité,
informatique), le lieu de la mission, le rythme (ex.35 heures /semaine, télétravail possible), une
fourchette de salaire, une description (missions et activités, compétences attendues). Les offres
d’emploi sont éditées uniquement par des recruteurs qui peuvent aussi étendre leur durée de validité.
Plusieurs offres d’emploi peuvent être rattachées à une même fiche de poste.  

**« Candidature » :** pour chaque candidature on souhaite sauvegarder la date de candidature, les pièces
de dossier (ex. : CV, lettre de motivation, pièce d’identité, photo, diplôme, etc…). Un candidat ne peut
pas candidater deux fois à une même offre mais il peut modifier son dossier ou compléter sa
candidature tant que l’offre est encore disponible.  


## 3. Enchaînement des écrans
L'utilisateur arrive sur une page de login/inscription. Si l’utilisateur ne possède pas de compte il doit
cliquer sur le lien d’inscription sinon il doit cliquer sur le lien d’authentification (login).
Après authentification, si l’utilisateur est administrateur, il est redirigé automatiquement vers l’écran
administrateur. Sinon un écran candidat est affiché avec les fonctionnalités de base de la plateforme ;
si l’utilisateur possède un compte recruteur le bouton recruter s’afficher sur l’écran sinon le bouton
devenez recruteur s’affiche à sa place. Le bouton « recruter » permet de changer d’écran vers l’écran
recruteur.  

### 1) Ecrans administrateur
• Gestion des utilisateurs : visualisation des comptes (avec pagination et fonction de
recherche), modification/suppression, attribution du rôle administrateur.  
• Gestion des organisations : visualisation des demandes d’enregistrement d’organisation
(avec pagination et fonction de recherche), validation/refus, visualisation des demandes
validées ou refusées (avec pagination et fonction de recherche).  
• Gestion des recruteurs : visualiser les demandes de joindre une organisation en tant que
recruteur (avec pagination et fonction de recherche), valider ou refuser ces demandes.  

### 2) Ecrans recruteur
• Gestion des offres : visualisation des offres encore valides (avec pagination et fonction
de recherche), visualisation des offres expirées.  
• Gestion des candidatures : visualiser les candidatures sur une offre, télécharger les
dossiers.  

### 3) Ecrans candidat
• Visualiser les offres avec pagination et recherche. L’interface possède plusieurs
options de tri tels que le tri par date de publication, le tri par distance entre le lieu de
travail et l’adresse de candidat, etc. Elle possède également plusieurs filtres tels que
par type de métier, par fourchette de salaire, etc.  
• Candidater à une offre directement depuis la liste des offres ou dans le détail (la page)
d’une offre.  
• Gestion des candidatures : visualiser la liste de mes candidatures, sélectionner,
compléter ou annuler une candidature.  
