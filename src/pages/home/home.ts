import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PersonagensPage } from '../personagens/personagens';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController)             
               {                   }

           
goToPersonagensPage() {
  this.navCtrl.push(PersonagensPage);
              }
  }

  


