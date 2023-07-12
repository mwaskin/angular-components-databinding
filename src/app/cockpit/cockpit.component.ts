import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  /* EventEmitter is an angular class that creates an event; EventEmitter is a generic type (<>), so between the <>, define what data the event returns to the parent component
  @Output('optnlAlias') decorator makes the event listenable within any parent component in which the CockpitComponent is rendered */
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = ''; using local reference to access serverName now instead of 2-way binding
  // newServerContent = '';

  /* @ViewChild decorator creates an element reference from the template element matching the selector (or local reference) string passed to the decorator; can also be passed a component type (such as CockpitComponent) used in the template of this component */
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  /* give the methods a nameInput parameter that the local reference in the template can be passed to as an argument when these methods are called. Then, it's properties (value) can be read and assigned to the serverName in the event data output by the serverCreated event */
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
