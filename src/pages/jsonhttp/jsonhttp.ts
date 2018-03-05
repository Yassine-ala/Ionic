import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { NewsApiService} from "../../services/newsapi.service";

@IonicPage()
@Component({
  selector: 'page-jsonhttp',
  templateUrl: 'jsonhttp.html',
})

export class JsonhttpPage {

  news: any;

  constructor(private newsApiService: NewsApiService) {

    this.getArticles();

  }

    getArticles() {
        this.newsApiService.getArticles()
            .then(data => {
                this.news = data;
                console.log(this.news);
            });
    }

}
