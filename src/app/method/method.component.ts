import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { FlowService } from '../service/flow.service';


@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Scrum', 'extreme Programming', 'Kanban', 'Crystal'];
  filteredOptions: Observable<string[]>;
  highlightedOption: string;
  constructor(private router: Router, private elementRef: ElementRef, private flowService: FlowService) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterOptions(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  navigateToDataset() {
    this.router.navigate(['/dataset']);
    this.flowService.setApplyColorTransform1(true);
  }
  filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  highlightOption(option: string): void {
    this.highlightedOption = option;
  }

  resetOption(): void {
    this.highlightedOption = null;
  }
  

}