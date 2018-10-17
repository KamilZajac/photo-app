import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoDetailsProvider} from '../../services/photo-details.provider';
import {DOCUMENT} from '@angular/common';
import {PhotosInterface, SinglePhotoInterface} from '../../services/inferfaces/photo.interfaces';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  private currentPage = 1;
  private term;
  private allPages: number;
  private loadingMore: boolean;
  loading: boolean;
  photos: Array<SinglePhotoInterface> = [];
  @ViewChild('photosWrapper') photosWrapper;
  @ViewChild('photoss') photoss;


  constructor(@Inject(DOCUMENT) private document: Document,
              private photoService: PhotoService,
              private router: Router,
              private route: ActivatedRoute,
              private photoDetailsProvider: PhotoDetailsProvider) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      if (param.category !== this.term || !this.term) {
        this.photos = [];
        this.term = param;
        this.loading = true;
      }
      this.loadImages();

    });
  }

  loadImages() {
    this.photoService.fetchImages(this.term, this.currentPage).pipe(take(1)).subscribe((images: PhotosInterface) => {
      this.allPages = Number(images.total);
      this.currentPage = images.page;
      this.photos = this.photos.concat(images.photo);
      this.loadingMore = false;
      this.loading = false;
    });
  }

  onPhotosScroll(e) {
    const scrollTop = e.target.scrollTop + e.target.offsetHeight;
    const elemScrollHeight = e.target.scrollHeight;
    const triggerHeight = 800;

    if (!this.loadingMore && scrollTop + triggerHeight >= elemScrollHeight && this.currentPage < this.allPages) {
      this.loadingMore = true;
      this.currentPage++;
      this.loadImages();
    }
  }

  goToPhoto(photo) {
    this.photoDetailsProvider.preparePhoto(photo);
    this.router.navigate(['photos', 'details', photo.id]);
  }

  searchByAuthor(author) {
    this.router.navigate(['photos'], {queryParams: {author: author}});
  }

}
