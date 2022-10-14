import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  submit(){

  }

  get name() {
    return this.form.get('name');
  }

  get image() {
    return this.form.get('image');
  }

}
