import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

@ViewChild('username')  username;
@ViewChild('password')  password;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.username.value,this.password.value)
    .then(data  =>{
       console.log(data);
    }).catch( error=>{
        console.log(error);

      });
    

  }

}
