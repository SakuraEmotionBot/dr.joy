import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() pageTitle = '';
  check = false;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('jp');
  }
  ngOnInit() {
    // console.log(this.inputTitle);
  }
  switchLanguage() {
    this.translate.use('vi');
    if (this.check === true) {
      this.translate.use('jp');
      this.check = false;
    } else {
      this.check = true;
    }
  }

}
