import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
    }
  ],
  styles: [
  ]
})
export class StepperComponent implements ControlValueAccessor {

  currentValue = 0;
  isDisabled = false;

  onTouch = () => { };
  onChange = (_: any) => { };

  constructor() { }

  writeValue(value: number): void {
    this.currentValue = value ?? 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  add() {
    this.currentValue += 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  subtract() {
    this.currentValue -= 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

}
