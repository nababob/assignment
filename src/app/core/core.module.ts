import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing modules
import { CoreRoutingModule } from './core-routing.module';
// Components
import { HomeComponent } from './components/home/home.component';
// Third Party Library
import { FlexLayoutModule } from "@angular/flex-layout";
// Coustom Module
import { SharedModule } from '../shared/shared.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';



@NgModule({
  declarations: [HomeComponent, LineChartComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoreModule { }
