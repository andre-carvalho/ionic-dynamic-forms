import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/*
  Generated class for the StoreMidiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreMidiaProvider {

  constructor( private storage: Storage, private datepipe: DatePipe, public http: HttpClient) {
    console.log('Hello StoreMidiaProvider Provider');
  }

  public insert(media: Media) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    media.timeref = new Date();
    media.send = false;
    return this.save(key, media);
  }

  public update(key: string, media: Media) {
    return this.save(key, media);
  }

  private save(key: string, media: Media) {
    return this.storage.set(key, media);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  /**
   * Example to use this method:
   * 
   * storageProvider.getAll()
   *   .then((result) => {
   *      this.medias = result;
   *   });
   * 
   * Note: The result type is one Array<StorageMedia>
   */
  public async getAll() {

    let medias: Array<StorageMedia> = [];

    try {
      await this.storage.forEach((value: Media, key: string) => {
        let storageMedia = new StorageMedia();
        storageMedia.key = key;
        storageMedia.media = value;
        medias.push(storageMedia);
      });
      return Promise.resolve(medias);
    }
    catch (error) {
      return Promise.reject(error);
    }
  }
}

/**
 * Media.type use the same types from Camera.MediaType
 */
export class Media {
  lat: number;
  lng: number;
  type: number;
  data: string;
  timeref: Date;
  send: boolean;
}

/**
 * key is used to identify one media into storage
 */
export class StorageMedia {
  key: string;
  media: Media;
}