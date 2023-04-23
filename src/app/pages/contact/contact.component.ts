import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { collection, CollectionReference, doc, DocumentData, Firestore, setDoc, Timestamp } from '@angular/fire/firestore';
import { DbService } from 'src/app/service/db.service';
import { QUERIES_COLLECTION } from 'src/app/constants';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
}) 
export class ContactComponent implements OnInit {
  queryForm: FormGroup = new FormGroup({})
  formSubmitted: boolean = false
  collectionRef!: CollectionReference<DocumentData>

  
  constructor( 
              private fb:FormBuilder,
               public dbService: DbService,
              private firestore: Firestore,
              ){}

  ngOnInit(){
    this.collectionRef = this.dbService.getCollectionRef(QUERIES_COLLECTION)
    this.inItForm()
  }

  inItForm(){
    this.queryForm = this.fb.group({
      queryId: [doc(this.collectionRef).id],
      name: ["", Validators.required],
      // phone: ["", Validators.required],
      email: ["", Validators.required],
      query: ["", Validators.required],
      date: [Timestamp.now()]
    })
  }

  async onSubmit(event: any) {
    event.preventDefault();
    let values = { ...this.queryForm.value };

    let docRef = doc(this.collectionRef, values.queryId);
    setDoc(docRef, { ...values }, { merge: true })
      .then(() => {
        this.inItForm();
        // this.toast.success("Query Submitted", "Success");
      }, (error) => {
        this.inItForm();
        // this.toast.error("Unable to submit the form", "Error")
      })
    // await this.dbService.sendQuery(this.queryForm);
    // this.initForm();
  }}
