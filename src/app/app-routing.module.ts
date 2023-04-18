import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KidsComponent } from './pages/living/home&living/kids.component';
import { WomenComponent } from './pages/womens/women/women.component';
import { MenComponent } from './pages/mens/men/men.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { TopwearComponent } from './pages/mens/topwear/topwear.component';
import { BottomwearComponent } from './pages/mens/bottomwear/bottomwear.component';
import { MenIndianComponent } from './pages/mens/men-indian/men-indian.component';
import { MenFootwearComponent } from './pages/mens/men-footwear/men-footwear.component';
import { MenAccessoriesComponent } from './pages/mens/men-accessories/men-accessories.component';
import { WomenAccessoriesComponent } from './pages/womens/women-accessories/women-accessories.component';
import { WomenIndianComponent } from './pages/womens/women-indian/women-indian.component';
import { WesternwearComponent } from './pages/womens/westernwear/westernwear.component';
import { WomenFootwearComponent } from './pages/womens/women-footwear/women-footwear.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomedecorComponent } from './pages/living/homedecor/homedecor.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'topwear', component: TopwearComponent},
  {path: 'bottomwear', component: BottomwearComponent},
  {path: 'men-footwear', component: MenFootwearComponent},
  {path: 'men-indian', component: MenIndianComponent},
  {path: 'men-accessories', component: MenAccessoriesComponent},
  {path: 'westernwear', component: WesternwearComponent},
  {path: 'women-footwear', component: WomenFootwearComponent},
  {path: 'women-indian', component: WomenIndianComponent},
  {path: 'women-accessories', component: WomenAccessoriesComponent},
  {path: 'homedecor', component: HomedecorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
