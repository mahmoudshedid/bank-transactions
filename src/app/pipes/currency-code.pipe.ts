import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCode'
})
export class CurrencyCodePipe implements PipeTransform {

  transform(value: string): string {
    const symbol = value.toLowerCase();
    switch (symbol) {
      case 'eur':
        return '€';
        break;

      case 'dollar':
        return '$';
        break;

      default:
        return '€';
    }
  }

}
