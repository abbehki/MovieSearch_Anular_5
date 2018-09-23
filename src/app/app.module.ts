import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { Service } from "./service";
import { DataService } from "./data.service";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MoviesComponent } from "./movies/movies.component";
import { SearchComponent } from "./search/search.component";
import { MovielistComponent } from "./movielist/movielist.component";
import { MoviedetailComponent } from "./moviedetail/moviedetail.component";
import { CardviewComponent } from "./cardview/cardview.component";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchComponent,
    MovielistComponent,
    MoviedetailComponent,
    CardviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [Service, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
