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
  tuneIcon: SafeResourceUrl = '';
  spotifyIcon: SafeResourceUrl = '';
  appleMusicIcon: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title =
        params['decade'] === 'Honorable Mentions'
          ? 'Honorable Mentions'
          : 'THE ' + params['decade'];
      this.data = this.dataService.getContentForDecade(params['decade']);
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
}
