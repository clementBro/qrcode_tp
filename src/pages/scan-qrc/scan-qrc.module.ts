import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanQrcPage } from './scan-qrc';

@NgModule({
  declarations: [
    ScanQrcPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanQrcPage),
  ],
})
export class ScanQrcPageModule {}
