import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category, CreateCategory, UpdateCategory } from '../models/category.model';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string = `${environment.url_api}/categories`;

  constructor(private http: HttpClient) { }

  createCategory(category: CreateCategory) {
    return this.http.post<Category>(this.url, category);
  }

  getCategory(id: number) {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  updateCategory(id: number, category: UpdateCategory) {
    return this.http.put<Category>(`${this.url}/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.url}`);
  }

  checkCategory(name: string) {
    return this.getAllCategories()
      .pipe(
        map(categories => {
          const found = categories.find(cat => cat.name.toLowerCase() === name.toLowerCase())
          return !Boolean(found);
        })
      )

  }

}
