import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // ✅ Use proxy path so Angular forwards this to backend via proxy.conf.json
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  submitContact(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
}