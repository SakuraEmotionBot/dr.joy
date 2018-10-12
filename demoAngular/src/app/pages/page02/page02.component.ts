import {Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Input} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {Page02Model} from '../../models/page02.model';
import flatpickr from 'flatpickr';
import {MyServiceService} from '../../components/service/my-service.service';

declare var $: any;

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
})
export class Page02Component implements OnInit, AfterViewInit {
  // pageTitle="シフト希望を募集";
  constructor(translate: TranslateService, private el: ElementRef, private myService: MyServiceService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  isShow1: boolean;
  isShow: boolean;
  @ViewChildren('form01') form01: QueryList<any>;
  submitted = false;

  page02Form: Page02Model;
  select01 = ['種別を選択', 'a', 'b'];
  select02 = ['終日', 'a', 'b'];
  select03 = ['種別を選択', 'a', 'b'];
  select04 = ['外勤先を選択', 'a', 'b'];
  select05 = ['終日', 'a', 'b'];
  select06 = ['終日', 'a', 'b'];
  // select01 = ['種別を選択', 'a', 'b'];
  // select01 = ['種別を選択', 'a', 'b'];
  text = `※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。<br>
    ※募集開始時にシフト希望を募集するお知らせがスタッフにメールと通知で送信されます。<br>
    ※締切３日前と、　締切当日の朝7:00に未提出のスタッフ宛にリマインドメールと通知が送信されます。<br>
    ※募集開始をしたあとも編集・再募集できます。`;

  private _initForm() {
    // get data
    this.page02Form = new Page02Model();

    // this.page03Form.createForm();
  }

  ngOnInit() {
    this._initForm();
  }

  addItem01() {
    this.page02Form.addItem01();
    // this.submitted = false;
  }

  addItem02() {
    this.page02Form.addItem02();

  }

  addItem03() {
    this.page02Form.addItem03();

  }

  addItem04() {
    this.page02Form.addItem04();

  }

  addItem05() {
    this.page02Form.addItem05();
  }

  removeItem01(i: number) {
    this.page02Form.formArray01.removeAt(i);
  }

  removeItem02(i: number) {
    this.page02Form.formArray02.removeAt(i);
  }

  removeItem03(i: number) {
    this.page02Form.formArray03.removeAt(i);
  }

  removeItem04(i: number) {
    this.page02Form.formArray04.removeAt(i);
  }

  removeItem05(i: number) {
    this.page02Form.formArray05.removeAt(i);
  }


  // change() {
  //   return this.sDate;
  // }

  ngAfterViewInit(): void {
    this.form01.changes.subscribe(value => {

      flatpickr('.date-picker', {
        dateFormat: 'Y/m/d'
      });
      console.log(value.changes.observers[0]);
      flatpickr('.date-picker', {
        dateFormat: 'Y/m/d'
      });
      flatpickr('.date-picker-day', {
        dateFormat: 'Y-m-d'
      });
      flatpickr('.date-picker-time', {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true
      });
    });
  }

  // get f01() {
  //   return this.page02Form.formValidate01;
  // }

  submitForm() {

    // put data
    // console.log(this.page02Form.formValue01);
    // console.log(this.page02Form.formValue02);
    // console.log(this.page02Form.formValue03);
    // console.log(this.page02Form.formValue04);
    // console.log(this.page02Form.formValue05);
    // Object.keys(this.page02Form.formValue01).map(item => {
    //   console.log(this.page02Form.formValue01[item].length);
    // });
    this.submitted = true;

    // console.log(this.page02Form.formValidate01);
    if (this.page02Form.formGroup01.invalid) {
      this.myService.showModal1('Error', 'X', 'はい');
      return;
    }
    this.myService.showModal2('go pro', '!', 'はい', 'いいえ').subscribe(action => {
      if (action === 'ok') {
        this.myService.showModal1('go pro thoi', '', 'はい', true);
        this.myService.cancelText = '';
      }
    });
    // this.Modal1 = new Modal1Model(true, 'V', '提出しました', 'OK');
  }

  check(i: number) {
    // const val = parseInt($event.target.value, 10);
    // const checkbox = $event.target as HTMLInputElement;
    // console.log(val);
    // if ($event.target.checked) {
    //   this.check1 = true;
    //   this.checkIndex = index;
    //   // this.el.nativeElement.querySelector('.input1').checked = true;
    //   // this.el.nativeElement.querySelector('.input2').checked = true;
    //   // this.el.nativeElement.querySelector('.input3').checked = true;
    // } else {
    //   this.check1 = false;
    // }
    if (this.page02Form.formArray04.controls[i].get('itemCheck01').value) {
      this.page02Form.formArray04.controls[i].get('itemCheck02').disable();
      this.page02Form.formArray04.controls[i].get('itemCheck03').disable();
      this.page02Form.formArray04.controls[i].get('itemCheck04').disable();
      console.log(this.page02Form.formArray04.controls[i].get('itemCheck01'));
    } else {
      this.page02Form.formArray04.controls[i].get('itemCheck02').enable();
      this.page02Form.formArray04.controls[i].get('itemCheck03').enable();
      this.page02Form.formArray04.controls[i].get('itemCheck04').enable();
      // this.page02Form.formArray04.controls[i].get('itemCheck02').value = false;
      console.log(this.page02Form.formArray04.controls[i].get('itemCheck01'));

    }
  }

}
