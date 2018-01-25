import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }
  text:string='YOLO';
  bntTxt:string='Type it here!!';
  goalLife:string='';
  Numbers:number;
  goals=[];
  ngOnInit() {
    this.Numbers=this.goalLife.length;
  }

additem(){
  this.goals.push(this.goalLife);
  this.goalLife='';
  this.Numbers=this.goals.length;
}
}
