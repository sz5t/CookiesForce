import {Component, OnInit, OnDestroy } from '@angular/core';
import {Broadcaster} from '../../../../broadcaster/broadcaster';
import {TemplateBase} from '../templateBase';
declare let $: any;
@Component({
  selector: 'app-button-template-properties',
  templateUrl: './button-template-properties.component.html',
  styleUrls: ['./button-template-properties.component.css']
})
export class ButtonTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy{

  broadcastFunc = (data) => {
    this.nodeProperties = data;
    $('#id').editable({
      success:(response, newValue) =>{
        this.nodeProperties.id = newValue;
      }
    });
    $('#type').editable({
      source: [{value: 'button', text: '按钮'}],
      success:(response, newValue) =>{
        this.nodeProperties.type = newValue;
      }
    });
    $('#img').editable({
      success:(response, newValue) =>{
        this.nodeProperties.img = newValue;
      }
    });
    $('#disImg').editable({
      success:(response, newValue) =>{
        this.nodeProperties.disImg = newValue;
      }
    });
    $('#text').editable({
      success:(response, newValue) =>{
        this.nodeProperties.text = newValue;
      }
    });
    $('#htype').editable({
      source:[{value: 'common', text: '无'}, {value: 'confirm', text: '弹出确认框'}, {value: 'window', text: '弹出窗体'}],
      success:(response, newValue) =>{
        this.nodeProperties.htype = newValue;
      }
    });
    $('#initState').editable({
      source:[{value: 'true', text: '显示'}, {value: 'false', text: '隐藏'}],
      success:(response, newValue) =>{
        this.nodeProperties.initState = newValue;
      }
    });
    $('#id').editable('setValue', this.nodeProperties.id, false);
    $('#type').editable('setValue', this.nodeProperties.type, false);
    $('#img').editable('setValue', this.nodeProperties.img, false);
    $('#disImg').editable('setValue', this.nodeProperties.disImg, false);
    $('#text').editable('setValue', this.nodeProperties.text, false);
    $('#htype').editable('setValue', this.nodeProperties.htype, false);
    $('#initState').editable('setValue', this.nodeProperties.initState, false);
  };
  constructor(protected broadcaster: Broadcaster) {
    super(broadcaster);
    this.broadcastObj = super.init(this.broadcastFunc);
  }

  ngOnInit() {}
  ngOnDestroy(){
    super.destroy();
  }
}
