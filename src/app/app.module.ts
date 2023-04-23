import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenComponent } from './pages/mens/men/men.component';
import { WomenComponent } from './pages/womens/women/women.component';
import { KidsComponent } from './pages/living/home&living/kids.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TopwearComponent } from './pages/mens/topwear/topwear.component';
import { MenFootwearComponent } from './pages/mens/men-footwear/men-footwear.component';
import { MenIndianComponent } from './pages/mens/men-indian/men-indian.component';
import { MenAccessoriesComponent } from './pages/mens/men-accessories/men-accessories.component';
import { BottomwearComponent } from './pages/mens/bottomwear/bottomwear.component';
import { WesternwearComponent } from './pages/womens/westernwear/westernwear.component';
import { WomenIndianComponent } from './pages/womens/women-indian/women-indian.component';
import { WomenFootwearComponent } from './pages/womens/women-footwear/women-footwear.component';
import { WomenAccessoriesComponent } from './pages/womens/women-accessories/women-accessories.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { AuthService } from './service/auth.service';
import { HomedecorComponent } from './pages/living/homedecor/homedecor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DbService } from './service/db.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    TopwearComponent,
    BottomwearComponent,
    MenFootwearComponent,
    MenIndianComponent,
    MenAccessoriesComponent,
    BottomwearComponent,
    WesternwearComponent,
    WomenIndianComponent,
    WomenFootwearComponent,
    WomenAccessoriesComponent,
    HomedecorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    // MatDialogModule
  ],
  providers: [AuthService,
     DbService,
    { 
      provide: APP_INITIALIZER,
      useFactory: function(dbService: DbService) {
        return () => dbService.onLoad();
      },
      deps: [DbService],
      multi: true
    }
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
