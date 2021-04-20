import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../../developers.service';
import { developer } from '../../developers';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-developers',
  templateUrl: './get-developers.component.html',
  styleUrls: ['./get-developers.component.css'],
})
export class GetDevelopersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private developerService: DevelopersService,
    private http: HttpClient
  ) {}

  developers: any = [];

  p: number = 1;
  totalItems: any;
  //  itemsPerPage:5
  limit: number = 5;

  getDevelopers(p1): void {
    let offset = (p1 - 1) * this.limit;
    this.developerService.getDevelopers(offset).subscribe((info) => {
      console.log(info);
      this.developers = info;
    });
    this.totalItems = this.developers.no;
  }

  getdev(p1) {
    this.router.navigate(['browse/' + p1]);
    this.getDevelopers(p1);
    this.p = p1;
  }

  ngOnInit(): void {
    this.p = parseInt(this.route.snapshot.paramMap.get('no'));
    if (isNaN(this.p)) {
      this.getDevelopers(1);
    } else {
      this.p = parseInt(this.route.snapshot.paramMap.get('no'));
      this.getDevelopers(this.p);
    }
  }
}
