import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LegendComponent } from '../legend/legend.component';

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit {
  data: any;
  currentDecade: string = '';
  title: string = '';
  description: string = '';
  halfDataLength: number = 0;
  tuneIcon: SafeResourceUrl = '';
  spotifyIcon: SafeResourceUrl = '';
  appleMusicIcon: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentDecade = params['decade'];
      this.title =
        params['decade'] === 'Honorable Mentions'
          ? 'Honorable Mentions'
          : 'THE ' + params['decade'];
      this.description = this.dataService.getContentForDecade(
        params['decade']
      ).description;
      this.data = this.dataService.getContentForDecade(params['decade']).data;
      this.halfDataLength = Math.ceil(this.data.length / 2);
    });
    this.initIcons();
  }

  initIcons() {
    this.tuneIcon = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/icons/tune.svg'
    );
    this.spotifyIcon = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/icons/spotify.svg'
    );
    this.appleMusicIcon = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/icons/apple_music.svg'
    );
  }

  openLegendDialog(legend: any) {
    document.body.classList.add('no-scroll');
    const dialogRef = this.dialog.open(LegendComponent, {
      data: { legend, decade: this.currentDecade },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(() => {
      document.body.classList.remove('no-scroll');
    });
  }
}
