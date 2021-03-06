import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { HomeComponent } from '../../home.component';
import { Characters } from '../../interfaces/characters.interfaces';
import { Welcome } from '../../interfaces/welcome.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  inputValue: string = "";
  // Tab Super Heroes
  characters: Characters[] = [];
  charactersId: Characters[] = [];
  characters$: Subscription = new Subscription;

  // Tab Super Heroes Guardados
  charactersList: Characters[] = [];
  charactersIdList: Characters[] = [];
  charactersId$: Subscription = new Subscription;

  // Contenido Modal
  title: string = "";
  content: string = "";


  constructor(private _charactersService: HeroesService, private _modal: NzModalService, private comp: HomeComponent) { }

  ngOnInit(): void {
    this.getCharacters();
    localStorage.removeItem('charactersIdList');

  }

  getCharacters() {
    this.characters$ = this._charactersService
      .getCharacters()
      .subscribe((resp: Welcome) => {
        this.characters = [...resp.data.results]
        this.charactersList = this.characters
      })
    this.inputValue = "";
  }
  // Input search
  search() {
    let charactersFilter: Characters[] = [];
    charactersFilter = this.characters.filter(characters => characters.name.trim().includes(this.inputValue));
    this.charactersList = charactersFilter
  }
  // Boton guardar super heroe
  addCharacter(id: number) {
    this.charactersId$ = this._charactersService
      .getCharactersId(id)
      .subscribe((resp: Welcome) => {
        this.charactersId = [...resp.data.results]
        this.setLocalStorage(id)
      })
  }

  //Boton quitar super heroe
  removeCharacter(id: number) {
    this.charactersIdList.forEach((element, i) => {
      if (element.id === id)
        this.charactersIdList.splice(i, 1)
    });
    //Envio de data a LS
    localStorage.setItem('charactersIdList', JSON.stringify(this.charactersIdList));
    //Ejecuc??n de func de mostrar imagenes
    this.comp.GetImagesLocalStorage();
    //Generaci??n de modal
    this.createModalSuccess('Super h??roe removido','Este super h??roe ya no hace parte de tu lista');
  }

  setLocalStorage(id: number) {
    //Validaci??n personaje existente
    if (this.charactersIdList.find(characterId => characterId.id === id)) {
      //Generaci??n de modal
      this.createModalError();
    } else {
      //Almacenamiento de data
      this.charactersIdList.push(this.charactersId[0])
      //Envio de data a LS
      localStorage.setItem('charactersIdList', JSON.stringify(this.charactersIdList));
      //Generaci??n de modal
      this.createModalSuccess('Super h??roe agregado','Este super h??roe ahora hace parte de tu lista');
      //Ejecuc??n de func de mostrar imagenes
      this.comp.GetImagesLocalStorage();
    }
  }
  // Modals
  createModalError(): void {
    this._modal.error({
      nzTitle: 'No puedes agregar este super h??roe',
      nzContent: 'Este super h??roe ya se encuentra en tu lista.',
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }

  createModalSuccess(tilte: string, content: string): void {
    this._modal.success({
      nzTitle: tilte,
      nzContent: content,
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }

}
