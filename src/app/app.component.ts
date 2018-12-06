import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { dialogPrincipalComponent } from './dialog-principal/dialog-principal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private dialog: MatDialog,
  ){
    
  }

  ngOnInit(){
    this.openDialog();
  }
  
  
  openDialog(): void {
     this.dialog.open(dialogPrincipalComponent, {
      width: '70%',
      height: '50'
    });
  }
}
