import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {GenerateQrcPage} from '../pages/generate_qrc/generate_qrc';
import {HistoriquePage} from '../pages/historique/historique';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QrCodeProvider} from '../providers/qr-code/qr-code';
import {HttpClientModule} from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ScanQrcPage} from "../pages/scan-qrc/scan-qrc";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';

@NgModule({
    declarations: [
        MyApp,
        GenerateQrcPage,
        HistoriquePage,
        ScanQrcPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        GenerateQrcPage,
        HistoriquePage,
        ScanQrcPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        QrCodeProvider,
        SocialSharing,
        BarcodeScanner,
        Camera
    ]
})
export class AppModule {
}
