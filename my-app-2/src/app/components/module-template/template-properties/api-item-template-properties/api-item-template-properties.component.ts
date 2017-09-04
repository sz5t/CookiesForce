import {Component, OnDestroy, OnInit} from '@angular/core';
import {Broadcaster} from "../../../../broadcaster/broadcaster";
import {TemplateBase} from "../templateBase";
declare let $: any;
@Component({
  selector: 'app-api-item-template-properties',
  templateUrl: './api-item-template-properties.component.html',
  styleUrls: ['./api-item-template-properties.component.css']
})
export class ApiItemTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#columnConfigItem').editable({
      success: (response, newValue) => {
        this.nodeProperties.columnConfigItem = newValue;
      }
    });
    $('#columnConfigItem').editable('setValue', this.nodeProperties.columnConfigItem, false);
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
