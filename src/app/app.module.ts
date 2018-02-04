import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaiementPage } from "../pages/paiement/paiement";
import { ConnexionPage } from "../pages/connexion/connexion";
import { InscriptionPage } from "../pages/inscription/inscription";
import { AccueilTicketPage } from "../pages/accueil-ticket/accueil-ticket";
import { NonValidePage } from "../pages/non-valide/non-valide";
import { FavorisPage } from "../pages/favoris/favoris";
import { HistoriquePage } from "../pages/historique/historique";
import { TrajetTouristiquePage } from "../pages/trajet-touristique/trajet-touristique";
import { TrajetJournalierPage } from "../pages/trajet-journalier/trajet-journalier";
import { ListTicketPage } from "../pages/list-ticket/list-ticket";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaiementPage,
    ConnexionPage,
    InscriptionPage,
    AccueilTicketPage,
    NonValidePage,
    FavorisPage,
    HistoriquePage,
    TrajetTouristiquePage,
    TrajetJournalierPage,
    ListTicketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaiementPage,
    ConnexionPage,
    InscriptionPage,
    AccueilTicketPage,
    NonValidePage,
    FavorisPage,
    HistoriquePage,
    TrajetTouristiquePage,
    TrajetJournalierPage,
    ListTicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
