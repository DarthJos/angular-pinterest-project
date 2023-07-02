import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  images: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.apiService.getImages().subscribe(data => {
      this.images = data;
    })
  }
}
