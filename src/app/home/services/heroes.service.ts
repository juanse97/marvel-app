import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Welcome } from '../interfaces/welcome.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private key: string = environment.key;

  private baseUrl: string = "https://gateway.marvel.com/";
  private ts: string = "1000"
  private hash: string = "982e8f459066701df80f3f28b11b30c3"

  constructor(private http: HttpClient) { }
  //Consulta general de personajes
  getCharacters(): Observable<Welcome> {
    return this.http.get<Welcome>(`${this.baseUrl}v1/public/characters?ts=${this.ts}&apikey=${this.key}&hash=${this.hash}`);
  }
  //Consulta personaje por ID
  getCharactersId(id: number): Observable<Welcome> {
    return this.http.get<Welcome>(`${this.baseUrl}v1/public/characters/${id}?ts=${this.ts}&apikey=${this.key}&hash=${this.hash}`);
  }
}
