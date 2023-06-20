import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodComponent } from './method/method.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { ProcessComponent } from './process/process.component';
import { ImportDatasetComponent } from './import-dataset/import-dataset.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/import-dataset', pathMatch: 'full' },
  { path: 'import-dataset', component: ImportDatasetComponent},
  { path: 'method', component: MethodComponent },
  { path: 'dataset', component: DatasetComponent },
  { path: 'perspective/Scrum/time', component: PerspectiveComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'process-map', component: ProcessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
