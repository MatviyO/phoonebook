import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../../models/contact.model';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
    @Output() public addContact: EventEmitter<Contact> = new EventEmitter<Contact>();

    public isShowForm  = false;
    public addContactForm: FormGroup;

    public showForm(): void {
        this.isShowForm = true;
    }

    ngOnInit(): void {
        this.addContactForm = new FormGroup({
            name: new FormControl(null, {validators: [Validators.required]}),
            phone: new FormControl(null, {validators: [Validators.required]}),
        });
    }

    public onSubmit(): void {
        const name = this.addContactForm.value.name;
        const phone = this.addContactForm.value.phone;
        const contact = new Contact(name, phone);
        this.addContact.emit(contact);
        this.addContactForm.reset();
        this.isShowForm = false;
    }

}
