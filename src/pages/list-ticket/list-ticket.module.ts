import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTicketPage } from './list-ticket';

@NgModule({
  declarations: [
    ListTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTicketPage),
  ],
})
export class ListTicketPageModule {}
