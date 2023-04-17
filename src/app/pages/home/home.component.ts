import { Component } from '@angular/core';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
  categoryList: any[] = []

  constructor(public dbService: DbService,)
    {}

  getDataFromdbService(){

    let categorySub = this.dbService.homeVisaSubject.subscribe((value) => {
      if(value.length !== 0){
        this.categoryList = value
        this.dbService.getWindowRef().setTimeout(() => categorySub.unsubscribe(), this.dbService.timeoutInterval*60)
      }
    })

    // let serviceSub = this.dbService.homeServiceSubject.subscribe((value) =>{
    //   if(value.length !== 0){
    //     this.servicesList = value
    //     this.dbService.getWindowRef().setTimeout(() => serviceSub.unsubscribe(), this.dbService.timeoutInterval*60)
    //   }
    // })
  }
}
