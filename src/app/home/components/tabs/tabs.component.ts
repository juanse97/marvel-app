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


  constructor(private _charactersService: HeroesService, private _modal: NzModalService, private comp: HomeComponent) { }

  ngOnInit(): void {
    this.getCharacters();

  }

  getCharacters() {
    this.characters$ = this._charactersService
      .getCharacters()
      .subscribe((resp: Welcome) => {
        this.characters = [...resp.data.results]
        this.charactersList = this.characters
      })
  }
  // Input search
  search() {
    let charactersFilter: Characters[] = [];
    charactersFilter = this.characters.filter(characters => characters.name.trim().includes(this.inputValue));
    this.charactersList = charactersFilter
  }
  // Boton guardar super heroe
  add(id: number) {
    this.charactersId$ = this._charactersService
      .getCharactersId(id)
      .subscribe((resp: Welcome) => {
        this.charactersId = [...resp.data.results]
        this.setLocalStorage(id)
      })
  }

  setLocalStorage(id: number) {
    if (this.charactersIdList.find(characterId => characterId.id === id)) {
      this.createModalError();
    } else {
      this.charactersIdList.push(this.charactersId[0])
      localStorage.setItem('charactersIdList', JSON.stringify(this.charactersIdList));
      this.createModalSuccess();
      this.comp.GetImagesLocalStorage();
    }
  }

  createModalError(): void {
    this._modal.error({
      nzTitle: 'No puedes agregar este super herore',
      nzContent: 'Este super heroe ya se encuentra en tu lista',
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }

  createModalSuccess(): void {
    this._modal.success({
      nzTitle: 'Super heroe agregado',
      nzContent: 'Este super heroe ahora hace parte de tu lista',
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }



}
