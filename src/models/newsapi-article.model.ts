import {NewsApiSource} from "./newsapi-source.model";

export class NewsApiArticle{

    source: NewsApiSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;

}