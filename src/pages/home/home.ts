import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnexionPage } from "../connexion/connexion";
import { InscriptionPage } from "../inscription/inscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(ConnexionPage)
  }

  signup(){
    this.navCtrl.push(InscriptionPage)
  }

}
