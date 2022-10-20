import { Category } from "./category.model";

export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: Category;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProducto(json: string): Product {
    return JSON.parse(json);
  }

  public static productoToJson(value: Product): string {
    return JSON.stringify(value);
  }
}
