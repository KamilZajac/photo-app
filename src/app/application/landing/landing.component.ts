import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  query = '';

  constructor(private router: Router) {
  }

  onCategoryChoose(category) {
    if (category.length > 0) {
      this.router.navigate(['photos'], {queryParams: {category: category}});
    }
  }
}
