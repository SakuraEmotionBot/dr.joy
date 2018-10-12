import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page03Model} from '../../models/page03.model';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.scss']
})
export class Page03Component implements OnInit {
  // pageTitle="スキル設定";
  page03Form: Page03Model;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  private _initForm() {
    // get data
    this.page03Form = new Page03Model();

    // this.page03Form.createForm();
  }

  ngOnInit() {
    this._initForm();
  }

  addItem() {
    this.page03Form.addItems();
  }

  removeItem(index: number) {
    this.page03Form.formArray.removeAt(index);
  }

  submitForm() {

    // put data
    console.log(this.page03Form.formValue);
  }


}
