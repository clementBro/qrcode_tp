import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import {SocialSharing} from "@ionic-native/social-sharing";
import {HistoriqueItem} from "../../models/HistoriqueItem";

@Component({
    selector: 'page-home',
    templateUrl: 'generate_qrc.html'
})
export class GenerateQrcPage {

    private data: string;
    private qrCode: string;
    private qrCodeData: string;

    constructor(public navCtrl: NavController, private qrCodeProvider: QrCodeProvider, private socialSharing: SocialSharing) {

    }

    generateQrCodeFromData() {
       this.qrCodeProvider.generate(this.data).then((data) => {
            this.qrCode = data;
            this.qrCodeData = this.data;
            this.add(new HistoriqueItem(this.qrCodeData));
        });

    }

    share(): void {
        this.socialSharing.shareWithOptions({
            message: 'Hey ! scan this qrCode',
            files: [this.qrCode]
        });
    }

    add(item : HistoriqueItem){

        let data: HistoriqueItem[];
        if(window.localStorage.getItem('historique')) {
            data = JSON.parse(window.localStorage.getItem('historique'));
        }else{
            data = new Array();
        }

        data.push(item);
        window.localStorage.setItem('historique', JSON.stringify(data));

    }
}
