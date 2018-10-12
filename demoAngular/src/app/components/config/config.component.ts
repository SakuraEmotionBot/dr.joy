import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {tryCatch} from 'rxjs/internal-compatibility';
import {catchError} from 'rxjs/operators';

export interface Config {
  dataUrl: string;
  textfile: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  config: Config;
  headers: any[];

  constructor(private configService: ConfigService) {

  }

  ngOnInit() {
    this.configService.getConfig().subscribe(value => {
      console.log(value);
    });
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        ...data
      });
  }

  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //   // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //
  //       // access the body directly, which is typed as `Config`.
  //       this.config = {...resp.body};
  //     });
  // }

  // }
  // showConfig() {
  //   this.configService.getConfig()
  //     .subscribe((data: Config));
  // }
  //   showConfigResponse() {
  //   this.configService.getConfigResponse()
  //   // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //
  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ... resp.body };
  //     });
  // }
}

