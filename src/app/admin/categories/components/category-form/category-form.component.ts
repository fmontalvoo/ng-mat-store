import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { finalize, map } from 'rxjs/operators';

import { CreateCategory } from 'src/app/core/models/category.model';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  progress = 0;
  form: FormGroup;
  showProgressBar = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cs: CategoriesService,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)], MyValidators.validateCategory(this.cs)],
      image: ['', Validators.required],
    })
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, image } = this.form.getRawValue();

    this.cs.createCategory(<CreateCategory>{ name, image })
      .subscribe(res => {
        console.info(res);
      });
  }

  uploadFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.item(0);

    if (!file) return;
    this.showProgressBar = true
    const ref = this.storage.ref(file.name);
    const task = this.storage.upload(file.name, file);
    task.percentageChanges()
      .pipe(
        map(Math.ceil),
        finalize(() => {
          const url$ = ref.getDownloadURL();
          url$.subscribe(url => {
            this.image.setValue(url);
          });
          this.showProgressBar = false;
        })
      )
      .subscribe(percent => this.progress = percent);
  }

  get name() {
    return this.form.get('name');
  }

  get image() {
    return this.form.get('image');
  }

}
