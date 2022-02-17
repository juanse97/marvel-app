import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/welcome.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Welcome> {
    return this.http.get<Welcome>('https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=44fd37ae02fb7ed960e594577f2b88d4&hash=982e8f459066701df80f3f28b11b30c3');
  }
}
