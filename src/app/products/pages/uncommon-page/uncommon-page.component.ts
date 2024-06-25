import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  name: string = 'Marco';
  gender: 'male' | 'female' = 'male';
  clients: string[] = ['Marco', 'Pedro', 'María', 'Juan', 'Jessica', 'Andrea', 'Luis  '];
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos 2 clientes',
    'other': 'tenemos # clientes',
  }

  person = {
    name: 'Marco',
    age: '34',
    address: 'Heart of the void'
  }

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  eraseClient() {
    this.clients.shift();
  }

  myObservableTimer = interval(1000).pipe(
    tap( value => console.log('tap: ', value) )
  );


}
