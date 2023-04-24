

import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-women-accessories',
  templateUrl: './women-accessories.component.html',
  styleUrls: ['./women-accessories.component.css']
})
export class WomenAccessoriesComponent implements OnInit{

  womenAccessoriesList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.womenAccessoriesSubject.value.length === 0) this.dbService.getWomenAccessories()
    let womenAccessoriesSub = this.dbService.womenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenAccessoriesList = [...value]
        this.dbService.getWindowRef().setTimeout(() => womenAccessoriesSub.unsubscribe, this.dbService.timeoutInterval * 6)
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