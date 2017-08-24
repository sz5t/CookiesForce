import {Component, OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button-template-properties',
  templateUrl: './button-template-properties.component.html',
  styleUrls: ['./button-template-properties.component.css']
})
export class ButtonTemplatePropertiesComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit , AfterViewInit{

  constructor() { }

  ngOnInit() {
    console.log('init');
  }
  ngOnDestroy(){
    console.log('destory');
  }
  ngOnChanges(){
    console.log('onchange');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
}
