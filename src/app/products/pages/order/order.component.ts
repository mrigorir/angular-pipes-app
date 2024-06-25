import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  isUpperCase: boolean = false;
  orderBy: keyof Hero | undefined | null | '' = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },

    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },

    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green lantern',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}