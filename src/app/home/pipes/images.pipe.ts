import { Pipe, PipeTransform } from '@angular/core';
import { Characters } from '../interfaces/characters.interfaces';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(characters: Characters): string {

    //Creación de ruta de imagen
    return `${characters.thumbnail.path}.${characters.thumbnail.extension}`;
  }

}
