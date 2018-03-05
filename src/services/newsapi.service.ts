// Core components
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJS


// Model
import { NewsApiGlobal } from '../models/newsapi-global.model'

@Injectable()
export class NewsApiService {


    constructor(private http: HttpClient) {

    }

    apiUrl = 'https://jsonplaceholder.typicode.com';

    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/users').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    addUser(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/users', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

/*
private baseUrl: string = 'https://newsapi.org/v2/';
private source: string = 'the-next-web';
private apiKey: string = 'f1a1bfbba3ae495897a3c5281dadf35f';

public getArticles() {
    const url = `${this.baseUrl}artices?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
}*/
}
