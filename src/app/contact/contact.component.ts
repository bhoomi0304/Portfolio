import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',  // from EmailJS
      'YOUR_TEMPLATE_ID', // from EmailJS
      e.target as HTMLFormElement,
      'YOUR_PUBLIC_KEY'   // from EmailJS
    ).then(
      (result) => {
        alert("✅ Message sent successfully!");
      },
      (error) => {
        alert("❌ Failed to send. Please try again.");
        console.error(error.text);
      }
    );
  }
}
