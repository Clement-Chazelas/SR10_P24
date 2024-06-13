var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('./model/session');
//var csrf = require('csurf');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const accueilRouter = require('./routes/accueil');
var recruteurRouter = require('./routes/recruteur')
var adminRouter = require('./routes/admin');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var candidatureRouter = require("./routes/candidature");
var offresValidesRouter = require("./routes/offresValides"); 
var organisationRouter = require("./routes/organisation");
var accueilRecruteurRouteur = require("./routes/accueil_recruteur");
var accueilAdminRouteur = require("./routes/accueil_admin");
var postulerRouteur = require("./routes/postuler");
// var offresRecruteurRouteur = require("./routes/offres_recruteur");
// var visualiserCandidatureRecRouteur = require("./routes/visualiser_candidatures_rec");
// var rejoindreOrganisationRouteur = require("./routes/rejoindre_organisation");
var detailCandidatureRecRouteur = require("./routes/detail_candidature_rec");
var mesCandidaturesRouteur = require('./routes/mes_candidatures');
var consulterCandidatureRouteur = require('./routes/consulter_candidature');
// var proposerOffreRouteur = require('./routes/proposer_offre');

var app = express();

app.use(session.init());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//var csrfProtection = csrf({ cookie: true });
//app.use(csrfProtection);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accueil', accueilRouter);
app.use('/accueil/recruteur', recruteurRouter)
app.use('/accueil/admin', adminRouter)

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/candidature', candidatureRouter);
app.use('/accueil/offresValides', offresValidesRouter);
app.use('/organisation', organisationRouter);

app.use("/accueil/recruteur", accueilRecruteurRouteur);
app.use('/accueil/postuler', postulerRouteur);
// app.use('/accueil/offres_recruteur', offresRecruteurRouteur);
// app.use('/visualiser_candidatures_rec', visualiserCandidatureRecRouteur);
app.use('/detail_candidature_rec', detailCandidatureRecRouteur);
app.use('/accueil/mes_candidatures', mesCandidaturesRouteur);
app.use('/accueil/mes_candidatures/candidature', consulterCandidatureRouteur);
// app.use('/proposer_offre', proposerOffreRouteur);
app.use('/accueil_admin', accueilAdminRouteur);
// app.use('/rejoindre_organisation', rejoindreOrganisationRouteur)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// session


// Vérification de l'authentification
app.all("*", function (req, res, next) {
  const nonSecurePaths = ["/login", "/signup"];
  const adminPaths = []; // Liste des URLs admin
  
  if (nonSecurePaths.includes(req.path)) return next();

  // Authentification utilisateur
  if (adminPaths.includes(req.path)) {
    if (session.isConnected(req.session, "admin")) return next();
    else res.status(403).render("error", { message: "Accès non autorisé", error: {} });
  } else {
    if (session.isConnected(req.session)) return next();
    // Non authentifié
    else res.redirect("/login");
  }
});



//gestion des erreurs CSRF
app.use(function(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);

    // Gérer l'erreur CSRF ici (par exemple, afficher un message d'erreur)
    res.status(403).send('Erreur CSRF détectée');
});

module.exports = app;
