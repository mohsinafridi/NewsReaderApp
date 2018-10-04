import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsProvider {
  private key = "a921356d202d4b18828872a7dd876b68";//INSERT YOU API HERE
  private apiHeadlinesUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
  source = [];

  constructor(private http: Http) {

  }
  // getTopHeadLines(): Observable<string[]> {
  //   return this.http.get(this.apiHeadlinesUrl + this.key)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  getTopHeadLines(){
    return this.http.get(this.apiHeadlinesUrl + this.key);
  }
  getNewBySource(source) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.key);
  }
  getSources() {
    return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key);
  }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || {};
  // }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
