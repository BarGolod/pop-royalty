import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class YearsComponent implements OnInit {
  years: Array<string> = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.years = this.dataService.getYears();
  }

  navigateToDecade(decade: string) {
    this.router.navigate([`/decades/${decade}`]);
  }
}
