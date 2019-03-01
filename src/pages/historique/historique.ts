import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HistoriqueItem} from "../../models/HistoriqueItem";

@Component({
    selector: 'page-list',
    templateUrl: 'historique.html'
})
export class HistoriquePage {

    private items: HistoriqueItem[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.items = JSON.parse(window.localStorage.getItem('historique'));
        console.log('items : ', this.items);
    }
}
