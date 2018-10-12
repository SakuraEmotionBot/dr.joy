import {FormControl, FormGroup} from '@angular/forms';


export interface Page01Interface {
  startDate: string;
  endDate: string;
  itemDate: string;
  itemTime: string;
  desc?: string;
  itemCheck1: boolean;
  itemCheck2: boolean;
  itemCheck3: boolean;
  itemCheck4: boolean;
  itemCheck5: boolean;
}

export class Page01Model implements Page01Interface {
  desc = '';
  endDate = '';
  // itemCheck = [];
  itemDate = '';
  itemTime = '';
  startDate = '';
  itemCheck1 = false;
  itemCheck2 = false;
  itemCheck3 = false;
  itemCheck4 = false;
  itemCheck5 = false;

  formGroup: FormGroup;

  constructor(value?: Page01Interface) {
    if (value) {
      Object.keys(value).map(item => {
        // if (item in this) {
        this[item] = value[item];
        // }
      });
    }
  }

  get formValue() {
    return this.formGroup.value;
  }

  createForm(value?: Page01Interface) {
    const checkValue = (name) => {
      if (value && (name in value)) {
        return value[name];
      }

      return '';
    };

    this.formGroup = new FormGroup({
      desc: new FormControl(checkValue('desc')),
      endDate: new FormControl(checkValue('endDate')),
      startDate: new FormControl(checkValue('startDate')),
      itemDate: new FormControl(checkValue('itemDate')),
      itemTime: new FormControl(checkValue('itemTime')),
      itemCheck1: new FormControl(checkValue('itemCheck1')),
      itemCheck2: new FormControl(checkValue('itemCheck2')),
      itemCheck3: new FormControl(checkValue('itemCheck3')),
      itemCheck4: new FormControl(checkValue('itemCheck4')),
      itemCheck5: new FormControl(checkValue('itemCheck5'))

    });
  }

}
