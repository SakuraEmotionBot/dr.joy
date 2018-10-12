import {FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';

export interface Page03ItemsInterface {
  skill: string;
  desc: string;
}

export interface Page03Interface {
  items: Page03ItemsInterface[];
}

export class Page03Model implements Page03Interface {
  formGroup: FormGroup;
  items = [];

  constructor(value?: Page03Interface) {
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

  addItems(value ?: Page03ItemsInterface) {
    const formArray = this.formGroup.get('items') as FormArray;
    formArray.push(this._createFormGroup(value));
  }

  get formArray() {
    return this.formGroup.get('items') as FormArray;
  }

  get formValue() {
    return this.formGroup.value;
  }

  // addForm(formGroup) {
  //   this.formGroup = this.formBuilder.group({
  //       items: this.formBuilder.array([this.createItem()])
  //     }
  //   );
  // }

  private _createFormGroup(value?: Page03ItemsInterface) {
    return new FormGroup({
      skill: new FormControl(value ? value.skill : ''),
      desc: new FormControl(value ? value.desc : '')
    });
  }

}

