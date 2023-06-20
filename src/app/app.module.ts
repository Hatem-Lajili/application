import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethodComponent } from './method/method.component';
import { DatasetComponent } from './dataset/dataset.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { PerspectiveComponent } from './perspective/perspective.component';
import { ProcessComponent } from './process/process.component';
import { ImportDatasetComponent } from './import-dataset/import-dataset.component';
import { DataFlowComponent } from './data-flow/data-flow.component';
import { SummaryComponent } from './summary/summary.component'
import { FlowService } from './service/flow.service';

@NgModule({
  declarations: [
    AppComponent,
    MethodComponent,
    DatasetComponent,
    PerspectiveComponent,
    ProcessComponent,
    ImportDatasetComponent,
    DataFlowComponent,
    SummaryComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [FlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
