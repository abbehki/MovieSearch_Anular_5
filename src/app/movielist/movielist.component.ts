import { Component, OnInit, Input } from "@angular/core";
import { Service } from "../service";
import { Observable } from "rxjs/Rx";
import { config_URL } from "../config";
import { DataService } from "../data.service";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.less"]
})
export class MovielistComponent implements OnInit {
  public movielist;
  message: string;

  constructor(private _demoService: Service, private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      if (message !== "") this.getmovielist(message);
    });
  }
  getmovielist(message) {
    this._demoService.getmovieslist(message).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.movielist = data;
        this.movielist=this.movielist.results;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log("done loading movielist")
    );
  }
}
