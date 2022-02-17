import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Characters } from './interfaces/characters.interfaces';
import { Welcome } from './interfaces/welcome.interface';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Characters[] = [];
  characters$: Subscription = new Subscription;

  constructor(private _charactersService: HeroesService) { }

  ngOnInit(): void {

    this.characters$ = this._charactersService
      .getCharacters()
      .subscribe((resp: Welcome) => {
        this.characters = [...resp.data.results]
      })
  }

}
