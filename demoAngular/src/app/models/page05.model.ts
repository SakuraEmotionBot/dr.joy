import {FormGroup, FormControl, FormArray} from '@angular/forms';


export interface Page05ItemsInterface {
  shortName: string;
  fullName: string;
  rightItems: Page05ItemInterface01[];
}

export interface Page05ItemInterface01 {
  rightItems01: any;
}

export class Page05Model implements Page05ItemsInterface {
  shortName = '';
  fullName = '';
  rightItems = [];
  formGroup: FormGroup;

  constructor(value?: Page05ItemsInterface) {
    if (value) {
      Object.keys(value).map(item => {
        this[item] = value[item];
      });
    }
    this._createForm();
  }

  private _createForm() {
    this.formGroup = new FormGroup({
      items: new FormArray([])
    });
  }


  get formArray() {
    return this.formGroup.get('items') as FormArray;
  }

  // get rightItems01() {
  //   return this.formGroup01.get('item01') as FormArray;
  // }

  addItems(value ?: Page05ItemsInterface) {
    const formArray = this.formGroup.get('items') as FormArray;
    formArray.push(this._createFormGroup(value));
  }

  addItem01(groupIndex: number, value01 ?: Page05ItemInterface01) {
    const formArray = this.formGroup.get('items') as FormArray;
    // console.log(formArray);
    const rightItems = formArray.controls[groupIndex] as FormGroup;
    // console.log(rightItems);
    const item = rightItems.get('rightItems') as FormArray;

    // const item2 = (<FormGroup>(<FormArray>this.formGroup.get('items')).controls[groupIndex]).get('rightItems') as FormArray;
    item.push(this._createFormGroup01(value01));
  }

  removeItem(groupIndex: number, itemIndex: number) {
    const formArray = this.formGroup.get('items') as FormArray;
    // console.log(formArray);
    const rightItems = formArray.controls[groupIndex] as FormGroup;
    // console.log(rightItems);
    const item = rightItems.get('rightItems') as FormArray;

    // const item2 = (<FormGroup>(<FormArray>this.formGroup.get('items')).controls[groupIndex]).get('rightItems') as FormArray;
    item.removeAt(itemIndex);
  }

  private _createFormGroup(value?: Page05ItemsInterface) {
    return new FormGroup({
      shortName: new FormControl(value ? value.shortName : ''),
      fullName: new FormControl(value ? value.fullName : ''),
      rightItems: new FormArray([])
    });
  }

  private _createFormGroup01(value01?: Page05ItemInterface01) {
    return new FormGroup({
      rightItems01: new FormControl(value01 ? value01.rightItems01 : '')
    });
  }

  get formValue() {
    return this.formGroup.value;
  }
}
