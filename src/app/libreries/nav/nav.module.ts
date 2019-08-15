import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHComponent } from './nav-h/nav-h.component';



@NgModule({
  declarations: [NavHComponent],
  imports: [
    CommonModule
  ],exports:[NavHComponent]
})
export class NavModule { }
