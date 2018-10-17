import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoDetailsProvider} from '../../services/photo-details.provider';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  photo;
  loading: boolean;
  sub: Subscription;
  lastPhotoId: string;

  constructor(private photoDetailsProvider: PhotoDetailsProvider,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe(params => {
      if (params.id !== this.lastPhotoId) {
        this.loading = true;
        this.lastPhotoId = params.id;
        this.photo = null;
      }
    });
    this.sub = this.photoDetailsProvider.getCurrentPhoto().subscribe((data) => {
      if (data && data.id === this.lastPhotoId) {
        this.photo = data;
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  searchByAuthor(author) {
    this.router.navigate(['photos'], {queryParams: {author: author}});
  }
}
