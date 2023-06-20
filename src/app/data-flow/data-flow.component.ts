import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FlowService } from '../service/flow.service';

@Component({
  selector: 'app-data-flow',
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.css']
})
export class DataFlowComponent implements OnInit {
  fileSendIconUrl: SafeUrl;
  checkedLineIconUrl: SafeUrl;
  fileDocumentCheckIconUrl: SafeUrl;
  textBoxOutlineIconUrl: SafeUrl;
  checkBoxOutlineIconUrl: SafeUrl;
  textBoxCheckOutlineIconUrl: SafeUrl;
  autoRenewIconUrl: SafeUrl;
  arrowRightThinIconUrl: SafeUrl;

  applyColorTransform: boolean = true;
  applyColorTransform1: boolean = true;
  applyColorTransform2: boolean = true;
  applyColorTransform3: boolean = true;
  applyColorTransform4: boolean = true;



  constructor(private sanitizer: DomSanitizer, private flowService : FlowService) { }

  ngOnInit() {
    const fileSendIconPath = 'assets/icons/file-send-outline.png';
    const checkedLineIconPath = 'assets/icons/file-check-outline.png';
    const fileDocumentCheckIconPath = 'assets/icons/file-document-check-outline.png';
    const textBoxOutlineIconPath = 'assets/icons/text-box-outline.png';
    const checkBoxOutlineIconPath = 'assets/icons/checkbox-outline.png';
    const textBoxCheckOutlineIconPath = 'assets/icons/text-box-check-outline.png';
    const autoRenewIconPath = 'assets/icons/autorenew.png';
    const arrowRightThinIconPath = 'assets/icons/arrow-right-thin.png';

    this.fileSendIconUrl = this.sanitizer.bypassSecurityTrustUrl(fileSendIconPath);
    this.checkedLineIconUrl = this.sanitizer.bypassSecurityTrustUrl(checkedLineIconPath);
    this.fileDocumentCheckIconUrl = this.sanitizer.bypassSecurityTrustUrl(fileDocumentCheckIconPath);
    this.textBoxOutlineIconUrl = this.sanitizer.bypassSecurityTrustUrl(textBoxOutlineIconPath);
    this.checkBoxOutlineIconUrl = this.sanitizer.bypassSecurityTrustUrl(checkBoxOutlineIconPath);
    this.textBoxCheckOutlineIconUrl = this.sanitizer.bypassSecurityTrustUrl(textBoxCheckOutlineIconPath);
    this.autoRenewIconUrl = this.sanitizer.bypassSecurityTrustUrl(autoRenewIconPath);
    this.arrowRightThinIconUrl = this.sanitizer.bypassSecurityTrustUrl(arrowRightThinIconPath);
    this.flowService.applyColorTransform$.subscribe(apply => {
      this.applyColorTransform = apply;
      
    });
    this.flowService.applyColorTransform1$.subscribe(value => {
      this.applyColorTransform1 = value; 
    });
    this.flowService.applyColorTransform2$.subscribe(value => {
      this.applyColorTransform2 = value; 
    });
    this.flowService.applyColorTransform3$.subscribe(value => {
      this.applyColorTransform3 = value; 
    });
    this.flowService.applyColorTransform4$.subscribe(value => {
      this.applyColorTransform4 = value; 
    });
  }
}
