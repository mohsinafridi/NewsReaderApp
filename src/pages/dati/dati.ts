import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SettingsProvider } from './../../providers/settings/setting';

@IonicPage()
@Component({
  selector: 'page-dati',
  templateUrl: 'dati.html',
})
export class DatiPage {
  myName:string;
  articolo: any;
  data;
  selectedTheme: String;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl: ViewController,
     public iab: InAppBrowser,
     private settings: SettingsProvider)
      {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewWillLoad(){
    this.myName =this.navParams.get('myName');
    this.articolo = this.navParams.get("dati");
    this.articolo.publishedAt = this.articolo.publishedAt.split("T")[0];
    console.log(this.articolo);
    
  }

  openBrowser() {
    this.iab.create(this.articolo.url,'_system',{location:'no'});
  }

}
