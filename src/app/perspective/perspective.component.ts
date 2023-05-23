import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.css']
})
export class PerspectiveComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Time', 'Organisational/Team', 'Quality', 'Cost & Risk', 'Data', 'Control-Flow'];
  filteredOptions: Observable<string[]>;
  constructor(private router: Router) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  navigateToDataset(): void {
    this.router.navigate(['/dataset']);
  }

  moveToSelected(): void {
    const availableTable = document.querySelector('.table-container table');
    const selectedTable = document.querySelector('.table-2 table');
  
    // Copy the content from the Available table to the Selected table
    const availableContent = availableTable.querySelector('td').innerHTML;
    selectedTable.querySelector('td').innerHTML = availableContent;
  }
  
  
  moveToAvailable(): void {
    const availableTable = document.querySelector('.table-container table');
    const selectedTable = document.querySelector('.table-2 table');
  
    // Move the content from the Selected table to the Available table
    const selectedCell = selectedTable.querySelector('td');
    const selectedContent = selectedCell.innerHTML;
  
    if (selectedContent.trim() !== '') {
      availableTable.querySelector('td').innerHTML = selectedContent;
      selectedCell.innerHTML = '';
    }
  }

  navigateToProcessMap(): void {
    this.router.navigate(['/process-map']);
  }
  

}
