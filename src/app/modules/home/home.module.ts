import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomesComponent } from './homes/homes.component';


@NgModule({
  declarations: [HomesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomesComponent]
})
export class HomeModule { }
