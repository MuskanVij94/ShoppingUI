import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-men-footwear',
  templateUrl: './men-footwear.component.html',
  styleUrls: ['./men-footwear.component.css']
})
export class MenFootwearComponent implements OnInit{

  menFootwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(){
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
    this.getData()
  }

  getData(){
    if(this.dbService.menFootwearSubject.value.length === 0) this.dbService.getMenFootwear()
    let menFootwearSub = this.dbService.menFootwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menFootwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => menFootwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }

  addToCart(values: any){
    let cartId = doc(this.collectionRef).id
    let docRef = doc(this.collectionRef, cartId);
    window.alert('Your product has been added to the cart!');

    let cartObj = { ...values, cartId };
    values["quantity"] = 1
    values["priceInt"] = +String(values["price"]).replace("Rs. ", "").trim()

    setDoc(docRef, { ...values, cartId }, { merge: true })
    .then(() => {
      console.log("Success")
    }, (error) => {
      console.log(error)
    })
  }
}