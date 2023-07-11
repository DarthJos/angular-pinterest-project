import { ApiService } from './../service/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css']
})
export class SearchBannerComponent implements OnInit {

  inicioSelected = true;
  explorarSelected = false;

  query = '';
  @Output() queryEmmiter = new EventEmitter<any>();
  /* results: any[] = []; */

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  sendQuery(query:any) {
    console.log(this.query)
    console.log(query)
    this.queryEmmiter.emit(query);
  }

  onInicioClicked() {
    this.inicioSelected = true;
    this.explorarSelected = false;
  }

  onExplorarClicked() {
    this.inicioSelected = false;
    this.explorarSelected = true;
  }
}
