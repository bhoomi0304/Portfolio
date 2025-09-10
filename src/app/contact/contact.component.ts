import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  successMessage = '';
  errorMessage = '';

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_jnavche',     // ✅ your Service ID
      'template_ieoq1nn',    // ✅ your Template ID
      e.target as HTMLFormElement,
      'bK-ItbqFXLm8oWPDq'    // ✅ your Public Key
    ).then(
    (result) => {
      alert("✅ Message sent successfully!"); // This pops up a browser alert
      (e.target as HTMLFormElement).reset(); // Optional: reset form
    },
    (error) => {
      alert("❌ Failed to send. Please try again.");
      console.error(error.text);
    }
  );
}
}