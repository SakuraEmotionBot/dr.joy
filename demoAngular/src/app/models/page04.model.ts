import {FormGroup, FormArray, FormControl} from '@angular/forms';

export interface Page04ItemsInterface {
  shortName: string;
  fullname: string;
}

export interface Page04ItemsInterface01 {
  item01: Page04ItemsInterface[];
  item02: Page04ItemsInterface[];
  item03: Page04ItemsInterface[];
}

export class Page04Model implements Page04ItemsInterface01 {
  item01 = [];
  item02 = [];
  item03 = [];
  formGroup01: FormGroup;
  formGroup02: FormGroup;
  formGroup03: FormGroup;

  constructor(value?: Page04ItemsInterface01) {
    if (value) {
      Object.keys(value).map(item => {
        this[item] = value[item];
      });
    }
    this._createForm();
  }

  private _createForm() {
    this.formGroup01 = new FormGroup({
      item01: new FormArray([])
    });
    this.formGroup02 = new FormGroup({
      item02: new FormArray([])
    });
    this.formGroup03 = new FormGroup({
      item03: new FormArray([])
    });

  }

  get formArray01() {
    return this.formGroup01.get('item01') as FormArray;
  }

  get formArray02() {
    return this.formGroup02.get('item02') as FormArray;
  }

  get formArray03() {
    return this.formGroup03.get('item03') as FormArray;
  }

  addItem01(value01?: Page04ItemsInterface) {
    const formArray01 = this.formGroup01.get('item01') as FormArray;
    formArray01.push(this._createFormGroup(value01));
  }

  addItem02(value02?: Page04ItemsInterface) {
    const formArray02 = this.formGroup02.get('item02') as FormArray;
    formArray02.push(this._createFormGroup(value02));
  }

  addItem03(value03?: Page04ItemsInterface) {
    const formArray03 = this.formGroup03.get('item03') as FormArray;
    formArray03.push(this._createFormGroup(value03));
  }

  private _createFormGroup(value: Page04ItemsInterface) {
    return new FormGroup({
      shortName: new FormControl(value ? value.shortName : ''),
      fullname: new FormControl(value ? value.fullname : '')
    });
  }
}
