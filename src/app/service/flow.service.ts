import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
    private _applyColorTransform: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private applyColorTransform1: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  applyColorTransform1$: Observable<boolean> = this.applyColorTransform1.asObservable();
    private applyColorTransform2: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  applyColorTransform2$: Observable<boolean> = this.applyColorTransform2.asObservable();
  private applyColorTransform3: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  applyColorTransform3$: Observable<boolean> = this.applyColorTransform3.asObservable();
  private applyColorTransform4: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  applyColorTransform4$: Observable<boolean> = this.applyColorTransform4.asObservable();

    // Getter
    get applyColorTransform$(): Observable<boolean> {
      return this._applyColorTransform.asObservable();
    }
  
    // Setter
    set applyColorTransform(value: boolean) {
      this._applyColorTransform.next(value);
    }
    setApplyColorTransform1(value: boolean) {
      this.applyColorTransform1.next(value);
    }
    setApplyColorTransform2(value: boolean) {
      this.applyColorTransform2.next(value);
    }
    setApplyColorTransform3(value: boolean) {
      this.applyColorTransform3.next(value);
    }
    setApplyColorTransform4(value: boolean) {
      this.applyColorTransform4.next(value);
    }
}
