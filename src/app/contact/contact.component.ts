import { Component, OnInit } from '@angular/core';
    
    import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  
     exform:FormGroup;
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
  // get name() {
  //    return this.exform.get('name');
  //  }
  //  get email() {
  //   return this.exform.get('email');
  //  }
  // get phone() {
  //    return this.exform.get('phone');
  //  }
  // get message() {
  //    return this.exform.get('message');
  // }
  


}

 

