import { Pipe, PipeTransform } from '@angular/core';
import { Characters } from '../interfaces/characters.interfaces';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(characters: Characters): string {

    return `${ characters.thumbnail.path }.${ characters.thumbnail.extension }`;
  }

}
