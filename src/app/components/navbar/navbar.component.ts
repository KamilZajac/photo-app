import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  param: string;
  query = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.param = param.category;
    });
  }

  onSearchClick(category) {
    if (category.length > 0) {
      this.router.navigate(['photos'], {queryParams: {category: category}});
    }
  }


}
