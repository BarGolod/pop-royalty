import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit {
  data: any;
  title: string = '';
  halfDataLength: number = 0;
  svgIconPath = this.sanitizer.bypassSecurityTrustResourceUrl(
    'assets/icons/tune.svg'
  );

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params['decade'];
      this.data = this.dataService.getContentForDecade(this.title);
      this.halfDataLength = Math.ceil(this.data.length / 2);
    });
  }
}
