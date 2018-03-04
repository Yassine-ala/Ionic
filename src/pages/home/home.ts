import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PpagePage} from "../ppage/ppage";
import {RpagePage} from "../rpage/rpage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   private naame: string="";

 pushPpage(){
    this.navCtrl.push(PpagePage, {rname: this.naame});

 }

 rootRpage(){
    this.navCtrl.setRoot(RpagePage, {rname: this.naame});

 }
}
