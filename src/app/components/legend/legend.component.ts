import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent {
  legend: any;
  decade: string = '';
  decadeData: any;
  legendData: any;

  constructor(
    public dialogRef: MatDialogRef<LegendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.legend = data.legend;
    this.decade = data.decade;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
