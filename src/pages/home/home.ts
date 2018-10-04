import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //  api: string = "a921356d202d4b18828872a7dd876b68";//INSERT YOU API HERE
  

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  register() {
    this.navCtrl.push(RegisterPage)
  }
  signIn() {
    this.navCtrl.push(LoginPage);
  }


}
