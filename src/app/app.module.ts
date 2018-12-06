import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatDialog, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dialogUmComponent } from './components/dialog-um/dialog-um.component';
import { dialogDoisComponent } from './components/dialog-dois/dialog-dois.component';
import { HeaderComponent } from './header/header.component';
import { dialogPrincipalComponent } from './dialog-principal/dialog-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    dialogUmComponent,
    dialogDoisComponent,
    HeaderComponent,
    dialogPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule 
  ],
  entryComponents: [
    dialogPrincipalComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
