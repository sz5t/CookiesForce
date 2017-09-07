import {Component, OnDestroy, OnInit} from '@angular/core';
import {Broadcaster} from "../../../../broadcaster/broadcaster";
import {TemplateBase} from "../templateBase";
declare let $: any;
@Component({
  selector: 'app-sort-template-properties',
  templateUrl: './sort-template-properties.component.html',
  styleUrls: ['./sort-template-properties.component.css']
})
export class SortTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#sort').editable({
      success: (response, newValue) => {
        this.nodeProperties.sortConfig._sort = newValue;
      }
    });
    $('#order').editable({
      source:[{text: '升序', value: 'asc'}, {text: '降序', value: 'desc'}],
      success: (response, newValue) => {
        this.nodeProperties.sortConfig._order = newValue;
      }
    });
    $('#sort').editable('setValue', this.nodeProperties.sortConfig._sort, false);
    $('#order').editable('setValue', this.nodeProperties.sortConfig._order, false);
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
