// Core components
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewsApiService {

    constructor(private http: HttpClient) {

    }

private baseUrl: string = 'https://newsapi.org/v2/top-headlines/';
private apiKey: string = 'f1a1bfbba3ae495897a3c5281dadf35f';

public getArticles()  {

    return new Promise(resolve => {
        const url = `${this.baseUrl}?country=fr&apiKey=${this.apiKey}`;
        this.http.get(url).subscribe(data => {
            resolve(data);

        }, err => {
            console.log(err);
        });
    });

}
}
