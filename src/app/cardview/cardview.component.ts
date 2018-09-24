import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-cardview",
  templateUrl: "./cardview.component.html",
  styleUrls: ["./cardview.component.less"]
})
export class CardviewComponent implements OnInit {
  @Input()
  movielist: Array<string>;
  constructor(private data: DataService) {}

  ngOnInit() {
  }
  onClickcardview(id:number){
    this.data.changeId(id);
    window.scroll(0,0);
  }
}
