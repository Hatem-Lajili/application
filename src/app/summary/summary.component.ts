import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from '../service/flow.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

    constructor(private router: Router, private flowService:FlowService){}

    navigateToPerspective(): void {
        this.router.navigate(['/perspective/Scrum/time']);
      }
      navigateToProcessMap(): void {
        this.router.navigate(['/process-map']);
        this.flowService.setApplyColorTransform4(true);

      }  
}
