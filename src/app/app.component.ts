import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pinterest-project';
  searchQuery: any;

  fwdQueryToCards($event: any) {
    this.searchQuery = $event;
  }
}
