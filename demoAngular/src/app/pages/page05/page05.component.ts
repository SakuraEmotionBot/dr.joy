import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page05Model} from '../../models/page05.model';
import {PopoverModule} from 'ngx-popover';

@Component({
  selector: 'app-page05',
  templateUrl: './page05.component.html',
  styleUrls: ['./page05.component.scss']
})
export class Page05Component implements OnInit {
  // pageTitle="チーム設定";
  page05Form: Page05Model;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  private _initForm() {
    // get data
    this.page05Form = new Page05Model();

    // this.page03Form.createForm();
  }

  ngOnInit() {
    this._initForm();
  }

  addItem01(index: number) {
    this.page05Form.addItem01(index);
  }

  addItems() {
    this.page05Form.addItems();
  }

  removeItem01(index: number, itemIndex: number) {
    this.page05Form.removeItem(index, itemIndex);
  }

  removeItem(index: number) {
    this.page05Form.formArray.removeAt(index);
  }

  submitForm() {
    console.log(this.page05Form.formValue);
  }

}
