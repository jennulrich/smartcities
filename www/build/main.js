webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_ticket_accueil_ticket__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnexionPage = (function () {
    function ConnexionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConnexionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnexionPage');
    };
    ConnexionPage.prototype.homeTicket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accueil_ticket_accueil_ticket__["a" /* AccueilTicketPage */]);
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/connexion/connexion.html"*/'<!--\n  Generated template for the ConnexionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connexion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-login">\n  <form action="">\n    <ion-list>\n      <div class="connexion">\n        <ion-input type="email" placeholder="Adresse e-mail"></ion-input>\n      </div>\n      <div class="connexion">\n        <ion-input type="password" placeholder="Mot de passe"></ion-input>\n      </div>\n    </ion-list>\n  </form>\n  <button ion-button block class="login" (click)="homeTicket()">\n    Connexion\n  </button>\n  <p style="font-size: 9pt; color: grey; text-align: center; margin-top: 25px">Mot de passe oublié ?</p>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/connexion/connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavorisPage = (function () {
    function FavorisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavorisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavorisPage');
    };
    FavorisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoris',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/favoris/favoris.html"*/'<!--\n  Generated template for the FavorisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle class="menu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favoris</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="bg-fav">\n<ion-list>\n  <ion-item>\n    <button>Acheter</button>\n    <span>Olympiades -> St-Lazare</span>\n  </ion-item>\n  <ion-item>\n    <button>Acheter</button>\n    <span>Opéra -> Gare de l\'Est</span>\n  </ion-item>\n  <ion-item>\n    <button>Acheter</button>\n    <span>Courbevoie -> Massy</span>\n  </ion-item>\n  <ion-item>\n    <button>Acheter</button>\n    <span>Porte d\'Orléans -> Pasteur</span>\n  </ion-item>\n  <ion-item>\n    <button>Acheter</button>\n    <span>Les Halles -> Odéon</span>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/favoris/favoris.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FavorisPage);
    return FavorisPage;
}());

//# sourceMappingURL=favoris.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriquePage = (function () {
    function HistoriquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoriquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriquePage');
    };
    HistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historique',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/historique/historique.html"*/'<!--\n  Generated template for the HistoriquePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle class="menu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Historique</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #f1f5f6;">\n  <div class="detail">\n    <p>Olympiade -> St-Lazare</p>\n    <p>20 minutes</p>\n    <p>1.90€</p>\n    <button ion-button block>Détails</button>\n  </div>\n  <div class="detail">\n    <p>Opéra -> Gare de l\'Est</p>\n    <p>10 minutes</p>\n    <p>1.90€</p>\n    <button ion-button block>Détails</button>\n  </div>\n  <div class="detail">\n    <p>Courbevoie -> Massy</p>\n    <p>57 minutes</p>\n    <p>4.90€</p>\n    <button ion-button block>Détails</button>\n  </div>\n  <div class="detail">\n    <p>Porte d\'Orléans -> Pasteur</p>\n    <p>45 minutes</p>\n    <p>2.30€</p>\n    <button ion-button block>Détails</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/historique/historique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoriquePage);
    return HistoriquePage;
}());

//# sourceMappingURL=historique.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_ticket_accueil_ticket__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InscriptionPage = (function () {
    function InscriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InscriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InscriptionPage');
    };
    InscriptionPage.prototype.homeTicket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accueil_ticket_accueil_ticket__["a" /* AccueilTicketPage */]);
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/inscription/inscription.html"*/'<!--\n  Generated template for the InscriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-signup">\n  <div class="buttons_social">\n    <button ion-button block class="fb">\n      S\'inscrire avec Facebook\n    </button>\n    <button ion-button block class="google">\n      S\'inscrire avec Google\n    </button>\n    <p>OU</p>\n  </div>\n  <form action="">\n    <ion-list>\n      <div class="inscription">\n        <ion-input type="text" placeholder="Nom"></ion-input>\n      </div>\n      <div  class="inscription" >\n        <ion-input type="text" placeholder="Prénom"></ion-input>\n      </div>\n      <div  class="inscription">\n        <ion-input type="email" placeholder="Adresse e-mail"></ion-input>\n      </div>\n      <div class="inscription">\n        <ion-input type="password" placeholder="Mot de passe"></ion-input>\n      </div>\n      <div  class="inscription">\n        <ion-input type="password" placeholder="Confirmation mot de passe"></ion-input>\n      </div>\n    </ion-list>\n  </form>\n  <button ion-button block class="google" (click)="homeTicket()">\n    Inscription\n  </button>\n  <p class="cg">En cliquant sur Inscription vous acceptez les Conditions Générales.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/inscription/inscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonValidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NonValidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NonValidePage = (function () {
    function NonValidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NonValidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NonValidePage');
    };
    NonValidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-non-valide',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/non-valide/non-valide.html"*/'<!--\n  Generated template for the NonValidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle class="menu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Ticket non scanné\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p class="date"> 11 Octobre 2017 </p>\n  <div id="conteneur">\n    <p>1,90€</p>\n    <p>Non validé</p>\n    <p>1234</p>\n  </div>\n  <p class="prochainM">Prochains métro depuis votre position actuelle :</p>\n  <ul>\n    <li>3 minutes</li>\n    <li>7 minutes</li>\n    <li>10 minutes</li>\n    <li>14 minutes</li>\n  </ul>\n  <div class="QRCode">\n    <img src="../../assets/imgs/QR_code.png" height="200px">\n    <div class="positionBas">\n      <button ion-button block class="buttonScannez">Scannez pour valider</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/non-valide/non-valide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NonValidePage);
    return NonValidePage;
}());

