import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { deleteDoc, doc, collection, Firestore } from '@angular/fire/firestore';
import { CART_COLLECTION } from 'src/app/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartList: any[] = []
  totalPrice: number = 0;

  constructor(
    private dbService: DbService,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    if (this.dbService.cartSubject.value.length === 0) this.dbService.getCartItems()
    let cartSub = this.dbService.cartSubject.subscribe((value) => {
      if (value.length !== 0) {
        this.cartList = [...value]
        this.calculateTotalPrice()
        this.dbService.getWindowRef().setTimeout(() => cartSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartList.reduce((prev, next) => prev + (next.priceInt * next.quantity), 0)
    console.log(this.totalPrice);
    
  }

  // removeItem(item:any, event:any){
  //   console.log(event);
  //   this.cart.removeCartitem(item)
  //   console.log(item);
  // }

  // deleteItem(docId: any) {
  //   const docInstance = doc(this.firestore,CART_COLLECTION,docId)
  //   deleteDoc(docInstance)
  //     .then(() => {
  //       console.log("Success")
  //     }, (error: any) => {
  //       console.error(">>> error: ", error);
  //         console.log(error)
  //     });
  // }
  deleteItem(id: string) {
    // console.log(id)
    const docInstance = doc(this.firestore, 'cart', id);
    deleteDoc(docInstance)
      .then(() => {
        console.log("data deleted");
        this.calculateTotalPrice()
      })
  }

  onQuantityChange(newQuantity: any, idx: number) {
    this.cartList[idx]["quantity"] = +newQuantity.target.value;
    this.calculateTotalPrice()
  }

  buynow() {
    window.alert('Your order is placed.. ');
    // this.();
  }

} 