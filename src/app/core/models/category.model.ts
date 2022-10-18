// To parse this data:
//
//   import { Convert, Category } from "./file";
//
//   const category = Convert.toCategory(json);

export interface Category {
  id: number;
  name: string;
  image: string;
}

export type CreateCategory = Omit<Category, 'id'>;

export type UpdateCategory = Partial<CreateCategory>;

// Converts JSON strings to/from your types
export class Convert {
  public static toCategory(json: string): Category {
    return JSON.parse(json);
  }

  public static categoryToJson(value: Category): string {
    return JSON.stringify(value);
  }
}
