import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-men-accessories',
  templateUrl: './men-accessories.component.html',
  styleUrls: ['./men-accessories.component.css']
})
export class MenAccessoriesComponent implements OnInit{

  menAccessoriesList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){  }

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.menAccessoriesSubject.value.length === 0) this.dbService.getMenAccessories()
    let menAccessoriesSub = this.dbService.menAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menAccessoriesList = [...value]
        this.dbService.getWindowRef().setTimeout(() => menAccessoriesSub.unsubscribe, this.dbService.timeoutInterval * 6)
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