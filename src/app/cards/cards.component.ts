import { ApiService } from './../service/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() queryInput: any[] | undefined;
  images: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getImages();
  }

  ngOnChanges(): void {
    if (this.queryInput) this.searchImages(this.queryInput);
    else this.getImages();
  }

  getImages() {
    this.apiService.getImages().subscribe(data => {
      this.images = data;
    })
  }

  searchImages(query: any) {
    this.apiService.searchImages(query).subscribe(data => {
      this.images = data.results;
    })
  }
}
