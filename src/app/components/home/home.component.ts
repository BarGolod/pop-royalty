import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  description: string = '';
  disclaimer: string = '';
  renderedDescription: SafeHtml = '';
  renderedDisclaimer: SafeHtml = '';
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.description = this.dataService.getDescription();
    this.disclaimer = this.dataService.getDisclaimer();
    this.renderedDescription = this.sanitizer.bypassSecurityTrustHtml(
      this.description
    );
    this.renderedDisclaimer = this.sanitizer.bypassSecurityTrustHtml(
      this.disclaimer
    );
  }
}
