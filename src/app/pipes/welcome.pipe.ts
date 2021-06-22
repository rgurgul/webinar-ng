
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: unknown, lang: string): unknown {

    switch (lang) {
      case 'pl':
        return 'cześć ' + value + " " + lang;
      case 'de':
        return 'guten morgen ' + value + " " + lang;

      default:
        return 'welcome' + value + " " + lang;
    }

  }

}
