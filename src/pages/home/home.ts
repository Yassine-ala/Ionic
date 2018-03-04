import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

//Pages
import {PpagePage} from "../ppage/ppage";
import {RpagePage} from "../rpage/rpage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

   private naame: string="";
   private teext: string="";

 pushPpage(){
    this.navCtrl.push(PpagePage, {rname: this.naame, rtext: this.teext});

 }

 rootRpage(){
    this.navCtrl.setRoot(RpagePage, {rname: this.naame});

 }


}
