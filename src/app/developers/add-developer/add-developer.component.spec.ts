import { RouterTestingModule } from '@angular/router/testing';
import { DevelopersService } from './../../developers.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloperComponent } from './add-developer.component';

describe('AddDeveloperComponent', () => {
  let component: AddDeveloperComponent;
  let fixture: ComponentFixture<AddDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeveloperComponent ],
      imports:[ ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      providers:[DevelopersService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
});
