import { MessageService } from './../../message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email:['',Validators.required],
      upload:['', Validators.required]
   });
 }


      ngOnInit(): void {
      }
   }
