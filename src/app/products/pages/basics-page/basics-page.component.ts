import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'roxana';
  public nameUpper: string = 'ROXANA';
  public fullName: string = 'RoXaNa MiHaEla BaBa';

  public customDate: Date = new Date();
}
