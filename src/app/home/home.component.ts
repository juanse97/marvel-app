import { Component, OnInit } from '@angular/core';
import { Characters } from './interfaces/characters.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Imagenes
  images: any;
  imagesList: Characters[] = [];

  // Info modals
  isVisible = false;
  isConfirmLoading = false;
  infomodalList: any;

  constructor() { }

  ngOnInit(): void { }
  //Consulta de imagenes de super héroes guardados
  GetImagesLocalStorage() {
    this.images = localStorage.getItem("charactersIdList")
    this.images = JSON.parse(this.images)
    this.imagesList = this.images
  }
  //Modal por super herore
  showModal(id: number) {
    let infomodal: Characters[] = [];
    this.isVisible = true;
    infomodal = this.imagesList.filter(character => character.id === id);
    this.infomodalList = infomodal[0];
  }
  //Btn Ok modal
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }
  //Btn cerrar Modal
  handleCancel(): void {
    this.isVisible = false;
  }


}
