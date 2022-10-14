import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static isPasswordValid(control: AbstractControl) {
    const value = control.value;
    const isNumber = (value: string) => !isNaN(parseInt(value, 10));
    const containsNumber = (value: string) => [...value].some(isNumber);

    if (!containsNumber(value))
      return { password_invalid: true };

    return null;
  }

}
