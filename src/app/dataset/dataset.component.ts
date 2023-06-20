import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from '../service/flow.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  isChecked: boolean[] = [];
  tableData: any[] = [
    { case: 98758, activity: 'register request', timestamp: '12/05/2023 09:10', resource: 'Pete' },
    { case: 98759, activity: 'examine casually', timestamp: '13/05/2023 04:45', resource: 'Mike' },
    { case: 98760, activity: 'check ticket', timestamp: '16/05/2023 10:50', resource: 'Ellen' },
    { case: 98761, activity: 'decide', timestamp: '20/05/2023 11:22', resource: 'Sara' },
    { case: 98762, activity: 'reinitiate request', timestamp: '23/05/2023 12:40', resource: 'Sara' },
    { case: 98763, activity: 'examine thoroughly', timestamp: '25/05/2023 14:20', resource: 'Sean' },
    { case: 98761, activity: 'decide', timestamp: '26/05/2023 15:30', resource: 'Sara' },
    { case: 98764, activity: 'reject request', timestamp: '02/06/2023 09:00', resource: 'Pete' },

    // Add more data objects as needed
  ];showDataSet: boolean = true;

  constructor(private router: Router , private flowService: FlowService) {}

  navigateToPerspective(): void {
    this.router.navigate(['/perspective/Scrum/time']);
    this.flowService.setApplyColorTransform2(true);

  }

  ngOnInit() {
    this.isChecked[1] = true;
    this.isChecked[3] = true;
    this.isChecked[4] = true;
    this.isChecked[5] = true;

  }
  navigateToMethod() {
  this.router.navigate(['/method']);
}


toggleButton(index: number): void {
  this.isChecked[index] = !this.isChecked[index];
}
toggleDataSet(): void {
  this.showDataSet = !this.showDataSet;

  if (this.showDataSet) {
    // Set isChecked[2], isChecked[3], isChecked[4], and isChecked[5] to true
    this.isChecked[2] = true;
    this.isChecked[3] = true;
    this.isChecked[4] = true;
    this.isChecked[5] = true;
  } else {
    // Set isChecked[2], isChecked[3], isChecked[4], and isChecked[5] to false
    this.isChecked[2] = false;
    this.isChecked[3] = false;
    this.isChecked[4] = false;
    this.isChecked[5] = false;
  }
}
  }


