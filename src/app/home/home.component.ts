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



  constructor() { }

  ngOnInit(): void { }


}
