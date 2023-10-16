import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string =""
  @Input()
  gamelabel:string=""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  gameBuy:string=""

  constructor(){ }

  ngOnInit(): void {
    
  }
}
