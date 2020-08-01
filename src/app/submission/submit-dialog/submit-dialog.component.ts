import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss']
})
export class SubmitDialogComponent implements OnInit {

  files: any[] = [];

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
    do: new FormControl('', [Validators.required]),
    pro: new FormControl('No'),
    links: new FormArray([new FormControl('', [Validators.required])]),
    files: new FormControl([]),
    filesLength: new FormControl('', [Validators.required, Validators.pattern('^(4|5|6)$')]),
    proName: new FormControl('')
  });

  get links(): FormArray {
    return this.profileForm.get('links') as FormArray;
  }

  addLinkField() {
    this.links.push(new FormControl('', Validators.required));
  }

  deleteLinkField(index: number) {
      if (this.links.length !== 1) {
        this.links.removeAt(index);
      }
  }

  country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
  "Antigua &amp; Barbuda","Argentina","Armenia","Aruba",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
  "Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
  "Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
  "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde",
  "Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
  "Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti",
  "Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia",
  "Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia",
  "French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
  "Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
  "Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man",
  "Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
  "Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


  proControl = this.profileForm.get('proName');

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.profileForm.get('pro').valueChanges.subscribe(value => {
      value === 'Yes' ? this.proControl.setValidators([Validators.required]) : this.proControl.setValidators(null);
      this.proControl.updateValueAndValidity();
    });
  }

  onFilesReady($event){
    this.files = $event;
    console.log($event);
    this.profileForm.controls['filesLength'].setValue($event.length);
    this.profileForm.controls['files'].setValue($event);
  }

  onSubmit() {

  }
}
