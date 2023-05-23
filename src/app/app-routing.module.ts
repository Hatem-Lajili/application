import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodComponent } from './method/method.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  { path: '', redirectTo: '/method', pathMatch: 'full' },
  { path: 'method', component: MethodComponent },
  { path: 'dataset', component: DatasetComponent },
  { path: 'perspective/Scrum/time', component: PerspectiveComponent},
  { path: 'process-map', component: ProcessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
