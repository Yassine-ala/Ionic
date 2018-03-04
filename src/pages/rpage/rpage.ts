import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-rpage',
  templateUrl: 'rpage.html',
})
export class RpagePage {

  items: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items.push({
      name: "Ionic",
      url: "../../assets/icon/slogo/ionic.png"
    },{
      name: "C#",
      url: "../../assets/icon/slogo/csharp.png"
    },{
      name: "Java",
      url: "../../assets/icon/slogo/java.png"
    },{
      name: "Angular",
      url: "../../assets/icon/slogo/angular.png"
    });
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);

  }

}
