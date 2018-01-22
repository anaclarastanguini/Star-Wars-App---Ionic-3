import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  film; //variável global 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController
            ) {
    this.film = this.navParams.get("film"); //dar a função para a variável global
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesPage');
  }

  backToInfoPage(){
    this.viewCtrl.dismiss()
  }
}
