import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],  // ✅ Needed for *ngIf
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  successMessage: string = '';
  errorMessage: string = '';

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_jnavche',    // your EmailJS service ID
      'template_ieoq1nn',   // your EmailJS template ID
      e.target as HTMLFormElement,
      'bK-ItbqFXLm8oWPDq'  // your EmailJS public key
    ).then(
      (result) => {
        this.successMessage = '✅ Message sent successfully!';
        this.errorMessage = '';
        (e.target as HTMLFormElement).reset();
      },
      (error) => {
        this.errorMessage = '❌ Failed to send. Please try again.';
        this.successMessage = '';
        console.error(error.text);
      }
    );
  }
}
