"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let MwMediaItemFormComponent = class MwMediaItemFormComponent {
    // OPTION 1
    // constructor( @Inject(FormBuilder) fb : FormBuilder ) {
    //   this.mdForm = fb.group({
    //     medium: fb.control('Movies'),
    //     category: fb.control(''),
    //     name: fb.control('', [ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
    //     year: fb.control('', [ Validators.required, this.yearValidator])
    //   });
    // } // OPTION 1
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    } // OPTION 2
    // formBuilder: FormBuilder; // OPTION 3
    // constructor(formBuilder : FormBuilder) { this.formBuilder = formBuilder; } // OPTION 3
    ngOnInit() {
        this.mdForm = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'),
            category: this.formBuilder.control(''),
            name: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.pattern('[\\w\\-\\s\\/]+')]),
            year: this.formBuilder.control('', [forms_1.Validators.required, this.yearValidator])
        });
    } // OPTION 2 / 3
    yearValidator(control) {
        if (control.value.trim().length === 0) {
            // check if the value's empty return null - Valid
            return null;
        }
        let year = parseInt(control.value);
        let minYear = 1900;
        let maxYear = 2017;
        if (year >= minYear && year <= maxYear) {
            return null;
        }
        else {
            // return { 'year': true };
            return { 'year': {
                    min: minYear,
                    max: maxYear
                } };
        }
    }
    onSubmit(mediaForm) {
        console.log(mediaForm);
    }
};
MwMediaItemFormComponent = __decorate([
    core_1.Component({
        selector: 'mw-media-item-form',
        templateUrl: 'app/media-item-form.component.html',
        styleUrls: ['app/media-item-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], MwMediaItemFormComponent);
exports.MwMediaItemFormComponent = MwMediaItemFormComponent;
//# sourceMappingURL=media-item-form.component.js.map