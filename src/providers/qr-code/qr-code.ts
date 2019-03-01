import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import qrcode from 'qrcode';
import JSQR from "jsqr";
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

    constructor(public http: HttpClient, private camera: Camera) {
        console.log('Hello QrCodeProvider Provider');
    }

    generate(text: string): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            qrcode.toDataURL(text, {errorCorrectionLevel: 'H'}, function (err, url) {
                if (err) {
                    reject(err);
                } else {
                    resolve(url);
                }
            })
        })
    }

    async read(): Promise<string> {
        const options: CameraOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.DATA_URL
        }

        const imageData = await this.camera.getPicture(options);

        let base64Image = 'data:image/jpeg;base64,' + imageData;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        return await new Promise<string>((resolve, reject) => {
            const picture = new Image();
            picture.src = base64Image;
            picture.onload = () => {
                try {
                    canvas.width = picture.width;
                    canvas.height = picture.height;
                    context.drawImage(picture, 0, 0);
                } catch (e) {
                    reject(e);
                }
                const img = context.getImageData(0, 0, canvas.width, canvas.height);
                const result = JSQR(img.data, img.width, img.height);
                if (!result) {
                    reject('cannot find QRCode');
                } else {
                    resolve(result.data);
                }

            };
            picture.onerror = () => {
                reject('Load failed');
            }
        });
    }
}
