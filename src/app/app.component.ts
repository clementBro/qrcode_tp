import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {GenerateQrcPage} from '../pages/generate_qrc/generate_qrc';
import {HistoriquePage} from '../pages/historique/historique';
import {ScanQrcPage} from "../pages/scan-qrc/scan-qrc";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = GenerateQrcPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.pages = [
            {title: 'Generate QRcode', component: GenerateQrcPage},
            {title: 'Historique', component: HistoriquePage},
            {title: 'Scan QRcode', component: ScanQrcPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
