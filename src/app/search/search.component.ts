import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.less"]
})
export class SearchComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}
  textValue: string = "";

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
  onClick(textValue:string) {
    this.data.changeMessage(textValue);
  }
}
