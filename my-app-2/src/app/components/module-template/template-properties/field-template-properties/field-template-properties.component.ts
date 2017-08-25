import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Broadcaster } from '../../../../broadcaster/broadcaster';

declare let $: any;
@Component({
  selector: 'app-field-template-properties',
  templateUrl: './field-template-properties.component.html',
  styleUrls: ['./field-template-properties.component.css']
})
export class FieldTemplatePropertiesComponent implements OnInit, OnDestroy{
  broadcastObj: Subscription;
  nodeProperties: any;
  constructor(private broadcaster: Broadcaster) {
    this.broadcastObj = this.broadcaster.on<string>('node_properties')
      .subscribe(data => {
        console.log(data);
        this.nodeProperties = data;
      });
  }

  ngOnInit() {
    $('#field').editable({
      type: 'text',
      editClass: 'form-control'
    });
    $('#title').editable({
      type: 'text',
      editClass: 'form-control'
    })
  }
  ngOnDestroy(){
    this.broadcastObj.unsubscribe();
  }
}
