import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private imageApiHost = 'https://api.unsplash.com/';
  private accessKey = 'Vo-temohNGslsq1mmEipXxrPe_QNvFKEzePoQwmQRDI';

  //Image API endpoints
  private getImagesEndpoint = 'photos/?per_page=30'

  constructor(private http: HttpClient) { }
  public getImages(): Observable<any> {
    return this.http.get<any>(this.imageApiHost + this.getImagesEndpoint + '&client_id=' + this.accessKey);
  }
}
