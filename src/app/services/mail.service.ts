import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mail } from '../interfaces/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  /**
* @description Send the gived information to the mail-api. 
* @param {Mail} mail Of the proyect to return.
* @returns {Promise<any>} A promise with the post status.
*/
  sendMail(mail: Mail): Promise<any> {
    return firstValueFrom(
      this.http.post<any>(environment.MAIL_HOST, mail, { headers: { 'Content-Type': 'application/json' } })
    );
  }
}
