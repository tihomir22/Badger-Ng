import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { BtnclickComponent } from './btnclick/btnclick.component';

@NgModule({
  declarations: [Comp1Component, Comp2Component, Comp3Component, MaincomponentComponent, BtnclickComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
