import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilTicketPage } from './accueil-ticket';

@NgModule({
  declarations: [
    AccueilTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilTicketPage),
  ],
})
export class AccueilTicketPageModule {}
