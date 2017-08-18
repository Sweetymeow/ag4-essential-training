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
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]),
      year: new FormControl('')
    });
  }

  onSubmit(mediaForm){
    console.log(mediaForm);
  }
}
