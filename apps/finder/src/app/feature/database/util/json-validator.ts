import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
/*
Code from Answer to question: How to create a custom form validator to accept only valid JSON in Angular
Source: https://stackoverflow.com/questions/55748238/how-to-create-a-custom-form-validator-to-accept-only-valid-json-in-angular
*/
export function jsonValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error: ValidationErrors = { jsonInvalid: true };

    try {
      JSON.parse(control.value);
    } catch (e) {
      control.setErrors(error);
      return error;
    }

    control.setErrors(null);
    return null;
  };
}
