import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cardview",
  templateUrl: "./cardview.component.html",
  styleUrls: ["./cardview.component.less"]
})
export class CardviewComponent implements OnInit {
  @Input()
  movielist: Array<string>;
  constructor() {}

  ngOnInit() {}
}
