
export interface FlickrResponseInterface {
  status: string;
  photos: PhotosInterface;
}

export interface PhotosInterface {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: Array<SinglePhotoInterface>;
}

export interface SinglePhotoInterface {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_o: string;
  url_n: string;
  dateupload: string;
  ownername: string;
  datetaken: string;
}
