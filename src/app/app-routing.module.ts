import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiologUmComponent } from './components/diolog-um/diolog-um.component';
import { DiologDoisComponent } from './components/diolog-dois/diolog-dois.component';

const routes: Routes = [
  { path: 'um', component: DiologUmComponent },
  { path: 'dois', component: DiologDoisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
