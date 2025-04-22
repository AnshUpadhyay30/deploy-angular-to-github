import { Component } from '@angular/core';
import { ContactService } from './contact.service';  // Import the ContactService

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Form data model
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

  // Injecting the ContactService into the component
  constructor(private contactService: ContactService) {}

  // Handle form submission
  onSubmit() {
    // Ensure the user agrees to the privacy policy before submission
    if (!this.formData.agreePolicy) {
      alert('Please agree to the privacy policy before submitting.');
      return;
    }

    // Submit the contact data using the ContactService
    this.contactService.submitContact(this.formData).subscribe({
      next: (response) => {
        // On success
        alert('Message sent successfully!');
        this.resetForm();
      },
      error: (error) => {
        // On error
        alert('Something went wrong. Please try again.');
        console.error(error);
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