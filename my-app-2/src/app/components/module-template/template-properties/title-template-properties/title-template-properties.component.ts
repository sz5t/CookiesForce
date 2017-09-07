import { Component, OnInit ,OnDestroy } from '@angular/core';
import {TemplateBase} from '../templateBase';
import {Broadcaster} from '../../../../broadcaster/broadcaster';
declare let $: any;
@Component({
  selector: 'app-title-template-properties',
  templateUrl: './title-template-properties.component.html',
  styleUrls: ['./title-template-properties.component.css']
})
export class TitleTemplatePropertiesComponent extends TemplateBase implements OnInit, OnDestroy {

  broadcastFunc: Function = (data) => {
    this.nodeProperties = data;
    $('#title').editable({
      success: (response, newValue) => {
        this.nodeProperties.text = newValue;
      }
    });
    $('#title').editable('setValue', this.nodeProperties.text, false);
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
