import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiologPrincipalComponent } from './diolog-principal/diolog-principal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private diolog: MatDialog,
  ){
    
  }

  ngOnInit(){
    this.openDialog();
  }
  
  
  openDialog(): void {
     this.diolog.open(DiologPrincipalComponent, {
      width: '70%',
      height: '50'
    });
  }
}
