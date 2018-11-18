import {Component, Input, OnInit} from '@angular/core';
import {Email} from '../../models/email.model';

@Component({
  selector: 'app-email-info',
  templateUrl: './email-info.component.html',
  styleUrls: ['./email-info.component.scss']
})
export class EmailInfoComponent implements OnInit {

  @Input() email: Email;

  constructor() { }

  ngOnInit() {
  }

}
