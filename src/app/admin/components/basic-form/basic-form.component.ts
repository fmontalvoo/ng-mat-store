import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameFlied = new FormControl('');
  emailFlied = new FormControl('');
  phoneFlied = new FormControl('');
  colorFlied = new FormControl('#fff');
  dateFlied = new FormControl('');
  numberFlied = new FormControl(0);

  constructor() { }

  ngOnInit(): void {
    this.nameFlied.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

}
