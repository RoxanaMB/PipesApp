import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Roxana';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Juan';
    this.gender = 'male';
  }

  // i18nPlural
  public clients: string[] = ['Roxana', 'Juan', 'Pedro', 'María', 'Luis'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

}
