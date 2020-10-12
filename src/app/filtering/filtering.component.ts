import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  @Input() data: any;
  @Output() dataFiltered = new EventEmitter<any>();
  @ViewChild('searchInput', {static: false})

  searchInput: ElementRef;
  originalData: any;
  currentSortOrder = 'asc';
  currentSortOrderKey = 'valueDate';

  constructor() {
  }

  ngOnInit(): void {
    if (this.originalData === undefined) {
      this.originalData = this.data;
    }
    this.sortBy(this.currentSortOrderKey);
  }

  clearSearch(): void {
    this.searchInput.nativeElement.value = '';
    this.dataFiltered.emit(this.originalData);
  }

  search(event: any): void {
    const searchKey = event.target.value;
    this.data = this.originalData;

    this.data = this.data.filter((value: any) => {
      let newValue: any;
      if (Number(searchKey)) {
        if (parseInt(value.transaction.amountCurrency.amount, 10) === parseInt(searchKey, 10)) {
          newValue = value;
        }
        if (parseInt(value.categoryCode, 10) === parseInt(searchKey, 10)) {
          newValue = value;
        }

      } else {

        if (value.transaction.creditDebitIndicator !== undefined &&
          value.transaction.creditDebitIndicator.toLowerCase() === searchKey.toLowerCase()) {
          newValue = value;
        }
        if (value.transaction.amountCurrency.currencyCod !== undefined &&
          value.transaction.amountCurrency.currencyCod.toLowerCase() === searchKey.toLowerCase()) {
          newValue = value;
        }
        if (value.transaction.type !== undefined && value.transaction.type.toLowerCase() === searchKey.toLowerCase()) {
          newValue = value;
        }
        if (value.merchant.name !== undefined && value.merchant.name.toLowerCase().includes(searchKey.toLowerCase())) {
          newValue = value;
        }

      }

      if (searchKey.length > 0) {
        return newValue;
      }
      return this.originalData;
    });
    this.dataFiltered.emit(this.data);
  }

  sortBy(key: string): void {
    if (this.currentSortOrderKey.toLowerCase() === key.toLowerCase() && this.currentSortOrder === 'desc') {
      this.currentSortOrder = 'asc';
    } else if (this.currentSortOrderKey.toLowerCase() === key.toLowerCase() && this.currentSortOrder === 'asc') {
      this.currentSortOrder = 'desc';
    }
    this.currentSortOrderKey = key;
    this.sorting(this.currentSortOrderKey, this.currentSortOrder);
  }

  private sorting(key: string, order = 'asc'): void {
    this.dataFiltered.emit(this.data.sort(this.compareValues(key, order)));
  }

  /**
   * To make compare values for sorting.
   * @param key string
   * @param order string 'asc' or 'desc'
   */
  private compareValues(key: string, order = 'asc'): any {
    return (a: any, b: any) => {
      let elementsCompare = { varA: a, varB: b };
      elementsCompare = this.getPropertiesValue(elementsCompare, key);
      if (elementsCompare.varA === null || elementsCompare.varB === null) {
        // property doesn't exist on either object
        return 0;
      }

      let comparison = 0;
      if (elementsCompare.varA > elementsCompare.varB) {
        comparison = 1;
      }
      if (elementsCompare.varA < elementsCompare.varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  private getPropertiesValue(elementsCompare: any, key: string): any {
    let values = {};
    switch (key) {
      case 'valueDate':
        values = {
          varA: new Date(elementsCompare.varA.dates.valueDate),
          varB: new Date(elementsCompare.varB.dates.valueDate)
        };
        return values;
      case 'amount':
        values = {
          varA: parseFloat(elementsCompare.varA.transaction.amountCurrency.amount),
          varB: parseFloat(elementsCompare.varB.transaction.amountCurrency.amount)
        };
        return values;
      case 'name':
        values = {
          varA: elementsCompare.varA.merchant.name.toUpperCase(),
          varB: elementsCompare.varB.merchant.name.toUpperCase()
        };
        return values;
      default:
        return null;
    }
  }
}
