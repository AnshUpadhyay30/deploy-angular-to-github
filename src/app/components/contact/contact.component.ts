import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isLoading = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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

  private openSnackBar(message: string, type: 'success' | 'error' | 'warning') {
    const config: MatSnackBarConfig = {
      duration: 4000,
      panelClass: `snackbar-${type}`,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };
    this.snackBar.open(message, 'Close', config);
  }

  onSubmit() {
    if (!this.formData.agreePolicy) {
      this.openSnackBar('⚠️ Please agree to the privacy policy before submitting.', 'warning');
      return;
    }

    this.isLoading = true;

    const apiUrl = '/api/contact'; // ✅ Proxy route for backend

    this.http.post(apiUrl, this.formData).pipe(
      catchError(error => {
        console.error('❌ Error submitting form:', error);
        this.openSnackBar('❌ Submission failed. Please try again.', 'error');
        this.isLoading = false;
        return throwError(() => new Error('Form submission failed.'));
      })
    ).subscribe({
      next: () => {
        this.openSnackBar('✅ Thank you! Your message was sent successfully.', 'success');
        this.resetForm();
        this.isLoading = false;
      }
    });
  }

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