//# sourceMappingURL=non-valide.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaiementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaiementPage = (function () {
    function PaiementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('val'));
    }
    PaiementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaiementPage');
    };
    PaiementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paiement',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/paiement/paiement.html"*/'<!--\n  Generated template for the PaiementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle class="menu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Moyens de paiement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="bg-paiement">\n  <div>\n    <i class="far fa-credit-card"></i> <p>Personnel ****1234</p>\n    <i class="far fa-credit-card"></i> <p>Personnel ****1234</p>\n  </div>\n</ion-content>\n\n<ion-footer block>\n  <button>\n    AJOUTER UN MOYEN DE PAIEMENT\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/paiement/paiement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PaiementPage);
    return PaiementPage;
}());

//# sourceMappingURL=paiement.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accueil-ticket/accueil-ticket.module": [
		278,
		20
	],
	"../pages/connexion/connexion.module": [
		279,
		19
	],
	"../pages/favoris/favoris.module": [
		280,
		16
	],
	"../pages/historique/historique.module": [
		281,
		15
	],
	"../pages/inscription/inscription.module": [
		282,
		14
	],
	"../pages/list-ticket/list-ticket.module": [
		289,
		11
	],
	"../pages/non-valide/non-valide.module": [
		283,
		13
	],
	"../pages/paiement/paiement.module": [
		284,
		12
	],
	"../pages/trajet-journalier/trajet-journalier.module": [
		287,
		10
	],
	"../pages/trajet-touristique/trajet-touristique.module": [
		285,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connexion_connexion__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inscription_inscription__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__connexion_connexion__["a" /* ConnexionPage */]);
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inscription_inscription__["a" /* InscriptionPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/home/home.html"*/'<ion-content class="bg-home">\n  <!--<button ion-button (click)="load()">\n    test\n  </button>-->\n  <div padding class="buttons_log">\n    <button ion-button block (click)="signup()">\n      Inscription\n    </button>\n    <button ion-button block class="login" (click)="login()">\n      Connexion\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_paiement_paiement__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inscription_inscription__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accueil_ticket_accueil_ticket__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_non_valide_non_valide__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favoris_favoris__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_trajet_touristique_trajet_touristique__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_trajet_journalier_trajet_journalier__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_ticket_list_ticket__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_paiement_paiement__["a" /* PaiementPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_ticket_accueil_ticket__["a" /* AccueilTicketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_non_valide_non_valide__["a" /* NonValidePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_trajet_touristique_trajet_touristique__["a" /* TrajetTouristiquePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trajet_journalier_trajet_journalier__["a" /* TrajetJournalierPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_ticket_list_ticket__["a" /* ListTicketPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accueil-ticket/accueil-ticket.module#AccueilTicketPageModule', name: 'AccueilTicketPage', segment: 'accueil-ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoris/favoris.module#FavorisPageModule', name: 'FavorisPage', segment: 'favoris', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historique/historique.module#HistoriquePageModule', name: 'HistoriquePage', segment: 'historique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inscription/inscription.module#InscriptionPageModule', name: 'InscriptionPage', segment: 'inscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/non-valide/non-valide.module#NonValidePageModule', name: 'NonValidePage', segment: 'non-valide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paiement/paiement.module#PaiementPageModule', name: 'PaiementPage', segment: 'paiement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet-touristique/trajet-touristique.module#TrajetTouristiquePageModule', name: 'TrajetTouristiquePage', segment: 'trajet-touristique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet-journalier/trajet-journalier.module#TrajetJournalierPageModule', name: 'TrajetJournalierPage', segment: 'trajet-journalier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-ticket/list-ticket.module#ListTicketPageModule', name: 'ListTicketPage', segment: 'list-ticket', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_paiement_paiement__["a" /* PaiementPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_ticket_accueil_ticket__["a" /* AccueilTicketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_non_valide_non_valide__["a" /* NonValidePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_trajet_touristique_trajet_touristique__["a" /* TrajetTouristiquePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trajet_journalier_trajet_journalier__["a" /* TrajetJournalierPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_ticket_list_ticket__["a" /* ListTicketPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_paiement_paiement__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_accueil_ticket_accueil_ticket__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_non_valide_non_valide__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favoris_favoris__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historique_historique__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        /*platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });*/
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_accueil_ticket_accueil_ticket__["a" /* AccueilTicketPage */] },
            { title: 'Tickets non scannés', component: __WEBPACK_IMPORTED_MODULE_7__pages_non_valide_non_valide__["a" /* NonValidePage */] },
            { title: 'Itinéraires favoris', component: __WEBPACK_IMPORTED_MODULE_8__pages_favoris_favoris__["a" /* FavorisPage */] },
            { title: 'Historique', component: __WEBPACK_IMPORTED_MODULE_9__pages_historique_historique__["a" /* HistoriquePage */] },
            { title: 'Moyens de paiement', component: __WEBPACK_IMPORTED_MODULE_5__pages_paiement_paiement__["a" /* PaiementPage */] },
            { title: 'Déconnexion', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-content>\n        <div class="profil">\n            <div class="user">\n                <img src="../assets/imgs/user.png" alt="">\n            </div>\n            <div class="name">\n                <p>John DOE</p>\n            </div>\n        </div>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="menu">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n\n\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetTouristiquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrajetTouristiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrajetTouristiquePage = (function () {
    function TrajetTouristiquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrajetTouristiquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrajetTouristiquePage');
    };
    TrajetTouristiquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trajet-touristique',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/trajet-touristique/trajet-touristique.html"*/'<!--\n  Generated template for the TrajetTouristiquePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Trajet Touristique</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <h4 padding>Choix des lieux touristiques :</h4>\n    <ion-list>\n      <h6>Monuments :</h6>\n      <ion-item>\n        <ion-label>Avenue des Champs-Elysées</ion-label>\n        <ion-toggle [(ngModel)]="champs"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Arc de Triomphe</ion-label>\n        <ion-toggle [(ngModel)]="triomphe"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Catacombes de Paris</ion-label>\n        <ion-toggle [(ngModel)]="kta"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Jardin des Tuileries</ion-label>\n        <ion-toggle [(ngModel)]="tuileries"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Montmarte</ion-label>\n        <ion-toggle [(ngModel)]="montmartre"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Moulin-Rouge</ion-label>\n        <ion-toggle [(ngModel)]="moulin"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Panthéon</ion-label>\n        <ion-toggle [(ngModel)]="pantheon"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Place de la Concorde</ion-label>\n        <ion-toggle [(ngModel)]="concorde"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pont des Arts</ion-label>\n        <ion-toggle [(ngModel)]="arts"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tour Eiffel</ion-label>\n        <ion-toggle [(ngModel)]="eiffel"></ion-toggle>\n      </ion-item>\n\n\n      <h6>Musée :</h6>\n      <ion-item>\n        <ion-label>Musée Carnavalet</ion-label>\n        <ion-toggle [(ngModel)]="carnavalet"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée Cluny</ion-label>\n        <ion-toggle [(ngModel)]="cluny"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée Grévin</ion-label>\n        <ion-toggle [(ngModel)]="grevin"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée du Louvre</ion-label>\n        <ion-toggle [(ngModel)]="louvre"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée de l\'Orangerie</ion-label>\n        <ion-toggle [(ngModel)]="porangerie"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée Picasso</ion-label>\n        <ion-toggle [(ngModel)]="picasso"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Musée Rodin</ion-label>\n        <ion-toggle [(ngModel)]="rodin"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n\n  <button ion-button block class="validerParcour">Lancer le circuit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/trajet-touristique/trajet-touristique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TrajetTouristiquePage);
    return TrajetTouristiquePage;
}());

