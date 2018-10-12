import {Injectable, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject, Observable, of} from 'rxjs';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MyServiceService implements OnDestroy {
  isShowModal: boolean;
  iconName: string;
  message: string;
  okText: string;
  cancelText: string;
  warning: boolean;
  success: boolean;
  Modal = new BehaviorSubject('');

  constructor(private http: Http) {
    this.Modal.subscribe(action => {
      if (action === 'hide' || action === 'cancel') {
        $('#myModal').modal('hide');
        setTimeout(() => {
          this.isShowModal = false;
        });
      }
    });
  }

  showModal1(message: string, iconName?: string, okText?: string, success?: boolean) {
    this.isShowModal = true;
    this.message = message;
    this.iconName = iconName;
    this.okText = okText;
    this.success = success;
    setTimeout(() => {
      $('#myModal').modal('show');
    });
    return this.Modal;
  }

  showModal2(message: string, iconName?: string, okText?: string, cancelText?: string) {
    this.isShowModal = true;
    this.message = message;
    this.iconName = iconName;
    this.okText = okText;
    this.cancelText = cancelText;
    setTimeout(() => {
      $('#myModal').modal('show');
    });
    return this.Modal;
  }

  gopro() {
    console.log('gogogo');
  }

  // getIp(cityName: string) {
  //   // return this.http.get('http://date.jsontest.com/')
  //   //   .toPromise()
  //   //   .then(res => res.json())
  //   //   .then(resJson => resJson.date);
  //   const url = 'http://api.openweathermap.org/data/2.5/weather?&appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(res => res.json())
  //     .then(resJson => console.log(resJson));
  // }
  getIp(index: number) {
    // return this.http.get('http://date.jsontest.com/')
    //   .toPromise()
    //   .then(res => res.json())
    //   .then(resJson => resJson.date);
    // const url = 'http://api.openweathermap.org/data/2.5/weather?&appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(res => res.json())
    //   .then(resJson => console.log(resJson));
    return this.http.get('http://localhost:3000/pictures')
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson[index].img);
  }

  getWeather(cityName: string) {
    // return this.http.get('http://date.jsontest.com/')
    //   .toPromise()
    //   .then(res => res.json())
    //   .then(resJson => resJson.date);
    const url = 'http://api.openweathermap.org/data/2.5/weather?&appid=9898cfef0e563fbc1dbdd98ce04841de&units=metric&q=' + cityName;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson.main.temp);
  }

  ngOnDestroy(): void {
    this.Modal.unsubscribe();
  }

  getData(url: string) {
    return this.http.get(url);
  }

  postData(url: string, data: any) {
    return this.http.post(url, data);
  }

  deleteData(url: string) {
    return this.http.delete(url);
  }
}
