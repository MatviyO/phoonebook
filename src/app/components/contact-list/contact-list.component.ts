import {Component, OnInit} from '@angular/core';
import {Contact} from '../../models/contact.model';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    public contacts: Contact[] = [];
    public isFiltred = false;

    ngOnInit(): void {
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    }

    public addContact(contact: Contact): void {
        this.contacts.push(contact);

    }

    public filter(e: KeyboardEvent) {
        const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
        if (value) {
            this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value));

        } else {
            this.contacts = JSON.parse(localStorage.getItem('contacts'));

        }
    }

}
