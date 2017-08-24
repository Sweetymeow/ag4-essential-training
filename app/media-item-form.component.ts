import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { media } from './data/media';
import { MediaItemService } from './service/media-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})

export class MwMediaItemFormComponent {
  mdForm: FormGroup;

  // OPTION 1
  // constructor( @Inject(FormBuilder) fb : FormBuilder ) {
  //   this.mdForm = fb.group({
  //     medium: fb.control('Movies'),
  //     category: fb.control(''),
  //     name: fb.control('', [ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
  //     year: fb.control('', [ Validators.required, this.yearValidator])
  //   });
  // } // OPTION 1
  constructor( private formBuilder : FormBuilder,
    private mediaItemService : MediaItemService,
    @Inject(lookupListToken) public lookupLists:any) {  } // OPTION 2
  // formBuilder: FormBuilder; // OPTION 3
  // constructor(formBuilder : FormBuilder) { this.formBuilder = formBuilder; } // OPTION 3

  ngOnInit(){
    this.mdForm = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      category: this.formBuilder.control(''),
      name: this.formBuilder.control('', [ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
      year: this.formBuilder.control('', [ Validators.required, this.yearValidator])
    });
  } // OPTION 2 / 3

  yearValidator(control:any){
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
      // return { 'year': true };
      return { 'year': {
        min: minYear,
        max: maxYear
      } };
    }
  }

  onSubmit(mediaItem : media){ //mediaForm : FormGroup
    this.mediaItemService.add(mediaItem);
  }
}
