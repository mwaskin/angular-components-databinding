import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  /* @Input('optionalAliasName') decorator makes a property accessible within any parent components (using it's alias, if assigned), instead of only within this component's template;
  Allows the property value to be input by the parent component */
  @Input('srvElement') element: { type: string; name: string; content: string };
}
