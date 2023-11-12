import { Pipe, PipeTransform } from '@angular/core';

// roxna | toggleCase = 'ROXANA'
// ROXANA | toggleCase = 'roxana'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {
    return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
  }

}
