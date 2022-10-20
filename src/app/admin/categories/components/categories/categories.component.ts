import { Component, OnInit } from '@angular/core';
import { Category } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  displayedColumns: string[] = ['id', 'name', 'image', 'actions'];


  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.cs.getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }
}
