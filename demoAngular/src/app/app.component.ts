import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MyServiceService} from './components/service/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular';

  createTitle() {
    return 'the title from APP';
  }
}
