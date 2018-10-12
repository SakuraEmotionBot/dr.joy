import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page01Model} from '../../models/page01.model';
import flatpickr from 'flatpickr';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {MyServiceService} from '../../components/service/my-service.service';
import {e, v} from '@angular/core/src/render3';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss']
})
export class Page01Component implements OnInit, AfterViewInit {
  // pageTitle = 'シフト希望を募集';
  page01Form: Page01Model;
  timePicker: Date = null;
  itemValue = '';
  id: number;
  cityName: string;
  image: string;
  items: Observable<any[]>;
  valueTextArea: string;
  lengthTextArea: number;
  newEn: string;
  newVn: string;
  time: string;
  temp: string;
  array = [
    {id: 1, name: 'abc', age: 'cde'},
    {id: 2, name: 'abc1', age: 'cde1'}
  ];
  array1 = [{
    'id': 3,
    'author': 'Lisa',
    'description': 'A wonderful view of nature',
    'img': 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
    'title': 'A natural view'
  },
    {
      'id': 4,
      'author': 'Andy',
      'description': 'Seaside sunset',
      'img': 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      'title': 'Landscape view'
    }];
  list = [];
  click = false;
  isLoading = false;
  weather: boolean;

  constructor(translate: TranslateService, public db: AngularFireDatabase, private myService: MyServiceService) {
    translate.setDefaultLang('jp');
    // translate.use('vi');
    this.items = db.list('items').valueChanges();
    this.myService.getData('https://api.datamuse.com/words?ml=hello').subscribe(value => {
      this.list = value.json();
      console.log(this.list);
      console.log(value);
    }, error => {
      console.log(error);
    });
    // this.myService.getData('http://date.jsontest.com/');
    // this.myService.postData('http://localhost:3000/pictures', this.array1).subscribe(value => {
    //   this.list = value.json();
    //   console.log(this.list);
    //   console.log(value);
    // });
    //     this.myService.deleteData('http://localhost:3000/pictures/' + i).subscribe(value => {
    //       this.list = value.json();
    //       console.log(this.list);
    //       console.log(value);
    //     });
  }

  private _initForm() {
    // get data
    this.page01Form = new Page01Model();

    this.page01Form.createForm();
  }

  ngOnInit() {
    this._initForm();
    // this.myService.getIp(1)
    //   .then(img => this.image = img)
    //   .catch(err => console.log(err));
  }

  submitForm() {

    // put data
    console.log(this.page01Form.formValue);
    this.db.list('/items').push({content: this.page01Form.formValue});
    this.itemValue = '';
    this.myService.postData('http://localhost:3000/pictures', this.array1).subscribe(value => {
      this.list = value.json();
      console.log(this.list);
      console.log(value);
    });
  }

  ngAfterViewInit(): void {
    flatpickr('.date-picker', {
      dateFormat: 'Y-m'
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
  }

  showValue($event) {
    this.valueTextArea = $event.target.value;
    this.lengthTextArea = $event.target.value.length;
    console.log($event.target);
  }

  add() {
    this.click = !this.click;
    this.array.unshift({id: this.array.length + 1, name: this.newEn, age: this.newVn});
    this.newVn = '';
    this.newEn = '';
  }

  remove(index: number) {
    this.array.splice(index, 1);
  }

  getWeather() {
    this.isLoading = true;
    this.myService.getWeather(this.cityName)
      .then(temp => {
        this.temp = temp;
        this.isLoading = false;
      })
      .catch(err => {
        this.temp = 'go pro thoi giao su ' + err;
        this.isLoading = false;
      });
    this.myService.getIp(1)
      .then(img => this.image = img)
      .catch(err => console.log(err));
    this.weather = true;
    console.log(this.cityName);
    console.log(this.temp);
  }

  getMessage() {
    if (this.isLoading) {
      return 'loading...';
    }
    return this.temp;
  }
}
