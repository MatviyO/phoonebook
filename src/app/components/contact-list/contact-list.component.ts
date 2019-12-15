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
            this.isFiltred = true;

        } else {
            this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
            this.isFiltred = false;

        }
    }
    public emptyMessage():string {
        if(this.contacts.length === 0 && this.isFiltred) {
            return ' ПО даному фильтру контактов не знайдено.';
        }
        if(this.contacts.length === 0 && !this.isFiltred ) {
            return 'Ще не добавлено контактів';
        }
    }

}
