import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Define the isLoading property
  isLoading = false;  // Added here

  constructor(private http: HttpClient) {}

  // Define the form data model
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    country: '',
    message: '',
    agreePolicy: false,
    subscribe: false
  };

  // Handle form submission
  onSubmit() {
    console.log('Form submitted');  // Log form submission

    // Ensure the user agrees to the privacy policy before submission
    if (!this.formData.agreePolicy) {
      alert('Please agree to the privacy policy before submitting.');
      return;
    }

    const apiUrl = 'http://localhost:5001/submit-contact';  // Replace with your Flask server URL

    // Set loading to true to show the loading indicator
    this.isLoading = true;

    // Send the form data to the backend
    this.http.post(apiUrl, this.formData).pipe(
      catchError(error => {
        console.error('Error in HTTP request:', error);
        alert('Something went wrong. Please try again.');
        this.isLoading = false;  // Reset loading indicator
        return throwError(() => new Error('Something went wrong.'));
      })
    ).subscribe({
      next: (response) => {
        // On success
        alert('Message sent successfully!');
        this.resetForm();
        this.isLoading = false;  // Reset loading indicator
      }
    });
  }

  // Reset the form data
  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      company: '',
      country: '',
      message: '',
      agreePolicy: false,
      subscribe: false
    };
  }
}