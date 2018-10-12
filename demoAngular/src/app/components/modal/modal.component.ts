import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

// import {EventEmitter} from 'selenium-webdriver';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() iconName: string;
  @Input() textContent: string;
  @Input() isShow: boolean;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() submitModal1 = new EventEmitter();

  // @ViewChild('btn-close') myDiv: ElementRef;

  ngOnInit() {
  }

  constructor(public Myservice: MyServiceService) {
  }

  submitModal(action) {
    // console.log(this.myDiv);
    // this.element = document.getElementById('btn-close') as HTMLElement;
    // this.element.click();
    // Modal1 = new Modal1Model(true, 'V', '提出しました', 'OK');
    // this.submitModal1.emit(Modal1);
    this.Myservice.Modal.next(action);
    console.log(action);
  }
}
