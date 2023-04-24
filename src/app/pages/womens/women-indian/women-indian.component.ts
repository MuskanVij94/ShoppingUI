import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/service/db.service';
@Component({
  selector: 'app-women-indian',
  templateUrl: './women-indian.component.html',
  styleUrls: ['./women-indian.component.css']
})
export class WomenIndianComponent implements OnInit{

  womenIndianList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.womenIndianSubject.value.length === 0) this.dbService.getWomenIndian()
    let womenIndianSub = this.dbService.womenIndianSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenIndianList = [...value]
        this.dbService.getWindowRef().setTimeout(() => womenIndianSub.unsubscribe, this.dbService.timeoutInterval * 6)
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