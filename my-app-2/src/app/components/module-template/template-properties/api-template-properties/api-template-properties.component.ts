import {Component, OnDestroy, OnInit} from '@angular/core';
import {TemplateBase} from '../templateBase';
import {Broadcaster} from '../../../../broadcaster/broadcaster';
declare let $: any;
@Component({
  selector: 'app-api-template-properties',
  templateUrl: './api-template-properties.component.html',
  styleUrls: ['./api-template-properties.component.css']
})
export class ApiTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#columnConfigClass').editable({
      success: (response, newValue) => {
        this.nodeProperties.columnConfigClass = newValue;
      }
    });
    $('#columnConfigClass').editable('setValue', this.nodeProperties.columnConfigClass, false);
  };
  constructor(protected broadcaster: Broadcaster) {
    super(broadcaster);
    this.broadcastObj = this.init(this.broadcastFunc);
  }
  ngOnInit() {}
  ngOnDestroy(){
    super.destroy();
  }
}
