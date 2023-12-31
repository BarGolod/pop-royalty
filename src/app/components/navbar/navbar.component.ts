import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  showMenu: boolean = false;
  navbarLinks: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.navbarLinks = this.dataService.getNavbarLinks();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  scrollTo(id: string, closeMenu?: boolean): void {
    const link = this.navbarLinks.find((link: any) => link.id === id);

    if (link) {
      this.router.navigate([link.id]);
    } else {
      this.router.navigate(['/home']);
    }

    if (closeMenu) {
      this.showMenu = false;
    }
  }
}
