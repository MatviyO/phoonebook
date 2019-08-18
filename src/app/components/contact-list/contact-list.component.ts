import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent   {

  public contacts: Contact[] = [
    {name: 'Руслан  ',
    phone: '063055555'},
    {name: 'Орест  ',
      phone: '06345055555'},
    {name: 'Віталік  ',
      phone: '063054353455555'}

  ];

}
