import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { NewsPage } from '../news/news';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  currentUser:string;
  @ViewChild('username')  username;
  @ViewChild('password')  password;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController ) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser() {
    
    this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
    .then(data=>{
      this.navCtrl.push(NewsPage,{
        currentUser:this.username.value
        });
    })
    .catch(error=>
      {
        let alert =this.alertCtrl.create({
                    title:'Login Error',
                    subTitle:'You are Not Logged in',
                    buttons:['OK']
                });
                alert.present();
      })
    // if (this.uname.value == "mohsin" && this.password.value == "mohsin") {
    //       let alert =this.alertCtrl.create({
    //           title:'Login Successful',
    //           subTitle:'You are Logged in',
    //           buttons:['OK']
    //       });
    //       alert.present();
    //       this.navCtrl.push(NewsPage,{
    //           MyName:this.myName
    //         });
    // }
  }
}
