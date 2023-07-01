import { Component } from '@angular/core';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-Project';

  social: any = {};

  loader: boolean = true;

  constructor(
    private dbService: DbService
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.loader = false;
      this.getSoialUrl();
    }, 1500);
  }
  getSoialUrl() {
    let unsub = this.dbService.socialSubject.subscribe((value) => {
      if(value !== null) {
        this.social = { ...value };
        this.dbService.getWindowRef().setTimeout(() => unsub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

}
