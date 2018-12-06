import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dialogUmComponent } from './components/dialog-um/dialog-um.component';
import { dialogDoisComponent } from './components/dialog-dois/dialog-dois.component';

const routes: Routes = [
  { path: 'um', component: dialogUmComponent },
  { path: 'dois', component: dialogDoisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
