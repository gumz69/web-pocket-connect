import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator',
  standalone: true
})
export class ThousandSeparatorPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Convert the number to a string
    let stringValue = value.toString();

    // Split the string into integer and decimal parts (if any)
    const parts = stringValue.split('.');
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add dots as thousand separators to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Combine integer and decimal parts and return
    return integerPart + decimalPart;
  }

}
