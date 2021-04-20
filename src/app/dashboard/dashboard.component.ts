import { MessageService } from 'src/message.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '.././developers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  full_name: String = '';
  constructor(
    private developerService: DevelopersService,
    private router: Router,
    private fb: FormBuilder,
    private messageservice: MessageService
  ) {}
  getName(): void {
    this.developerService.getName().subscribe(
      (data) => {
        //get name of logged in developer
        this.full_name = data.full_name.full_name;
        console.log(`Logged in as ${this.full_name}`);
      },
      (error) => {
        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.getName();
  }
}
