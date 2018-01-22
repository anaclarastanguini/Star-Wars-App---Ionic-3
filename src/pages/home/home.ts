import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonagensPage } from '../personagens/personagens';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController)             
               {                   }

//comando para a pág home puxar a pág de personagens ao clicar no botão "let's go"           
goToPersonagensPage() {
  this.navCtrl.push(PersonagensPage);
              }
  }

  


