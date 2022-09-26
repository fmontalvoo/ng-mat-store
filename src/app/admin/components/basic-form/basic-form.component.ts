import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameFlied = new FormControl('', Validators.required);
  emailFlied = new FormControl('', [Validators.required, Validators.email]);
  phoneFlied = new FormControl('');
  colorFlied = new FormControl('#40CFFF');
  dateFlied = new FormControl('');
  numberFlied = new FormControl(0);
  categoryFlied = new FormControl('');
  tagsFlied = new FormControl('');
  agreeFlied = new FormControl(false);
  genderFlied = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameFlied.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

}
