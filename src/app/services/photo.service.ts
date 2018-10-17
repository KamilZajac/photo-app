import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FlickrResponseInterface, PhotosInterface} from './inferfaces/photo.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiKey = '4caf290ca6031024f4b786b9363d3ac2';

  constructor(private http: HttpClient) {
  }

  fetchImages(term, page): Observable<PhotosInterface> {
    let searchBy;

    if (term.author) {
      searchBy = `user_id=${term.author}`;
    }
    if (term.category) {
      searchBy = `text=${term.category}`;
    }
    const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&${searchBy}&page=${page}&
      format=json&nojsoncallback=1&extras=url_n , url_o,date_upload, owner_name, date_taken `;
    return this.http.get<FlickrResponseInterface>(URL).pipe(map(res => res.photos));
  }


  fetchSinglePhotoDetails(id, secret): Observable<any> {
    const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&
    api_key=${this.apiKey}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1&extras=url_n , url_o`;
    return this.http.get(URL);
  }

}
