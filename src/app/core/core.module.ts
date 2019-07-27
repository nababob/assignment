import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing modules
import { CoreRoutingModule } from './core-routing.module';
// Components
import { HomeComponent } from './components/home/home.component';
// Third Party Library
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
