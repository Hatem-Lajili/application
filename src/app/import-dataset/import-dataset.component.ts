import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from '../service/flow.service';


@Component({
  selector: 'app-import-dataset',
  templateUrl: './import-dataset.component.html',
  styleUrls: ['./import-dataset.component.css']
})
export class ImportDatasetComponent implements OnInit {
  
  constructor(private router: Router, private flowService: FlowService) { }

  ngOnInit() {
    
  }
  navigateToMethod() {
    console.log('Button clicked');
    this.router.navigate(['/method']);
    this.flowService.applyColorTransform = true;

  }
}
