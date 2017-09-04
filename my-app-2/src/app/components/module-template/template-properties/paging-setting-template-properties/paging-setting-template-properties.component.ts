import {Component, OnDestroy, OnInit} from '@angular/core';
import {Broadcaster} from "../../../../broadcaster/broadcaster";
import {TemplateBase} from "../templateBase";
declare let $: any;
@Component({
  selector: 'app-paging-setting-template-properties',
  templateUrl: './paging-setting-template-properties.component.html',
  styleUrls: ['./paging-setting-template-properties.component.css']
})
export class PagingSettingTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#pageSetting').editable({
      success: (response, newValue) => {
        this.nodeProperties.pagingSetting = newValue;
      }
    });
    $('#pagingSetting').editable('setValue', this.nodeProperties.pagingSetting, false);
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
