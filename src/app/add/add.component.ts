import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  addDetailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    mobile: new FormControl(''),
    landline: new FormControl(''),
    website: new FormControl(''),
    address: new FormControl('')
  });
  displayFormErrorMsg = false;

  ngOnInit(): void {
    
  }

}
