import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {PhotoService} from './photo.service';
import {take} from 'rxjs/operators';
import {SinglePhotoInterface} from './inferfaces/photo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhotoDetailsProvider {
  private currentPhoto = new BehaviorSubject(null);

  constructor(private photoService: PhotoService) {
  }

  preparePhoto(photo: SinglePhotoInterface) {
    this.photoService.fetchSinglePhotoDetails(photo.id, photo.secret).pipe(take(1)).subscribe((details) => {
      this.currentPhoto.next({...photo, ...details.photo});
    });
  }

  getCurrentPhoto() {
    return this.currentPhoto.asObservable();
  }
}
