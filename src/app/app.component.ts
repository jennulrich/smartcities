import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PaiementPage } from "../pages/paiement/paiement";
import {AccueilTicketPage} from "../pages/accueil-ticket/accueil-ticket";
import {NonValidePage} from "../pages/non-valide/non-valide";
import {FavorisPage} from "../pages/favoris/favoris";
import {HistoriquePage} from "../pages/historique/historique";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
    this.initializeApp();

    this.pages = [
        { title: 'Home', component: AccueilTicketPage },
        { title: 'Tickets non scannés', component: NonValidePage },
        { title: 'Itinéraires favoris', component: FavorisPage },
        { title: 'Historique', component: HistoriquePage },
        { title: 'Moyens de paiement', component: PaiementPage },
        { title: 'Déconnexion', component: HomePage }
    ];
  }

  initializeApp() {
      this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();
      });
  }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

}

