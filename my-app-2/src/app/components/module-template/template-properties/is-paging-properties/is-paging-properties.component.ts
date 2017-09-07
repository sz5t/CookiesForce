import {Component, OnDestroy, OnInit} from '@angular/core';
import {TemplateBase} from '../templateBase';
import {Broadcaster} from '../../../../broadcaster/broadcaster';
declare let $: any;
@Component({
  selector: 'app-is-paging-properties',
  templateUrl: './is-paging-properties.component.html',
  styleUrls: ['./is-paging-properties.component.css']
})
export class IsPagingPropertiesComponent extends TemplateBase implements OnInit, OnDestroy {
  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#isEnablePaging').editable({
      source:[{value: 'true', text: '启用'}, {value: 'false', text: '禁用'}],
      success: (response, newValue) => {
        this.nodeProperties.isEnablePaging = newValue;
      }
    });
    $('#isEnablePaging').editable('setValue', this.nodeProperties.isEnablePaging, false);
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
