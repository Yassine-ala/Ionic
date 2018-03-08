import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

// Services
import { NewsApiService} from "../../services/newsapi.service";

// Models
import {NewsApiGlobal} from "../../models/newsapi-global.model";
import {NewsApiArticle} from "../../models/newsapi-article.model";

@IonicPage()
@Component({
  selector: 'page-jsonhttp',
  templateUrl: 'jsonhttp.html',
})

export class JsonhttpPage {

  stat: NewsApiGlobal= new NewsApiGlobal();
  art: NewsApiArticle= new NewsApiArticle();

    constructor(private newsApiService: NewsApiService) {

    this.getArticles();

  }

    getArticles() {
        this.newsApiService.getArticles()
            .then((data : any) => {
               this.stat.totalResults = (data.totalResults);
               this.stat.status = (data.status);

                    for (let i = 0; i < (data.articles).length; i++) {
                    this.art.author.push(data.articles[i].author);
                    this.art.title.push(data.articles[i].title);
                    this.art.description.push(data.articles[i].description);
                    this.art.url.push(data.articles[i].url);
                    this.art.publishedAt.push(data.articles[i].publishedAt);
                    this.art.urlToImage.push(data.articles[i].urlToImage);

                }

            });
    }

}