//# sourceMappingURL=trajet-touristique.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetJournalierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrajetJournalierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrajetJournalierPage = (function () {
    function TrajetJournalierPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrajetJournalierPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrajetJournalierPage');
    };
    TrajetJournalierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trajet-journalier',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/trajet-journalier/trajet-journalier.html"*/'<!--\n  Generated template for the TrajetJournalierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Trajet Journalier</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="plan">\n    <img src="../../assets/imgs/milan-vector-map.jpg" alt="">\n  </div>\n  <ion-list class="list">\n    <ion-item>\n      <ion-input class="trajet depart" placeholder="Station de départ">\n        <span> Station de départ</span>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input class="trajet arrivee" placeholder="Station d\'arrivée">\n        <span>Station d\'arrivée</span>\n      </ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row  text-center>\n    <div col-4 class="infos"><i class="far fa-money-bill-alt"></i> 0,00€</div>\n    <div col-4 class="infos"><i class="fas fa-user"></i> 1 <i class="fas fa-angle-down"></i></div>\n    <div col-4 class="infos"><i class="far fa-credit-card"></i> 1234</div>\n  </ion-row>\n  <ion-row text-center>\n    <div col-6 class="info"><i class="far fa-clock"></i> Temps estimé</div>\n    <div col-6 class="info fav"><i class="fas fa-star"></i> FAVORIS</div>\n  </ion-row>\n</ion-content>\n<ion-footer block>\n  <button>\n    ACHETER UN TICKET\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/trajet-journalier/trajet-journalier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TrajetJournalierPage);
    return TrajetJournalierPage;
}());

