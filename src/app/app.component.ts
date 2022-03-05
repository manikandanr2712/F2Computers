import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'F2comp';
  @ViewChild('label') label: any;
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    message: new FormControl(''),
  })
  ngOnInit() {

  }
addClass() {
if(this.contactForm.controls['firstName'].value === null || this.contactForm.controls['firstName'].value === null) {
this.label.nativeElement.classList.remove('active');
}
else {
  this.label.nativeElement.classList.add('active');
}
if(this.contactForm.controls['lastName'].value === null || this.contactForm.controls['lastName'].value === null) {
  this.label.nativeElement.classList.remove('active');
  }
  else {
    this.label.nativeElement.classList.add('active');
  }
}
  ngAfterViewInit() {
    this.addClass();
    const section1 = document.querySelector('.section1');

    window.onscroll = () => {
      if (window.scrollY > 100) {
        section1?.classList.add('section1');
      } else {
        section1?.classList.remove('section1');
      }
    }
  }
}
