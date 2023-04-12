import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { KidsComponent } from './pages/home&living/kids.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TopwearComponent } from './pages/topwear/topwear.component';
import { MenFootwearComponent } from './pages/men-footwear/men-footwear.component';
import { MenIndianComponent } from './pages/men-indian/men-indian.component';
import { MenAccessoriesComponent } from './pages/men-accessories/men-accessories.component';
import { BottomwearComponent } from './pages/bottomwear/bottomwear.component';
import { WesternwearComponent } from './pages/westernwear/westernwear.component';
import { WomenIndianComponent } from './pages/women-indian/women-indian.component';
import { WomenFootwearComponent } from './pages/women-footwear/women-footwear.component';
import { WomenAccessoriesComponent } from './pages/women-accessories/women-accessories.component';

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
    WomenAccessoriesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
