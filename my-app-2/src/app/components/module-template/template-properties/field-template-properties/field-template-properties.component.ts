import { Component, OnInit, OnDestroy} from '@angular/core';
import { Broadcaster } from '../../../../broadcaster/broadcaster';
import {TemplateBase} from '../templateBase';
declare let $: any;
@Component({
  selector: 'app-field-template-properties',
  templateUrl: './field-template-properties.component.html',
  styleUrls: ['./field-template-properties.component.css'],
})
export class FieldTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {
  nodeProperties: any ;
  broadcastObj: any;
  broadcastFunc = (data) => {
  this.nodeProperties = data;
  $('#field').editable({
    success: (response, newValue) => {
      this.nodeProperties.field = newValue;
    }
  });
  $('#header').editable({
    success:(response, newValue) =>{
      this.nodeProperties.header = newValue;
    }
  });
  $('#colwidth').editable({
    success:(response, newValue) =>{
      this.nodeProperties.colwidth = newValue;
    }
  });
  $('#coltype').editable({
    source:[{value: 'ro', text: '文本'}, {value: 'ch', text: '复选框'}, {value: 'ra', text: '单选框'}, {value: 'date', text: '日期'}],
    success:(response,newValue) =>{

    }
  });
  $('#colalign').editable({
    source:[{value: 'center', text: '居中'}, {value: 'left', text: '左对齐'}, {value: 'right', text: '右对齐'}],
    success:(response, newValue) =>{
      this.nodeProperties.colalign = newValue;
    }
  });
  $('#colsorting').editable({
    source: [{value: '', text: '未设置'},{value: 'server', text: '服务器端'}, {value: 'string', text: '字符'}, {value: 'int', text: '数字'}],
    success: (response, newValue) =>{
      this.nodeProperties.colsorting = newValue;
    }
  });
  $('#colhide').editable({
    source: [{value: 'true', text: '显示'}, {value: 'false', text: '隐藏'}],
    success: (response, newValue) =>{
      this.nodeProperties.colhide = newValue;
    }
  });

  $('#field').editable('setValue', this.nodeProperties.field, false);
  $('#colwidth').editable('setValue', this.nodeProperties.colwidth, false);
  $('#colalign').editable('setValue', this.nodeProperties.colalign, false);
  $('#coltype').editable('setValue', this.nodeProperties.coltype, false);
  $('#colsorting').editable('setValue', this.nodeProperties.colsorting, false);
  $('#colhide').editable('setValue', this.nodeProperties.colhide, false);
  $('#header').editable('setValue', this.nodeProperties.header, false);
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
