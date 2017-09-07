import { Component, OnInit, OnDestroy } from '@angular/core';
import {TemplateBase} from '../templateBase';
import {Broadcaster} from '../../../../broadcaster/broadcaster';
declare let $: any;
@Component({
  selector: 'app-show-title-template-properties',
  templateUrl: './show-title-template-properties.component.html',
  styleUrls: ['./show-title-template-properties.component.css']
})
export class ShowTitleTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#showTitle').editable({
      source:[{value: 'true', text: '显示'}, {value: 'false', text: '隐藏'}],
      success: (response, newValue) => {
        this.nodeProperties.header = newValue;
      }
    });
    $('#showTitle').editable('setValue', this.nodeProperties.header, false);
  }
  constructor(protected broadcaster: Broadcaster) {
    super(broadcaster);
    this.broadcastObj = this.init(this.broadcastFunc);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    super.destroy();
  }

}
