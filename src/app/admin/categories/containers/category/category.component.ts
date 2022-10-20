import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Category, CreateCategory } from '@core/models/category.model';

import { CategoriesService } from '@core/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(
    private cs: CategoriesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const categoryId = +params['id'];
        if (categoryId)
          this.getCategory(categoryId);
      });
  }

  createCategory(category: CreateCategory) {
    this.cs.createCategory(category)
      .subscribe(res => {
        console.info(res);
      });
  }

  private getCategory(id: number) {
    this.cs.getCategory(id)
      .subscribe(cat => {
        this.category = cat;
        console.log(this.category);
      });
  }

  updateCategory(category: CreateCategory) {
    this.cs.updateCategory(this.category.id, category)
      .subscribe(res => {
        console.info(res);
      });
  }

}
