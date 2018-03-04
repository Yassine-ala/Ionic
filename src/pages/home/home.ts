import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SettingsProvider} from "../../providers/settings/settings";
//Pages
import {PpagePage} from "../ppage/ppage";
import {RpagePage} from "../rpage/rpage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedTheme: string;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController,
  private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

   private naame: string="";
   private teext: string="";

 pushPpage(){
    this.navCtrl.push(PpagePage, {rname: this.naame, rtext: this.teext});

 }

 rootRpage(){
    this.navCtrl.setRoot(RpagePage, {rname: this.naame});

 }

  theme(col: string){
   this.settings.setActiveTheme(col);
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Set Background Color');

    alert.addInput({
      type: 'radio',
      label: 'white',
      value: 'light',
    });

    alert.addInput({
      type: 'radio',
      label: 'dark',
      value: 'dark'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.theme(data);
      }
    });
    alert.present();
  }

 showActionSheet(){
   let menuActionSheet = this.actionSheetCtrl.create({
     title: 'Browse',
     buttons: [
       {
         text: 'Change theme',
         handler: () => {
           this.showRadio();
         }
       },{
         text: 'Option 2',
         handler: () => {
           console.log('op2 clicked');
         }
       },{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   menuActionSheet.present();

 }
}
