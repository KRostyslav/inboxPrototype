import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() title: string;
  public nameApp: string = 'inboxPrototype 0.0.1!';

  constructor() { }

  ngOnInit() {
  }

}
