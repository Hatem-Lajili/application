import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  showDangerAlert = true; 
  constructor(private router: Router) { }

  ngOnInit():void {
    
  }
  navigateToSummary(): void {
    this.router.navigate(['/summary']);
  }  
}
