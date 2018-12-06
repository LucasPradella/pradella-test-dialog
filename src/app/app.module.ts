import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatDialog, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiologUmComponent } from './components/diolog-um/diolog-um.component';
import { DiologDoisComponent } from './components/diolog-dois/diolog-dois.component';
import { HeaderComponent } from './header/header.component';
import { DiologPrincipalComponent } from './diolog-principal/diolog-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DiologUmComponent,
    DiologDoisComponent,
    HeaderComponent,
    DiologPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule 
  ],
  entryComponents: [
    DiologPrincipalComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
