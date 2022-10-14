import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameFlied = new FormControl('', Validators.required);
  // emailFlied = new FormControl('', [Validators.required, Validators.email]);
  // phoneFlied = new FormControl('');
  // colorFlied = new FormControl('#40CFFF');
  // dateFlied = new FormControl('');
  // numberFlied = new FormControl(0);
  // categoryFlied = new FormControl('');
  // tagsFlied = new FormControl('');
  // agreeFlied = new FormControl(false);
  // genderFlied = new FormControl('');

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges
      .subscribe(value => {
        console.info(value);
      });

    this.nameFlied.valueChanges
      .subscribe(value => {
        console.info(value);
      });
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      color: ['#40CFFF'],
      date: [''],
      number: [0],
      category: [''],
      tags: [''],
      agree: [false, Validators.requiredTrue],
      gender: [''],
    });
  }

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => control.markAsTouched());
      return;
    }

    const {
      name,
      email,
      phone,
      color,
      date,
      number,
      category,
      tags,
      agree,
      gender,
    } = this.form.getRawValue();

    console.log(name, email, phone, color, date, number, category, tags, agree, gender);
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get color() {
    return this.form.get('color');
  }

  get date() {
    return this.form.get('date');
  }

  get number() {
    return this.form.get('number');
  }

  get category() {
    return this.form.get('category');
  }

  get tags() {
    return this.form.get('tags');
  }

  get agree() {
    return this.form.get('agree');
  }

  get gender() {
    return this.form.get('gender');
  }
}
