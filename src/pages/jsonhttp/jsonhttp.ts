import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { NewsApiService} from "../../services/newsapi.service";

//import { NewsApiGlobal} from "../../models/newsapi-global.model";

@IonicPage()
@Component({
  selector: 'page-jsonhttp',
  templateUrl: 'jsonhttp.html',
})

export class JsonhttpPage {

  //news: NewsApiGlobal;

    users: any;

  constructor(public navCtrl: NavController, private newsApiService: NewsApiService) {

      this.getUsers();

   /* this.newsApiService.getArticles()
        .then(newsFetched => {
            this.news = newsFetched;
            console.log(this.news);
        });*/

  }

    getUsers() {
        this.newsApiService.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }

}
