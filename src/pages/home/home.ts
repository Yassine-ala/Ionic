import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

//Pages
import {PpagePage} from "../ppage/ppage";
import {RpagePage} from "../rpage/rpage";
import {JsonhttpPage} from "../jsonhttp/jsonhttp";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

   private naame: string="";
   private teext: string="";

    rating: number = 0;

 pushPpage(){
    this.navCtrl.push(PpagePage, {rname: this.naame, rtext: this.teext});

 }

 rootRpage(){
    this.navCtrl.setRoot(RpagePage, {rname: this.naame});

 }

 jsonred(){
     this.navCtrl.push(JsonhttpPage);
 }

}
