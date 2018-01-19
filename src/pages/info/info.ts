import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  people;

    constructor(public navCtrl: NavController, 
                public parametros: NavParams
                )
                { 
                  
                  this.people = this.parametros.get("people");
                  console.log(this.people);
                }
    
        
  }
