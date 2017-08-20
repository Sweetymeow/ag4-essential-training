import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})

export class MwMediaItemFormComponent {
  constructor() {  }

  mdForm;

  ngOnInit(){
    this.mdForm = new FormGroup({
      medium: new FormControl('Movies'),
      category: new FormControl(''),
      name: new FormControl('', [ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
      year: new FormControl('', [ Validators.required, this.yearValidator])
    });
  }

  yearValidator(control){
    if(control.value.trim().length === 0){
      // check if the value's empty return null - Valid
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2017;

    if(year >= minYear && year <= maxYear){
      return null;
    }else{ // message for error
      return { 'year': true };
    }
  }

  onSubmit(mediaForm){
    console.log(mediaForm);
  }
}
