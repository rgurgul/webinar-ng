import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  today = Date.now();

  access = true;

  contacts = [
    { name: 'Joe', phone: 1234234 },
    { name: 'Mike', phone: 81234234 },
    { name: 'Bob', phone: 41234234 },
    { name: 'Jack', phone: 34234 },
    { name: 'Carlos', phone: 234234 }
  ];

}
