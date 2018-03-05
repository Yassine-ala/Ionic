import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject('light');
  }

  setActiveTheme(val){
    this.theme.next(val);
}

  getActiveTheme(){
    return this.theme.asObservable();

}

}
