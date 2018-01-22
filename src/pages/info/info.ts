import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { FilmesPage } from '../filmes/filmes';
//requisição http
import { Http, Response } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  people; //criando a variável para receber o parametro
  
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public http: Http, //requisição http
                public modalCtrl: ModalController
                )
                { 
                  this.people=this.navParams.get("people"); //comando para "receber" o parametro 
  
                                }

    
    //cria a função para o click e passa os parametros de film para a função req
    openFilm(film){
      this.req(film);
    }

    //recebe os parametros de film e a partir daqui podemos criar o modal
    req(film){
      this.http.get(film)
        .map(res => res .json())
        .subscribe(data => {
            //O modal deve ser criado quando receber o valor da api
           //Criar pág do modal e importá-la (neste caso, FilmesPage)
          let modal = this.modalCtrl.create(FilmesPage, {"film": data});
          modal.present();  
          console.log(data);
         }) 
  }
}