import { Pipe, PipeTransform } from '@angular/core';
/*
 * Update the name as and when entered along with color change
 * Takes an background argument that defaults to red.
 * Usage:
 *   value | updateBackground:name
 * Example:
 *   {{ Nammu | updateBackground: Pink }}
 *   formats to: Hello Pink
 */
@Pipe({
  name: 'updateBackground'
})
export class UpdateBackgroundPipe implements PipeTransform {
  transform(value: any, name: any = 'red'): any {
    if (value) {
      return name;
    }
  }
}
