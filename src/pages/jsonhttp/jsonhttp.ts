import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { NewsApiService} from "../../services/newsapi.service";

import { NewsApiGlobal} from "../../models/newsapi-global.model";

@IonicPage()
@Component({
  selector: 'page-jsonhttp',
  templateUrl: 'jsonhttp.html',
})

export class JsonhttpPage {

  news: any;

   // users: any;

  constructor(public navCtrl: NavController, private newsApiService: NewsApiService) {

      // this.getUsers();

    this.getArticles();

  }

    getArticles() {
        this.newsApiService.getArticles()
            .then(data => {
                this.news = data;
                console.log(this.news);
            });
    }
  /*
    getUsers() {
        this.newsApiService.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }
*/
}
