import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { NewsProvider } from './../../providers/news/news';
import 'rxjs/add/operator/map';
import { SettingsProvider } from '../../providers/settings/setting';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  key: string = "a921356d202d4b18828872a7dd876b68";//INSERT YOU API HERE
  newsArticles = [];
  source = [];
  selectedSource: String = "google-news";
  selectedTheme: String;
  errorMessage: string;
  currentUserEmail: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams, public http: Http,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public _service: NewsProvider
    , private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.loadSource();
    this.currentUserEmail = this.navParams.get('currentUser');
  }

  ionViewDidLoad() {
    this.getNews();
  }


  getNews() {
    const loader = this.loadingCtrl.create({
      content: "Loading News..."
    });
    //this.http.get('https://newsapi.org/v2/top-headlines?country=us&sources=' + this.selectedSource + '&category=business&apiKey=' + this.key)
    loader.present();
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + this.selectedSource + '&apiKey=' + this.key)
      .map(res => res.json())
      .subscribe(
        data => {
          this.newsArticles = data.articles;
          loader.dismiss();
        },
        error => {
          loader.dismiss();
        }
      );
  }


  loadSource() {
    return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key)
      .map(res => res.json())
      .subscribe(
        data => {
          this.source = data.sources;
        },
        error => {
          console.log("error..");
        }
      );
  }

  openModal(event) {
    const modal = this.modalCtrl.create("DatiPage", { dati: event });
    modal.present();
  }

  chooseSource(source) {
    this.selectedSource = source;
    this.getNews();
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }
}
