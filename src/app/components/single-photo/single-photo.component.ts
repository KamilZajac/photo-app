import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SinglePhotoInterface} from '../../services/inferfaces/photo.interfaces';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent {
  @Input() photo: SinglePhotoInterface;
  @Output() authorClicked = new EventEmitter<string>();

  constructor() {
  }

  onAuthorClicked(author) {
    this.authorClicked.emit(author);
  }
}
