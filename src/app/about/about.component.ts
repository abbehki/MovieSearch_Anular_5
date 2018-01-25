import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from   '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
  sendMehome(){
    //this.route.navigate(['']);
  }

}
