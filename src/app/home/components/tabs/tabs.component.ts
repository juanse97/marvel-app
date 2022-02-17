import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  options: Array<{ value: string; category: string; count: number }> = [];

  characters: Characters[] = [];
  charactersList: Characters[] = [];

  characters$: Subscription = new Subscription;

  constructor(private _charactersService: HeroesService) { }

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

  search() {
    let charactersFilter: Characters[] = [];
    charactersFilter = this.characters.filter(characters => characters.name.trim().includes(this.inputValue));
    this.charactersList = charactersFilter
  }



}
