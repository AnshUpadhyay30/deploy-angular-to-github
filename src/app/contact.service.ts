import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Updated API endpoint (Make sure this is correct based on your environment)
  private apiUrl = 'http://localhost:5001/submit-contact';  // Use EC2 public IP if deployed remotely

  constructor(private http: HttpClient) { }

  // Submit contact data to the Flask backend
  submitContact(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
}