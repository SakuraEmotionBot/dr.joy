import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page04Model} from '../../models/page04.model';

@Component({
  selector: 'app-page04',
  templateUrl: './page04.component.html',
  styleUrls: ['./page04.component.scss']
})
export class Page04Component implements OnInit {
  // pageTitle="スキル設定";
  Page04Model: Page04Model;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  private _initForm() {
    this.Page04Model = new Page04Model();
  }

  ngOnInit() {
    this._initForm();
  }

  addItem01() {
    this.Page04Model.addItem01();
  }

  addItem02() {
    this.Page04Model.addItem02();
  }

  addItem03() {
    this.Page04Model.addItem03();
  }

  removeItem01(index: number) {
    this.Page04Model.formArray01.removeAt(index);
  }

  removeItem02(index: number) {
    this.Page04Model.formArray02.removeAt(index);
  }

  removeItem03(index: number) {
    this.Page04Model.formArray03.removeAt(index);
  }
}
