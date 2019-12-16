import {Component, OnInit} from '@angular/core';
import {Contact} from '../../models/contact.model';
import {ContactsService} from '../../services/contacts.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    public contacts: Contact[] = [];
    public isFiltred = false;

    constructor(private contactsService: ContactsService ) {
    }
    ngOnInit(): void {
       this.updateContacts();
    }



    public filter(e: KeyboardEvent) {
        const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
        if (value) {
            this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value));
            this.isFiltred = true;

        } else {
            this.updateContacts();
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
    public updateContacts(): void{
       this.contacts = this.contactsService.updateContacts() ;
    }

}
