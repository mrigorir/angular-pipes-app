import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  nameLower: string = 'marco';
  nameUpper: string = 'MARCO';
  fullName: string = 'Marco Parra';
  custumDate: Date = new Date();
}
