import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { Mail } from 'src/app/interfaces/mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formulary: FormGroup;

  constructor(private mailSV: MailService) {
    this.formulary = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      concept: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    })
  }

  /**
* @description Convert the formylary data to needed requirements and send to mail Service.
* @param {Contact} Data recived from formulary.
* @returns {Promise<void>} A promise.
*/
  async sendDataMail({ name, email, concept, message }: Contact): Promise<void> {
    let content = `name:${name},email:${email},concept:${concept},message:${message}`;
    const mail: Mail = { subject: 'PORFOLIO MAIL', text: content };
    await this.mailSV.sendMail(mail);
  }

  /**
* @description Check if the formulary is valid on sumbit.
* @returns {void} No value to return.
*/
  onSubmit(): void {
    if (!this.formulary.valid) {
      alert('All fields are required');
    } else {
      this.sendDataMail(this.formulary.value);
      alert('Message sent');
    }
  }
}
