import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  public isshowForm: boolean = false;

  public showForm(): void {
    this.isshowForm = true;
  }

  public addContactForm: FormGroup;

  ngOnInit(): void {
    this.addContactForm = new FormGroup(
      {
        name: new FormControl(null, {validators: [Validators.required]}),
        phone: new FormControl(null, {validators: [Validators.required]})

      }
    );
  }
  public onSubmit():void {

  }

}
