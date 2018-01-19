import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

//requisição http
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { InfoPage } from '../info/info';
//Loading
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personagens',
  templateUrl: 'personagens.html',
})
export class PersonagensPage {

  //requisição http
private url: string = 'https://swapi.co/api/people/';
public people: Array <{}>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,                            
              public http: Http, //requisição http
             ) 

  
                {
                //Criar carregamento
                let loader = this.loadingCtrl.create({
                  content: "Carregando...",
                });
                loader.present();

                //Requisição HTTP
                 this.http.get(this.url)
                          .map(res => res .json())
                          .subscribe(data => {
                            //Explodir carregamento
                            loader.dismiss();

                            this.people = data.results;
                            console.log(data.results)
                          }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonagensPage');
  }

  // ao clicar no personagem vai para a página de infos
  getPeopleInfo(p) {
    this.navCtrl.push(InfoPage, {"people": p});
  }
  }
