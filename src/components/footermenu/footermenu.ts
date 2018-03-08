import { Component } from '@angular/core';
import {ActionSheetController, AlertController} from "ionic-angular";
import {SettingsProvider} from "../../providers/settings/settings";

@Component({
  selector: 'footermenu',
  templateUrl: 'footermenu.html'
})
export class FootermenuComponent {

  selectedTheme: string;

  constructor(private alertCtrl: AlertController, private settings: SettingsProvider, private actionSheetCtrl: ActionSheetController) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
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
            checked: true
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
            title: 'Options Menu',
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
