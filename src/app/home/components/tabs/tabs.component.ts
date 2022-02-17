import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() charactersTabs: Characters[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
