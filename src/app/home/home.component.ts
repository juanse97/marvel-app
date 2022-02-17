import { Component, OnInit } from '@angular/core';
import { Characters } from './interfaces/characters.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any;
  imagesList: Characters[] = [];

  constructor() { }

  ngOnInit(): void { }

  GetImagesLocalStorage() {
    this.images = localStorage.getItem("charactersIdList")
    this.images = JSON.parse(this.images)
    this.imagesList = this.images
  }


}
