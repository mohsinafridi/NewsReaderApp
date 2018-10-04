import { IonicImageViewerModule } from 'ionic-img-viewer';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewsProvider } from '../providers/news/news';
import { NewsPage } from '../pages/news/news';

import { SettingsProvider } from '../providers/settings/setting';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseAuth  =  {
  apiKey: "AIzaSyBahTXlw77WuRrUxuLLbIVDeQjURBxmIfg",
  authDomain: "newsreader-86e66.firebaseapp.com",
  databaseURL: "https://newsreader-86e66.firebaseio.com",
  projectId: "newsreader-86e66",
  storageBucket: "",
  messagingSenderId: "978682254713"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage  ,
    LoginPage,RegisterPage ,NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicImageViewerModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage,RegisterPage,NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    NewsProvider,SettingsProvider

  ]
})
export class AppModule {}
