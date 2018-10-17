import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'photoPipe'
})
export class PhotoPipe implements PipeTransform {
  public transform(value) {
    return value.filter(photo => photo.url_n);
  }
}
