import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../../broadcaster/broadcaster';

@Component({
  selector: 'app-field-template-properties',
  templateUrl: './field-template-properties.component.html',
  styleUrls: ['./field-template-properties.component.css']
})
export class FieldTemplatePropertiesComponent implements OnInit {

  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on<string>('node_properties')
      .subscribe(message => {
        console.log(message);
      });
  }

}
