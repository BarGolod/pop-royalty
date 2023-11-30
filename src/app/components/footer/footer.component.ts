import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  sections: any = [];
  phoneNumber: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.phoneNumber = '+972 50-210-2036';
    this.email = 'bargolod@gmail.com';
    this.sections = [
      {
        title: 'Contact',
        items: [
          { text: this.phoneNumber, type: 'text' },
          { text: this.email, type: 'text' },
          {
            text: 'LinkedIn',
            type: 'icon',
            iconClass: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/bar-golod',
          },
        ],
      },
      {
        title: 'Legal',
        items: [
          {
            text: 'Terms of use',
            routerLink: 'terms-of-use',
            type: 'link',
          },
          {
            text: 'Privacy policy',
            routerLink: 'privacy-policy',
            type: 'link',
          },
          {
            text: 'Accessibility',
            routerLink: 'accessibility',
            type: 'link',
          },
        ],
      },
    ];
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      this.router.navigate(['home']).then(() => {
        const updatedElement = document.getElementById(id);
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getLegal(key: string): any {
    return this.dataService.getLegal(key);
  }

  openLegalDialog(legalKey: string) {
    const legalText = this.dataService.getLegal(legalKey);

    this.dialog.open(DialogComponent, {
      width: '80%',
      data: legalText,
    });
  }
}
