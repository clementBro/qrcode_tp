import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

/**
 * Generated class for the ScanQrcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-qrc',
  templateUrl: 'scan-qrc.html',
})
export class ScanQrcPage {

    private qrCodeData: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner,
                private qrCodeProvider: QrCodeProvider) { }

    scanWithCamera(){
        this.barcodeScanner.scan().then(barcodeData => {
            this.qrCodeData = barcodeData.text;
            alert(barcodeData.text);
        }).catch(err => {
            alert('scan error : ' + err);
        });
    }

    importFile(){
        this.qrCodeProvider.read().then((data) => {
            this.qrCodeData = data;
            alert('data :' + data);
        }).catch((err) =>{
            alert('import error : ' + err);
        });
    }
}
