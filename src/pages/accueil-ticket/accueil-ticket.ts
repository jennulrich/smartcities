import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TrajetTouristiquePage} from "../trajet-touristique/trajet-touristique";
import {TrajetJournalierPage} from "../trajet-journalier/trajet-journalier";
import {ListTicketPage} from "../list-ticket/list-ticket";

/**
 * Generated class for the AccueilTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-ticket',
  templateUrl: 'accueil-ticket.html',
})
export class AccueilTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilTicketPage');
  }

  trajetTouristique() {
    this.navCtrl.push(TrajetTouristiquePage)
  }

  trajetJournalier() {
    this.navCtrl.push(TrajetJournalierPage)
  }

  listTicket() {
    this.navCtrl.push(ListTicketPage)
  }
}
