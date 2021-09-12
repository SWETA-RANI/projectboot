import { Component, OnInit } from '@angular/core';
// import { FormControlName, FormGroup } from '@angular/forms';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exform:FormGroup;
  collapse:string = "closed";
  show:boolean = false;
  isShown:boolean = false;
  constructor() { }

  ngOnInit() {


  

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });




  }
  get f(){
    return this.exform.controls;
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }


  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}
toggleCollapse() {
  
  this.collapse = this.collapse == "open" ? 'closed' : 'open';
}

  
  


}
