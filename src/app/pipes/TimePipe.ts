import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    return Math.floor(value / 60) + ':' + (value % 60);
  }
}