//# sourceMappingURL=trajet-journalier.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListTicketPage = (function () {
    function ListTicketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListTicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListTicketPage');
    };
    ListTicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-ticket',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/list-ticket/list-ticket.html"*/'<!--\n  Generated template for the ListTicketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Liste des ticket</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-title>Tickets pour tous</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label>Ticket Île-de-France</ion-label>\n      <ion-toggle [(ngModel)]="idf"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ticket aéroport</ion-label>\n      <ion-toggle [(ngModel)]="aeroport"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ticket T+</ion-label>\n      <ion-toggle [(ngModel)]="tplus"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mobilis</ion-label>\n      <ion-toggle [(ngModel)]="mobilis"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Forfait Paris Visite</ion-label>\n      <ion-toggle [(ngModel)]="visite"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-title>Tickets jeunes</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label>Ticket Jeunes Week-End</ion-label>\n      <ion-toggle [(ngModel)]="weekend"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-title>Tickets solidarité</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label>Bénéficiaires d\'aides sociales</ion-label>\n      <ion-toggle [(ngModel)]="aides"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jeunes en insertion</ion-label>\n      <ion-toggle [(ngModel)]="insertion"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-title>Tarifs réduits</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label>Famille nombreuse</ion-label>\n      <ion-toggle [(ngModel)]="famille"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Enfant</ion-label>\n      <ion-toggle [(ngModel)]="enfant"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Salarié</ion-label>\n      <ion-toggle [(ngModel)]="salarie"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Groupe jeune</ion-label>\n      <ion-toggle [(ngModel)]="groupe_jeune"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-title>Carnets</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label>Ticket T+</ion-label>\n      <ion-toggle [(ngModel)]="carnet_t_plus"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer block>\n  <button>\n    ACHETER\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/list-ticket/list-ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListTicketPage);
    return ListTicketPage;
}());

//# sourceMappingURL=list-ticket.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilTicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trajet_touristique_trajet_touristique__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trajet_journalier_trajet_journalier__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_ticket_list_ticket__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccueilTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccueilTicketPage = (function () {
    function AccueilTicketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccueilTicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccueilTicketPage');
    };
    AccueilTicketPage.prototype.trajetTouristique = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trajet_touristique_trajet_touristique__["a" /* TrajetTouristiquePage */]);
    };
    AccueilTicketPage.prototype.trajetJournalier = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trajet_journalier_trajet_journalier__["a" /* TrajetJournalierPage */]);
    };
    AccueilTicketPage.prototype.listTicket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_ticket_list_ticket__["a" /* ListTicketPage */]);
    };
    AccueilTicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil-ticket',template:/*ion-inline-start:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/accueil-ticket/accueil-ticket.html"*/'<!--\n  Generated template for the AccueilTicketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons start padding-top>\n      <button ion-button icon-only menuToggle class="menu">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n</ion-header>\n\n\n<ion-content padding class="bg-vente-ticket">\n  <button ion-button block class="ticket" (click)="trajetJournalier()">\n    Trajet journalier\n  </button>\n  <button ion-button block class="ticket" (click)="trajetTouristique()">\n    Trajet touristique\n  </button>\n  <button ion-button block class="ticket" (click)="listTicket()">\n    Liste tickets\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/jennou/Documents/agorizenew/agorize_prod/src/pages/accueil-ticket/accueil-ticket.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], AccueilTicketPage);
    return AccueilTicketPage;
    var _a, _b;
}());

//# sourceMappingURL=accueil-ticket.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map