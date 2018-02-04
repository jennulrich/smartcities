import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonValidePage } from './non-valide';

@NgModule({
  declarations: [
    NonValidePage,
  ],
  imports: [
    IonicPageModule.forChild(NonValidePage),
  ],
})
export class NonValidePageModule {}
