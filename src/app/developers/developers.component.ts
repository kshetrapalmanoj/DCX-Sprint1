import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  }

}
