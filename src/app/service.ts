import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { config_URL } from "./config";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getnames() {
      return this.http.get(config_URL.URL+'/bears');
  }
  createname(name){
      let body = JSON.stringify(name);
      return this.http.post(config_URL.URL+"/bears", body,httpOptions);
  }
  updatename(id){
      let body=JSON.stringify(id);
      return this.http.put(config_URL.URL+"/bears/"+id._id,body,httpOptions)
  }
  deletename(id){
      let body =JSON.stringify(id);
      return this.http.delete(config_URL.URL+"/bears/"+id.id._id);
    }
  getmovieslist(name) {
    return this.http.get(
      config_URL.URL +
        "/search/movie?api_key=e53a71c63395d3f51efefc56f2ba5083&language=en-US&query="+name+"&page=2&include_adult=false"
    );
  }
  getmoviedetailbyId(id) {
    return this.http.get(
      config_URL.URL +
        "/https://api.themoviedb.org/3/movie/"+id+"?api_key=e53a71c63395d3f51efefc56f2ba5083"
    );
  }
}
