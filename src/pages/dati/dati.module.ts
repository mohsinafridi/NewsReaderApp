import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatiPage } from './dati';

@NgModule({
  declarations: [
    DatiPage,
  ],
  imports: [
    IonicPageModule.forChild(DatiPage),
  ],
})
export class DatiPageModule {}
