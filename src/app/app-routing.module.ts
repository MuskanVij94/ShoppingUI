import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KidsComponent } from './pages/home&living/kids.component';
import { WomenComponent } from './pages/women/women.component';
import { MenComponent } from './pages/men/men.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { TopwearComponent } from './pages/topwear/topwear.component';
import { BottomwearComponent } from './pages/bottomwear/bottomwear.component';
import { MenIndianComponent } from './pages/men-indian/men-indian.component';
import { MenFootwearComponent } from './pages/men-footwear/men-footwear.component';
import { MenAccessoriesComponent } from './pages/men-accessories/men-accessories.component';
import { WomenAccessoriesComponent } from './pages/women-accessories/women-accessories.component';
import { WomenIndianComponent } from './pages/women-indian/women-indian.component';
import { WesternwearComponent } from './pages/westernwear/westernwear.component';
import { WomenFootwearComponent } from './pages/women-footwear/women-footwear.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'topwear', component: TopwearComponent},
  {path: 'bottomwear', component: BottomwearComponent},
  {path: 'men-footwear', component: MenFootwearComponent},
  {path: 'men-indian', component: MenIndianComponent},
  {path: 'men-accessories', component: MenAccessoriesComponent},
  {path: 'westernwear', component: WesternwearComponent},
  {path: 'women-footwear', component: WomenFootwearComponent},
  {path: 'women-indian', component: WomenIndianComponent},
  {path: 'women-accessories', component: WomenAccessoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
