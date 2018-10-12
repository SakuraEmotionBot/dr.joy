// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-readmore',
//   templateUrl: './readmore.component.html',
//   styleUrls: ['./readmore.component.scss']
// })
// export class ReadmoreComponent implements OnInit {
//
//   constructor() {
//   }
//
//   ngOnInit() {
//   }
//
// }

import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-readmore',
  // template: `
  //   <div [innerHTML]="currentText"></div>
  //   <span *ngIf="showToggleButton">
  //           <a (click)="toggleView()" class="readmore">{{isCollapsed ? 'もっと読む' : '閉じる'}}</a>
  //       </span>`,
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss'],
})

export class ReadmoreComponent implements OnChanges {

  @Input() text: string;
  @Input() maxLength: number;
  @Input() showToggleButton: boolean;

  currentText: string;

  public isCollapsed = true;

  constructor() {

  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {

    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      return;
    }

    if (this.isCollapsed === true) {
      this.currentText = this.text.substring(0, this.maxLength);
    } else if (this.isCollapsed === false) {
      this.currentText = this.text;
    }

  }

  ngOnChanges() {
    if (!this.validateSource(this.text)) {
      console.error('Source must be a string.');
    } else {
      this.determineView();
    }
  }

  validateSource(s) {
    if (typeof s !== 'string') {
      return false;
    } else {
      return true;
    }
  }
}

// @Component({
//   selector: 'app-readmore',
//   template: `
//     <div [class.collapsed]="isCollapsed" [style.height]="height">
//       <div #wrapper>
//         <ng-content></ng-content>
//       </div>
//     </div>
//     <div class="read-more">
//       <button
//         type="button"
//         class="btn btn-light" (click)="onIsCollapsed()">{{isCollapsed ? 'More' : 'Less'}}
//       </button>
//     </div>
//   `,
//   styles: [`
//     :host {
//       display: block;
//     }
//
//     .collapsed {
//       overflow: hidden;
//       padding-bottom: 1rem;
//     }
//
//     .read-more {
//       display: flex;
//       justify-content: flex-end;
//     }
//   `]
// })
// export class ReadmoreComponent implements AfterViewInit {
//   @ViewChild('wrapper') wrapper: ElementRef;
//   isCollapsed = true;
//   private contentHeight: string;
//   private _height: string;
//
//   constructor(@Attribute('height') public height: string = '') {
//     this._height = height;
//   }
//
//   ngAfterViewInit() {
//     this.contentHeight = this.wrapper.nativeElement.clientHeight + 'px';
//   }
//
//   onIsCollapsed() {
//     this.isCollapsed = !this.isCollapsed;
//     this._height = this.isCollapsed ? this.height : this.contentHeight;
//   }
// }
