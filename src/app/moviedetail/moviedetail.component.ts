import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Service } from "../service";

@Component({
  selector: "app-moviedetail",
  templateUrl: "./moviedetail.component.html",
  styleUrls: ["./moviedetail.component.less"]
})
export class MoviedetailComponent implements OnInit {
  id: number;
  public moviedetail;
  constructor(private data: DataService, private _demoService: Service) {}

  ngOnInit() {
    this.data.idMessage.subscribe(id => {
      if (id !== 0) this.getmoviedetail(id);
    });
  }

  getmoviedetail(id) {
    this._demoService.getmoviedetailbyId(id).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.moviedetail = data;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log("done loading moviedetail")
    );
  }
}
